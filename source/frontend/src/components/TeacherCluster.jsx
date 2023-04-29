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
      "Santosh Giri",
      "Arun Kumar Timalsina",
      "Subarna Shakya",
      "Babu R. Dawadi",
      "Aman Shakya",
      "Dibakar Raj Pant",
      "Suman Sharma",
      "Sanjivan Satyal",
      "Surendra Shrestha",
    ],
    "Natural Language Processing": [
      "Basanta Joshi",
      "Sanjeeb Prasad Panday",
      "Arun Kumar Timalsina",
      "Subarna Shakya",
      "Aman Shakya",
      "Sanjivan Satyal",
    ],
    "Distributed System": ["Babu R. Dawadi", "Subarna Shakya"],

    "Internet and Networking": [
      "Babu R. Dawadi",
      "Subarna Shakya",
      "Sharad K. Ghimire",
      "Shashidhar R. Joshi",
      "Arun Kumar Timalsina",
      "Surendra Shrestha",
    ],

    "Internet Of Things": [
      "Sanjeeb Prasad Panday",
      "Subarna Shakya",
      "Basanta Joshi",
      "Aman Shakya",
    ],
    "Security and Intelligence": [
      "Babu R. Dawadi",
      "Subarna Shakya",
      "Basanta Joshi",
      "Santosh Giri",
      "Sanjeeb Prasad Panday",
      "Surendra Shrestha",
    ],

    "Cloud and BigData": [
      "Babu R. Dawadi",
      "Subarna Shakya",
      "Basanta Joshi",
      "Santosh Giri",
      "Sanjeeb Prasad Panday",
      "Sharad Kumar Ghimire",
      "Nanda Bikram Adhikari",
      "Shashidhar R. Joshi",
    ],

    "E-Governance": [
      "Subarna Shakya",
      "Babu R. Dawadi",
      "Basanta Joshi",
      "Sanjeeb Prasad Panday",
      "Shashidhar R. Joshi",
      "Surendra Shrestha",
    ],
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
          <MenuItem value={"Natural Language Processing"}>
            Natural Language Processing
          </MenuItem>
          <br></br>
          <MenuItem value={"Distributed System"}>Distributed System</MenuItem>
          <br></br>
          <MenuItem value={"Internet and Networking"}>
            Internet and Networking
          </MenuItem>
          <br></br>
          <MenuItem value={"Internet Of Things"}>Internet Of Things</MenuItem>
          <br></br>
          <MenuItem value={"Security and Intelligence"}>
            Security and Intelligence
          </MenuItem>
          <br></br>
          <MenuItem value={"Cloud and BigData"}>Cloud and BigData</MenuItem>
          <br></br>

          <MenuItem value={"E-Governance"}>E-Governance</MenuItem>
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
