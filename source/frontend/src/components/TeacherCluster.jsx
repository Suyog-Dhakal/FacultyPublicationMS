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
    "Semantic Analysis": [
      "Aman Shakya",
      "Dibakar Raj Pant",
      "Arun Kumar Timalsina",
      "Basanta Joshi",
      "Subarna Shakya",
    ],
    "Advanced Encryption": [
      "Subarna Shakya",
      "Surendra Shrestha",
      "Nanda Bikram Adhikari",
    ],
    "Neural Network": [
      "Aman Shakya",
      "Subarna Shakya",
      "Sanjeeb Prasad Panday",
      "Basanta Joshi",
    ],

    "Data and Language": [
      "Aman Shakya",
      "Subarna Shakya",
      "Basanta Joshi",
      "Nanda Bikram Adhikari",
    ],
    "Nepali Speech Processing": ["Basanta Joshi", "Aman Shakya"],
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
          <MenuItem value={"Semantic Analysis"}>Semantic Analysis</MenuItem>
          <br></br>
          <MenuItem value={"Advanced Encryption"}>Advanced Encryption</MenuItem>
          <br></br>
          <MenuItem value={"Neural Network"}>Neural Network</MenuItem>
          <br></br>
          <MenuItem value={"Data and Language"}>Data and Language</MenuItem>
          <br></br>
          <MenuItem value={"Nepali Speech Processing"}>
            Nepali Speech Processing
          </MenuItem>
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
