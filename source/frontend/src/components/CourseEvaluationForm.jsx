import React, { useState } from "react";

import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core";
const scoreMap = {
  verysatisfied: 5,
  satisfied: 4,
  neutral: 3,
  dissatisfied: 2,
  verydissatisfied: 1,
};
import { SnackbarProvider, enqueueSnackbar } from "notistack";
const CourseEvaluationForm = () => {
  const validEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@pcampus\.edu\.np$/;
    console.log("test", regex.test(email));
    return regex.test(email);
  };

  const [courseContent, setCourseContent] = useState("");
  const [knowledge, setKnowledge] = useState("");
  const [preparedness, setPreparedness] = useState("");
  const [communication, setCommunication] = useState("");
  const [respond, setRespond] = useState("");
  const [relation, setRelation] = useState("");
  const [courseMaterial, setCourseMaterial] = useState("");
  const [email, setEmail] = useState("");

  let totalScore = 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e?.data);

    totalScore += courseContent === "" ? 0 : scoreMap[courseContent];
    totalScore += knowledge === "" ? 0 : scoreMap[knowledge];
    totalScore += preparedness === "" ? 0 : scoreMap[preparedness];
    totalScore += communication === "" ? 0 : scoreMap[communication];
    totalScore += respond === "" ? 0 : scoreMap[respond];
    totalScore += relation === "" ? 0 : scoreMap[relation];
    totalScore += courseMaterial === "" ? 0 : scoreMap[courseMaterial];

    console.log(totalScore);

    setTimeout(() => {
      location.replace("/#/login");
    }, 1000);
  };
  const hStyle = { color: "black" };
  const smallFont = { fontSize: "5px" };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <div style={{ display: "inline-block" }}>
          <label for="email">Enter your college email:</label>
          <input
            style={{ width: "300px" }}
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e?.target.value)}
            required
          />
          <br />
          <br />
          <FormLabel component="legend" style={hStyle}>
            1. How satisfied were you with the course content?
          </FormLabel>

          <RadioGroup
            style={{ display: "inline-block", marginRight: "10px" }}
            name="courseContent"
            value={courseContent}
            onChange={(e) => {
              setCourseContent(e.target.value);
            }}
          >
            <FormControlLabel
              value="verysatisfied"
              control={<Radio required />}
              label="Very satisfied"
            />

            <FormControlLabel
              value="satisfied"
              control={<Radio required />}
              label="Satisfied"
            />
            <FormControlLabel
              value="neutral"
              control={<Radio required />}
              label="Neutral"
            />
            <FormControlLabel
              value="dissatisfied"
              control={<Radio required />}
              label="Dissatisfied"
            />
            <FormControlLabel
              value="verydissatisfied"
              control={<Radio required />}
              label="Very dissatisfied"
            />
          </RadioGroup>
        </div>
        <br></br>

        <FormLabel component="legend" style={hStyle}>
          2. How would you evaluate the instructor's level of knowledge
          regarding the subject matter?
        </FormLabel>
        <RadioGroup
          style={{ display: "inline-block", marginRight: "10px" }}
          name="knowledge"
          value={knowledge}
          onChange={(e) => {
            setKnowledge(e.target.value);
          }}
        >
          <FormControlLabel
            value="verysatisfied"
            control={<Radio required />}
            label="Very satisfied"
          />
          <FormControlLabel
            value="satisfied"
            control={<Radio required />}
            label="Satisfied"
          />
          <FormControlLabel
            value="neutral"
            control={<Radio required />}
            label="Neutral"
          />
          <FormControlLabel
            value="dissatisfied"
            control={<Radio required />}
            label="Dissatisfied"
          />
          <FormControlLabel
            value="verydissatisfied"
            control={<Radio required />}
            label="Very dissatisfied"
          />
        </RadioGroup>
        <br></br>

        <FormLabel component="legend" style={hStyle}>
          3. How prepared the instructor was for each class?
        </FormLabel>
        <RadioGroup
          style={{ display: "inline-block", marginRight: "10px" }}
          name="preparedness"
          value={preparedness}
          onChange={(e) => {
            setPreparedness(e.target.value);
          }}
        >
          <FormControlLabel
            value="verysatisfied"
            control={<Radio required />}
            label="Very satisfied"
          />
          <FormControlLabel
            value="satisfied"
            control={<Radio required />}
            label="Satisfied"
          />
          <FormControlLabel
            value="neutral"
            control={<Radio required />}
            label="Neutral"
          />
          <FormControlLabel
            value="dissatisfied"
            control={<Radio required />}
            label="Dissatisfied"
          />
          <FormControlLabel
            value="verydissatisfied"
            control={<Radio required />}
            label="Very dissatisfied"
          />
        </RadioGroup>
        <br></br>

        <FormLabel component="legend" style={hStyle}>
          4. How effective was the communication in the classroom?
        </FormLabel>
        <RadioGroup
          style={{ display: "inline-block", marginRight: "10px" }}
          name="communication"
          value={communication}
          onChange={(e) => {
            setCommunication(e.target.value);
          }}
        >
          <FormControlLabel
            value="verysatisfied"
            control={<Radio required />}
            label="Very satisfied"
          />
          <FormControlLabel
            value="satisfied"
            control={<Radio required />}
            label="Satisfied"
          />
          <FormControlLabel
            value="neutral"
            control={<Radio required />}
            label="Neutral"
          />
          <FormControlLabel
            value="dissatisfied"
            control={<Radio required />}
            label="Dissatisfied"
          />
          <FormControlLabel
            value="verydissatisfied"
            control={<Radio required />}
            label="Very dissatisfied"
          />
        </RadioGroup>
        <br></br>

        <FormLabel component="legend" style={hStyle}>
          5. How well the instructor responded to the students' questions?
        </FormLabel>
        <RadioGroup
          style={{ display: "inline-block", marginRight: "10px" }}
          name="respond"
          value={respond}
          onChange={(e) => {
            setRespond(e.target.value);
          }}
        >
          <FormControlLabel
            value="verysatisfied"
            control={<Radio required />}
            label="Very satisfied"
          />
          <FormControlLabel
            value="satisfied"
            control={<Radio required />}
            label="Satisfied"
          />
          <FormControlLabel
            value="neutral"
            control={<Radio required />}
            label="Neutral"
          />
          <FormControlLabel
            value="dissatisfied"
            control={<Radio required />}
            label="Dissatisfied"
          />
          <FormControlLabel
            value="verydissatisfied"
            control={<Radio required />}
            label="Very dissatisfied"
          />
        </RadioGroup>
        <br></br>

        <FormLabel component="legend" style={hStyle}>
          6. How positive was the relation of instructor with the students?
        </FormLabel>
        <RadioGroup
          style={{ display: "inline-block", marginRight: "10px" }}
          name="relation"
          value={relation}
          onChange={(e) => {
            setRelation(e.target.value);
          }}
        >
          <FormControlLabel
            value="verysatisfied"
            control={<Radio required />}
            label="Very satisfied"
          />
          <FormControlLabel
            value="satisfied"
            control={<Radio required />}
            label="Satisfied"
          />
          <FormControlLabel
            value="neutral"
            control={<Radio required />}
            label="Neutral"
          />
          <FormControlLabel
            value="dissatisfied"
            control={<Radio required />}
            label="Dissatisfied"
          />
          <FormControlLabel
            value="verydissatisfied"
            control={<Radio required />}
            label="Very dissatisfied"
          />
        </RadioGroup>
        <br></br>
        <FormLabel component="legend" style={hStyle}>
          7. How well the instuctor provided the course materials that helped
          the students?
        </FormLabel>
        <RadioGroup
          style={{ display: "inline-block", marginRight: "10px" }}
          name="courseMaterial"
          value={courseMaterial}
          onChange={(e) => {
            setCourseMaterial(e.target.value);
          }}
        >
          <FormControlLabel
            value="verysatisfied"
            control={<Radio required />}
            label="Very satisfied"
          />
          <FormControlLabel
            value="satisfied"
            control={<Radio required />}
            label="Satisfied"
          />
          <FormControlLabel
            value="neutral"
            control={<Radio required />}
            label="Neutral"
          />
          <FormControlLabel
            value="dissatisfied"
            control={<Radio required />}
            label="Dissatisfied"
          />
          <FormControlLabel
            value="verydissatisfied"
            control={<Radio required />}
            label="Very dissatisfied"
          />
        </RadioGroup>
        <br></br>
        <SnackbarProvider
          style={{
            color: "green",
            backgroundColor: "whitesmoke",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            fontSize: "0.8rem",
            padding: "5px 10px",
            width: "100px",
          }}
          disabled={!validEmail(email)}
          onClick={() => {
            enqueueSnackbar("Response has been succesfully submitted!");
          }}
        >
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default CourseEvaluationForm;
