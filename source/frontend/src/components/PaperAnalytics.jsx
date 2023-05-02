import { ResetTvRounded } from "@mui/icons-material";
import { InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import { PieChart, Pie, Cell, LineChart, Line } from "recharts";
import DepartmentPapers from "./DepartmentPapers.jsx";
import { Link, Redirect } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PaperAnalytics = () => {
  const [papers, setPapers] = React.useState([]);
  const [year, setYear] = React.useState(2022);
  const [department, setDepartment] = React.useState(
    "Electronics and Computer"
  );

  const initialDepartmentPapers = {
    Civil: [],
    Architecture: [],
    "Applied Science and Chemical": [],
    "Electronics and Computer": [],
    Mechanical: [],
    Electrical: [],
  };

  const departmentPapers = (papers) => {
    papers.forEach((paper) => {
      if (paper.author.profile.department === "Civil")
        initialDepartmentPapers.Civil.push(paper);
      if (paper.author.profile.department === "Architecture")
        initialDepartmentPapers.Architecture.push(paper);
      if (paper.author.profile.department === "Electronics and Computer")
        initialDepartmentPapers["Electronics and Computer"].push(paper);
      if (paper.author.profile.department === "Applied Science and Chemical")
        initialDepartmentPapers["Applied Science and Chemical"].push(paper);
      if (paper.author.profile.department === "Electrical")
        initialDepartmentPapers.Electrical.push(paper);
      if (paper.author.profile.department === "Mechanical")
        initialDepartmentPapers.Mechanical.push(paper);
    });
  };

  console.log({ initialDepartmentPapers });

  const departmentAnalytics = {
    Civil: 0,
    Architecture: 0,
    "Applied Science and Chemical": 0,
    "Electronics and Computer": 0,
    Mechanical: 0,
    Electrical: 0,
  };

  const yearWiseData = {
    2018: 0,
    2019: 0,
    2020: 0,
    2021: 0,
    2022: 0,
    2023: 0,
  };

  yearWiseData["2018"] = papers.reduce(
    (count, paper) =>
      paper?.publication_date?.includes("2018") ? count + 1 : count,
    0
  );

  yearWiseData["2019"] = papers.reduce(
    (count, paper) =>
      paper?.publication_date?.includes("2019") ? count + 1 : count,
    0
  );

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/papers/", { cache: "force-cache" })
      .then((response) => response.json())
      .then((papers) => {
        console.log(papers, "here");
        setPapers(papers);
      });
  }, []);

  departmentPapers(papers);

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

  const getResearchersCount = (department) => {
    const researchersSet = new Set();
    papers.forEach((paper) => {
      if (paper?.author?.profile?.department === department)
        researchersSet.add(paper?.author.id);
    });
    return researchersSet.size;
  };

  const data = [
    {
      name: "Civil",
      total_papers: departmentAnalytics.Civil,
      total_researchers: getResearchersCount("Civil"),
    },
    {
      name: "Architecture",
      total_papers: departmentAnalytics.Architecture,
      total_researchers: getResearchersCount("Architecture"),
    },

    {
      name: "Electronics and Computer",
      total_papers: departmentAnalytics["Electronics and Computer"],
      total_researchers: getResearchersCount("Electronics and Computer"),
    },

    {
      name: "Mechanical",
      total_papers: departmentAnalytics.Mechanical,
      total_researchers: getResearchersCount("Mechanical"),
    },

    {
      name: "Electrical",
      total_papers: departmentAnalytics.Electrical,
      total_researchers: getResearchersCount("Electrical"),
    },

    {
      name: "Applied Science and Chemical",
      total_papers: departmentAnalytics["Applied Science and Chemical"],
      total_researchers: getResearchersCount("Applied Science and Chemical"),
    },
  ];

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const getCount = (department) => {
    return papers.reduce(
      (count, paper) =>
        paper.author.profile.department === department &&
        paper?.publication_date?.includes(year)
          ? count + 1
          : count,
      0
    );
  };

  const dataPieCharts = [
    { name: "Civil", value: getCount("Civil") },
    { name: "Architecture", value: getCount("Architecture") },
    {
      name: "Applied Science and Chemical",
      value: getCount("Applied Science and Chemical"),
    },
    { name: "Mechanical", value: getCount("Mechanical") },
    {
      name: "Electronics and Computer",
      value: getCount("Electronics and Computer"),
    },
    { name: "Electrical", value: getCount("Electrical") },
  ];

  const getResearchersName = (department) => {
    const researchers = new Set();

    papers.forEach((paper) => {
      if (paper.author.profile.department === department)
        researchers.add(paper.author.profile.full_name);
    });
    return researchers;
  };

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "cyan",
    "#f0079a",
  ];

  const getPaperCountByYear = (year) => {
    return papers.reduce(
      (count, paper) =>
        paper?.publication_date?.includes(year) ? count + 1 : count,
      0
    );
  };

  const lineData = [
    {
      name: "2018",
      value: getPaperCountByYear("2018"),
    },
    {
      name: "2019",
      value: getPaperCountByYear("2019"),
    },
    {
      name: "2020",
      value: getPaperCountByYear("2020"),
    },
    {
      name: "2021",
      value: getPaperCountByYear("2021"),
    },
    {
      name: "2022",
      value: getPaperCountByYear("2022"),
    },
    {
      name: "2023",
      value: getPaperCountByYear("2023"),
    },
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className="form-group mt-2">
        <h1
          style={{
            color: "black",
            fontFamily: "cursive",
            fontSize: "20px",
            marginLeft: "20px",
          }}
        >
          Publications per Department
        </h1>
        <LineChart
          width={1300}
          height={500}
          data={lineData}
          margin={{
            top: 5,
            right: 30,
            left: 180,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="grey" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="value" stroke="black" />
        </LineChart>
      </div>

      <div className="form-group mt-2">
        <h1
          style={{
            color: "black",
            fontFamily: "cursive",
            fontSize: "20px",
            marginLeft: "20px",
          }}
        >
          Publications per Department
        </h1>
        <div
          style={{
            display: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BarChart
            width={1300}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 180,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total_papers" fill="#036bfc" />
          </BarChart>
        </div>
      </div>
      <br />
      <br />
      <div className="form-group mt-2">
        <h1
          style={{
            color: "black",
            fontFamily: "cursive",
            fontSize: "20px",
            marginLeft: "20px",
          }}
        >
          Researchers per Department
        </h1>
        <div
          style={{
            display: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BarChart
            width={1300}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 180,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total_researchers" fill="#f0079a" />
          </BarChart>
        </div>
      </div>
      <br />
      <br />
      <div className="form-group mt-2">
        <h1
          style={{
            color: "black",
            fontFamily: "cursive",
            fontSize: "20px",
            marginLeft: "20px",
          }}
        >
          Last 6 years history
        </h1>
        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <InputLabel>Year</InputLabel>
          <Select
            value={year}
            label="Year"
            onChange={handleChange}
            style={{
              fontSize: "10px",
            }}
          >
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
            <MenuItem value={2018}>2018</MenuItem>
          </Select>

          <div
            style={{
              display: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PieChart
              width={800}
              height={500}
              style={{
                marginLeft: "300px",
              }}
            >
              <Legend layout="vertical" verticalAlign="right" align="right" />
              <Pie
                data={dataPieCharts}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={199}
                fill="#8884d8"
                dataKey="value"
              >
                {dataPieCharts.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
      <div>
        <h1
          style={{
            color: "black",
            fontFamily: "cursive",
            fontSize: "20px",
            marginLeft: "20px",
          }}
        >
          List of Researchers and Publications
        </h1>
        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <InputLabel>Department</InputLabel>
          <Select
            value={department}
            label="Department"
            onChange={handleChangeDepartment}
            style={{
              fontSize: "12px",
              width: "300px",
            }}
          >
            <MenuItem value={"Civil"}>Civil</MenuItem>
            <MenuItem value={"Architecture"}>Architecture</MenuItem>
            <MenuItem value={"Applied Science and Chemical"}>
              Applied Science and Chemical
            </MenuItem>
            <MenuItem value={"Mechanical"}>Mechanical</MenuItem>
            <MenuItem value={"Electronics and Computer"}>
              Electronics and Computer
            </MenuItem>
            <MenuItem value={"Electrical"}>Electrical</MenuItem>
          </Select>
        </div>
        <DepartmentPapers
          departmentPapers={initialDepartmentPapers[department]}
          departmentName={department}
          researchersName={Array.from(getResearchersName(department))}
        />
      </div>
    </div>
  );
};

export default PaperAnalytics;
