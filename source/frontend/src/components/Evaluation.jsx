import React from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";

const Evaluation = () => {
  const [department, setDepartment] = React.useState(
    "Electronics and Computer"
  );
  const [subject, setSubject] = React.useState("");
  const [researchers, setResearchers] = React.useState("");
  const [yearofservice, setYearOfService] = React.useState("less than 2");

  const handleChangeYearOfService = (event) => {
    setYearOfService(event.target.value);
  };

  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const handleChangeResearchers = (event) => {
    setResearchers(event.target.value);
  };

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };

  const getResearchersName = (department) => {
    const researchers = new Set();

    papers.forEach((paper) => {
      if (paper.author.profile.department === department)
        researchers.add(paper.author.profile.full_name);
    });
    return researchers;
  };

  return (
    <>
      <div style={{ display: "flex", gap: "1rem", padding: "10px" }}>
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
              fontSize: "15px",
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

        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <InputLabel>Researcher</InputLabel>
          <Select
            value={researchers}
            label="Researcher"
            onChange={handleChangeResearchers}
            style={{
              fontSize: "15px",
              width: "300px",
            }}
          >
            <MenuItem value={researchers}>
              {/* {Array.from(getResearchersName(department))} */}
              teacher
            </MenuItem>
          </Select>
        </div>

        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <InputLabel>Subject</InputLabel>
          <Select
            value={subject}
            label="Subject"
            onChange={handleChangeSubject}
            style={{
              fontSize: "15px",
              width: "300px",
            }}
          >
            <MenuItem value={subject}>subject</MenuItem>
          </Select>
        </div>

        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <InputLabel>Year of Service</InputLabel>
          <Select
            value={yearofservice}
            label="YearOfService"
            onChange={handleChangeYearOfService}
            style={{
              fontSize: "15px",
              width: "300px",
            }}
          >
            <MenuItem value={"less than 2"}> less than 2</MenuItem>
            <MenuItem value={"3 - 5"}>3 - 5</MenuItem>
            <MenuItem value={"5 - 10"}>5 - 10</MenuItem>
            <MenuItem value={"10 - 15"}>10-15</MenuItem>
            <MenuItem value={"15 - 20"}>15-20</MenuItem>
            <MenuItem value={"More than 20"}> More than 20</MenuItem>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Evaluation;
