import data from "./file.json";
import { get } from "lodash";
import React, { Component, component } from "react";

export default class NamelistTry extends Component {
  constructor(props) {
    super(props);
  }

  render = () => (
    <div className="container">
      <div className="row">
        {Object.entries(data)
          .map(([key, value]) => value)
          .map((paper) => (
            <div
              style={{
                padding: "10px 5px ",
              }}
            >
              <h5>
                <a href={paper.URL} target="/">
                  Title : {paper.Title}
                </a>
              </h5>
              <h5>Authors : {paper.Authors}</h5>
              <h5>Publication Date : {paper["Publication date"]}</h5>
              <h5>Conference : {paper.Conference}</h5>
              <h5>Pages : {paper.Pages}</h5>
              <h5>Publisher : {paper.Publisher}</h5>
            </div>
          ))}
      </div>
    </div>
  );
}
