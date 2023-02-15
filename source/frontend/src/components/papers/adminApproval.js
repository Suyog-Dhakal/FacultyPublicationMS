// import React from "react";
// import { Fragment } from "react";
// import { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
// import { getAllPapers } from "../../actions/papers";
// import { getProfile } from "../../actions/profiles";

// export class AdminApproval extends Component {
//   static propTypes = {
//     getAllPapers: PropTypes.func.isRequired,
//     getProfile: PropTypes.func.isRequired,
//   };
//   // const [data, setData] = useState({});
//   //console.log(data);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const data = await fetch("http://127.0.0.1:8000/api/getAllPapers/");
//   //   };
//   //   console.log(data.json());
//   //   fetchData().catch(console.error);
//   // }, []);

//   // let papers = [
//   //   {
//   //     id: 1,
//   //     publication_date: "13/13",
//   //     author: {
//   //       id: 1,
//   //       profile: {
//   //         full_name: "ram",
//   //       },
//   //     },
//   //     authors: ["hari", "shyam", "sita"],
//   //     title: "lstm",
//   //   },
//   // ];

//   const approve = () => {
//     console.log("paper approved");
//   };

//   const reject = () => {
//     console.log("paper rejected");
//   };

//   getUser = (id) => {
//     this.props.getProfile(id);
//   };

//   render() {
//     console.log(getAllPapers());
//     let papers = [
//       {
//         id: 1,
//         publication_date: "13/13",
//         author: {
//           id: 1,
//           profile: {
//             full_name: "ram",
//           },
//         },
//         authors: ["hari", "shyam", "sita"],
//         title: "lstm",
//       },
//     ];
//     return (
//       <Fragment>
//         <div className="table-responsive">
//           <table className="table table-striped table-hover table-sm">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Papers</th>
//                 <th>Authors</th>
//                 <th>Approval status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {papers.map((paper) => (
//                 <tr key={paper.id}>
//                   <td>{paper.publication_date}</td>
//                   <td>
//                     <Link to={"/paper/" + paper.id} className="">
//                       {paper.title}
//                     </Link>
//                   </td>
//                   <td>
//                     <Link
//                       to={"/user/" + paper.author.id}
//                       onClick={() => this.getUser(paper.author.id)}
//                       className=""
//                     >
//                       {paper.author.profile
//                         ? paper.author.profile.full_name
//                         : ""}
//                     </Link>
//                     {paper.authors !== "" ? " and " + paper.authors : ""}
//                   </td>

//                   <td>
//                     <button
//                       type="button"
//                       className="btn btn-success active"
//                       onClick={approve}
//                     >
//                       Approve
//                     </button>
//                   </td>

//                   <td>
//                     <button
//                       type="button"
//                       className="btn btn-danger active"
//                       onClick={reject}
//                     >
//                       Reject
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </Fragment>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   user: state.auth.user,
//   papers: state.papers.papers,
// });

// export default connect(mapStateToProps, {
//   getAllPapers,
// })(AdminApproval);

import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import produce from "immer";
import store from "../../store";

import { Link } from "react-router-dom";

import { putPapers, getAllPapers } from "../../actions/papers";
import { getProfile } from "../../actions/profiles";
const AdminApproval = () => {
  // let papers = [
  //   {
  //     id: 1,
  //     publication_date: "12/13",
  //     author: {
  //       id: 1,
  //       profile: {
  //         full_name: "ram",
  //       },
  //     },
  //     authors: ["suraj", "shyam", "sita"],
  //     title: "lstm",
  //   },
  // ];
  const dispatch = useDispatch();
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/getAllPapers/", { cache: "force-cache" })
      .then((response) => response.json())
      .then((papers) => {
        console.log(papers, "here");
        setPapers(papers["paper detail"]);
      });
  }, []);

  // const approve = (paper) => {
  //   console.log("paper approved");
  //   paper[approval_status] = "approved";
  // };

  // const reject = () => {
  //   console.log("paper rejected");
  // };
  return (
    <div className="table-responsive">
      {console.log(papers)}
      <table className="table table-striped table-hover table-sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>Papers</th>
            <th>Authors</th>
          </tr>
        </thead>
        <tbody>
          {papers?.map((paper) => {
            console.log({ paper: paper });
            return (
              <tr key={paper.id}>
                <td>{paper.publication_date}</td>
                <td>
                  <Link to={"/paper/" + paper.id} className="">
                    {paper.title}
                  </Link>
                </td>
                <td>
                  <Link
                    to={"/user/" + paper.author.id}
                    onClick={() => store.dispatch(getProfile(paper.author.id))}
                    className=""
                  >
                    {paper.author.profile ? paper.author.profile.full_name : ""}
                  </Link>
                  {paper.authors !== "" ? " and " + paper.authors : ""}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                      console.log("approved button clicked");
                      store.dispatch(
                        putPapers(
                          paper.id,
                          produce(paper, (draft) => {
                            draft["approval_status"] = "approved";
                          })
                        )
                      );
                    }}
                  >
                    Approve
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      console.log("reject button clicked");
                      store.dispatch(
                        putPapers(
                          paper.id,
                          produce(paper, (draft) => {
                            draft["approval_status"] = "rejected";
                          })
                        )
                      );
                    }}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default AdminApproval;
