import { NetworkPing } from "@mui/icons-material";
import { MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const PaperAnalytics = () => {
  const [papers, setPapers] = React.useState([]);

  const departmentAnalytics = {
    Civil: 0,
    Architecture: 0,
    "Applied Science and Chemical": 0,
    "Electronics and Computer": 0,
    Mechanical: 0,
    Electrical: 0,
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/papers/")
      .then((response) => response.json())
      .then((papers) => {
        console.log(papers, "here");
        setPapers(papers);
      });
  }, []);

  departmentAnalytics.Civil = papers.reduce(
    (count, paper) =>
      paper.author.profile.department === "Civil" ? count + 1 : count,
    0
  );
  departmentAnalytics.Architecture = papers.reduce(
    (count, paper) =>
      paper.author.profile.department === "Architecture" ? count + 1 : count,
    0
  );
  departmentAnalytics["Applied Science and Chemical"] = papers.reduce(
    (count, paper) =>
      paper.author.profile.department === "Applied Science and Chemical"
        ? count + 1
        : count,
    0
  );
  departmentAnalytics["Electronics and Computer"] = papers.reduce(
    (count, paper) =>
      paper.author.profile.department === "Electronics and Computer"
        ? count + 1
        : count,
    0
  );
  departmentAnalytics.Mechanical = papers.reduce(
    (count, paper) =>
      paper.author.profile.department === "Mechanical" ? count + 1 : count,
    0
  );
  departmentAnalytics.Electrical = papers.reduce(
    (count, paper) =>
      paper.author.profile.department === "Electrical" ? count + 1 : count,
    0
  );

  const data = [
    {
      name: "Civil",
      paper_count: departmentAnalytics.Civil,
    },
    {
      name: "Architecture",
      paper_count: departmentAnalytics.Architecture,
    },

    {
      name: "Electronics and Computer",
      paper_count: departmentAnalytics["Electronics and Computer"],
    },

    {
      name: "Mechanical",
      paper_count: departmentAnalytics.Mechanical,
    },

    {
      name: "Electrical",
      paper_count: departmentAnalytics.Electrical,
    },

    {
      name: "Applied Science and Chemical",
      paper_count: departmentAnalytics["Applied Science and Chemical"],
    },
  ];

  console.log("Analytic:", departmentAnalytics);

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
        {/* <Select
          style={{ width: "300px", marginLeft: "5px" }}
          // onChange={this.onChange}
          name="department"
        >
          {Array.from(department).map((dept) => (
            <MenuItem value={dept}>{dept}</MenuItem>
          ))}
        </Select> */}

        <BarChart
          width={1400}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="paper_count" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default PaperAnalytics;
