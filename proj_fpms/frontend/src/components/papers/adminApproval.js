import React from "react";

import { Link } from "react-router-dom";

const adminApproval = () => {
  let papers = [
    {
      id: 1,
      publication_date: "13/13",
      author: {
        id: 1,
        profile: {
          full_name: "ram",
        },
      },
      authors: ["hari", "shyam", "sita"],
      title: "lstm",
    },
  ];

  const approve = () => {
    console.log("paper approved");
  };
  const reject = () => {
    console.log("paper rejected");
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover table-sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>Papers</th>
            <th>Authors</th>
            <th>Approval status</th>
          </tr>
        </thead>
        <tbody>
          {papers.map((paper) => (
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
                  onClick={() => getUser(paper.author.id)}
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
                  onClick={approve}
                >
                  Approve
                </button>
              </td>

              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={reject}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default adminApproval;
