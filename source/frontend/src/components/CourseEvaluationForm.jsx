import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  TextField,
} from "@material-ui/core";

const CourseEvaluationForm = () => {
  const [courseContent, setCourseContent] = useState("");
  const [knowledge, setKnowledge] = useState("");
  const [preparedness, setPreparedness] = useState("");
  const [communication, setCommunication] = useState("");
  const [respond, setRespond] = useState("");
  const [relation, setRelation] = useState("");
  const [courseMaterial, setCourseMaterial] = useState("");
  const [likedMost, setLikedMost] = useState("");
  const [likedLeast, setLikedLeast] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [wouldRecommend, setWouldRecommend] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    alert("Your answers have been recorded!");
  };
  const hStyle = { color: "black" };
  const smallFont = { fontSize: "5px" };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <div style={{ display: "inline-block" }}>
          <FormLabel component="legend" style={hStyle}>
            1. How satisfied were you with the course content?
          </FormLabel>

          <RadioGroup
            style={{ display: "inline-block", marginRight: "10px" }}
            name="courseContent"
            value={courseContent}
            onChange={(e) => setCourseContent(e.target.value)}
          >
            <FormControlLabel
              value="verySatisfied"
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
              value="veryDissatisfied"
              control={<Radio required />}
              label="Very dissatisfied"
            />
          </RadioGroup>
        </div>

        <FormLabel component="legend" style={hStyle}>
          2. How was the knowledge of the instructor about the subject matter?
        </FormLabel>
        <RadioGroup
          style={{ display: "inline-block", marginRight: "10px" }}
          name="knowledge"
          value={knowledge}
          onChange={(e) => setKnowledge(e.target.value)}
        >
          <FormControlLabel
            value="verySatisfied"
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
            value="veryDissatisfied"
            control={<Radio required />}
            label="Very dissatisfied"
          />
        </RadioGroup>

        <FormLabel component="legend" style={hStyle}>
          3. How prepared the instructor was for each class?
        </FormLabel>
        <RadioGroup
          style={{ display: "inline-block", marginRight: "10px" }}
          name="preparedness"
          value={preparedness}
          onChange={(e) => setPreparedness(e.target.value)}
        >
          <FormControlLabel
            value="verySatisfied"
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
            value="veryDissatisfied"
            control={<Radio required />}
            label="Very dissatisfied"
          />
        </RadioGroup>

        <FormLabel component="legend" style={hStyle}>
          4. How effective was the communication in the classroom?
        </FormLabel>
        <RadioGroup
          style={{ display: "inline-block", marginRight: "10px" }}
          name="communication"
          value={communication}
          onChange={(e) => setCommunication(e.target.value)}
        >
          <FormControlLabel
            value="verySatisfied"
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
            value="veryDissatisfied"
            control={<Radio required />}
            label="Very dissatisfied"
          />
        </RadioGroup>

        <FormLabel component="legend" style={hStyle}>
          5. How well the instructor responded to the students'questions?
        </FormLabel>
        <RadioGroup
          style={{ display: "inline-block", marginRight: "10px" }}
          name="respond"
          value={respond}
          onChange={(e) => setRespond(e.target.value)}
        >
          <FormControlLabel
            value="verySatisfied"
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
            value="veryDissatisfied"
            control={<Radio required />}
            label="Very dissatisfied"
          />
        </RadioGroup>

        <FormLabel component="legend" style={hStyle}>
          6. How positive was the relation of instructor with the students?
        </FormLabel>
        <RadioGroup
          style={{ display: "inline-block", marginRight: "10px" }}
          name="relation"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
        >
          <FormControlLabel
            value="verySatisfied"
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
            value="veryDissatisfied"
            control={<Radio required />}
            label="Very dissatisfied"
          />
        </RadioGroup>

        <FormLabel component="legend" style={hStyle}>
          7. How well the instuctor provided the course materials that helped
          the students?
        </FormLabel>
        <RadioGroup
          style={{ display: "inline-block", marginRight: "10px" }}
          name="courseMaterial"
          value={courseMaterial}
          onChange={(e) => setCourseMaterial(e.target.value)}
        >
          <FormControlLabel
            value="verySatisfied"
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
            value="veryDissatisfied"
            control={<Radio required />}
            label="Very dissatisfied"
          />
        </RadioGroup>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            fontSize: "0.8rem",
            padding: "5px 10px",
            width: "100px",
          }}
        >
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default CourseEvaluationForm;
