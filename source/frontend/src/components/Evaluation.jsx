import React from "react";
import { InputLabel, MenuItem, Select, OutlinedInput } from "@mui/material";
import { useEffect } from "react";
import CourseEvaluationForm from "./CourseEvaluationForm.jsx";

const Evaluation = () => {
  const [department, setDepartment] = React.useState(
    "Electronics and Computer"
  );
  const [subject, setSubject] = React.useState("");
  const [papers, setPapers] = React.useState([]);
  const [professor, setProfessor] = React.useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/papers/", { cache: "force-cache" })
      .then((response) => response.json())
      .then((papers) => {
        setPapers(papers);
        console.log(papers, "here");
      });
  }, []);

  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleProfessorChange = (event) => {
    setProfessor(event.target.value);
  };

  const getSubjectTeachingByProfessor = (professor) => {
    console.log({ professor });
    const firstPaper = papers.find(({ full_name }) => full_name === professor);

    console.log({ firstPaper });

    return firstPaper?.author?.profile?.teaching_course?.values();
  };

  console.log({ professor });

  const getResearchersName = (department) => {
    const researchers = new Set();

    papers.forEach((paper) => {
      if (paper?.author?.profile?.department === department)
        researchers.add(paper.author.profile.full_name);
    });
    return researchers;
  };

  return (
    <>
      <h1 style={{ color: "green" }}>Course Evaluation Portal</h1>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "100px" }}>
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
          <InputLabel>Professor Name</InputLabel>
          <Select
            label="Professor"
            onChange={handleProfessorChange}
            value={professor}
            style={{
              fontSize: "15px",
              width: "300px",
            }}
          >
            {Array.from(getResearchersName(department))?.map(
              (currentProfessor) => (
                <MenuItem value={currentProfessor}>{currentProfessor}</MenuItem>
              )
            )}
          </Select>
        </div>

        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <InputLabel>Subject</InputLabel>
          <Select
            label="Subject"
            onChange={handleSubjectChange}
            value={subject}
            style={{
              fontSize: "15px",
              width: "300px",
            }}
          >
            {getSubjectTeachingByProfessor(professor)?.map((currentSubject) => (
              <MenuItem value={currentSubject}>{currentSubject}</MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <CourseEvaluationForm />
    </>
  );
};

export default Evaluation;
