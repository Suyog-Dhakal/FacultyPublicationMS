import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
const DepartmentPapers = ({
  departmentPapers,
  departmentName,
  researchersName,
}) => {
  const downloadPDF = () => {
    var restorepage = document.body.innerHTML;
    var printContent = document.getElementById("print-content").innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = restorepage;
    location.reload();
  };

  return (
    <div>
      <button
        onClick={downloadPDF}
        style={{
          border: "none",
          background: "none",
        }}
      >
        Download PDF
      </button>
      <div id="print-content">
        <h2
          style={{
            fontStyle: "cursive",
          }}
        >
          All Research papers of Department of {departmentName} Engineering
        </h2>
        <h4
          style={{
            fontStyle: "cursive",
            color: "black",
          }}
        >
          Total Researchers:{researchersName.length}
        </h4>
        <h4
          style={{
            fontStyle: "cursive",
            color: "black",
          }}
        >
          All Researchers Name:
        </h4>
        <p>{researchersName.join(", ") + "."}</p>
        <table
          className="table table-bordered table-responsive"
          id="my-table"
          style={{
            padding: "0 40px",
          }}
        >
          <thead>
            <tr>
              <td>
                <strong>Title</strong>
              </td>
              <td>
                <strong>Authors</strong>
              </td>
              <td>
                <strong>Date</strong>
              </td>
              <td>
                <strong>Publisher/Conference/Journal</strong>
              </td>

              <td
                style={{
                  maxWidth: "100px",
                }}
              >
                <strong>Link</strong>
              </td>
            </tr>
          </thead>

          <tbody>
            {departmentPapers.map((paper, index) => (
              <tr key={paper.id}>
                <td
                  id="Title"
                  style={{
                    width: "33%",
                  }}
                >
                  {index + 1}. {paper.title}
                </td>

                <td
                  id="Authors"
                  style={{
                    width: "33%",
                  }}
                >
                  {paper.authors}
                </td>
                <td id="Publication_Date">{paper.publication_date}</td>

                <td id="Publisher">
                  {
                    <>
                      {paper.publisher}
                      <br></br>
                      {paper?.conference_name}
                      <br></br>
                      {paper?.journal}
                    </>
                  }
                </td>

                <td
                  id="Paper_Link"
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  <a href={paper.paper_link}>click here</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DepartmentPapers;
