import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getPapers, deletePapers, putPapers } from "../../actions/papers";
import { getProfile } from "../../actions/profiles";

const adminApproval = () => {
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
          {this.props.papers.map((paper) => (
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
                  onClick={() => this.getUser(paper.author.id)}
                  className=""
                >
                  {/* no routing through name link */}
                  {paper.author.profile ? paper.author.profile.full_name : ""}
                </Link>
                {paper.authors !== "" ? " and " + paper.authors : ""}
              </td>

              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={approve}
                >
                  Approve
                </button>
              </td>

              <td>
                <button
                  type="button"
                  className="btn btn-primary"
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
