import { NetworkPing } from "@mui/icons-material";
import { MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";

const PaperAnalytics = () => {
  const [papers, setPapers] = React.useState([]);
  const [username, setUserName] = React.useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/papers/")
      .then((response) => response.json())
      .then((papers) => {
        console.log(papers, "here");
        setPapers(papers);
      });
  }, []);

  const department = new Set();

  papers.forEach((paper) => {
    department.add(paper?.author?.profile?.department);
  });

  department.forEach((dept) => {
    console.log(dept);
  });

  return (
    <div>
      <div className="form-group mt-2">
        <label>Department</label>
        <Select
          style={{ width: "300px", marginLeft: "5px" }}
          // onChange={this.onChange}
          name="department"
        >
          {Array.from(department).map((dept) => (
            <MenuItem value={dept}>{dept}</MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default PaperAnalytics;
