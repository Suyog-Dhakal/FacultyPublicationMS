import { InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
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
  const [year, setYear] = React.useState(2023);

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

  const department = new Set();

  papers.forEach((paper) => {
    department.add(paper?.author?.profile?.department);
  });

  const handleChange = (event) => {
    setYear(event.target.value);
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

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "cyan",
    "#f0079a",
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
          Department wise paper count
        </h1>
        <div
          style={{
            display: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BarChart
            width={1000}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 180,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="paper_count" fill="#036bfc" />
          </BarChart>
        </div>
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
          Last 5 years history
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
              height={800}
              style={{
                marginLeft: "180px",
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
    </div>
  );
};

export default PaperAnalytics;
