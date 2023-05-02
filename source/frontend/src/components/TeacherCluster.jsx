import React from "react";
import { useState } from "react";
import { InputLabel, MenuItem, Select, OutlinedInput } from "@mui/material";

const TeacherCluster = () => {
  const [subject, setSubject] = useState();
  const [teachers, setTeachers] = useState([]);

  const handleChangeSubjectArea = (event) => {
    setSubject(event.target.value);
    setTeachers(map[event.target.value]);
  };

  console.log(subject);

  const map = {
    "Neural Network": [
      "Basanta Joshi",
      "Sanjeeb Prasad Panday",
      "Arun Kumar Timalsina",
      "Subarna Shakya",
      "Aman Shakya",
      "Dibakar Raj Pant",
      "Suman Sharma",
      "Sharad Kumar Ghimire",
    ],
    "Network and Security": [
      "Anand Kumar Sah",
      "Daya Sagar Baral",
      "Nanda Bikram Adhikari",
      "Sanjivan Satyal",
      "Santosh Giri",
      "Surendra Shrestha",
    ],

    "IOE news bulletin": ["Babu R. Dawadi", "Shashidhar Ram Joshi"],
  };

  return (
    <>
      <div
        style={{
          marginLeft: "20px",
        }}
      >
        <InputLabel>Subject Area</InputLabel>
        <Select
          value={subject}
          label="SubjectArea"
          onChange={handleChangeSubjectArea}
          style={{
            fontSize: "15px",
            width: "300px",
          }}
        >
          <MenuItem value={"Neural Network"}>Neural Network</MenuItem>
          <br></br>
          <MenuItem value={"Network and Security"}>
            Network and Security
          </MenuItem>
          <br></br>
          <MenuItem value={"IOE news bulletin"}>IOE news bulletin</MenuItem>
          <br></br>
        </Select>
      </div>

      <div
        style={{
          justifyContent: "center",
          alignItems: "left",
          textAlign: "center",
          fontSize: "30px",
          marginTop: "20px",
        }}
      >
        <ul style={{ listStyle: "none" }}>
          {teachers.map((teacher) => (
            <li>{teacher}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TeacherCluster;
