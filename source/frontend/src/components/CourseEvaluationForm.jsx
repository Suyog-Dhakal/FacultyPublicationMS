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

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          1. How satisfied were you with the course content?
        </FormLabel>
        <RadioGroup
          name="courseContent"
          value={courseContent}
          onChange={(e) => setCourseContent(e.target.value)}
        >
          <FormControlLabel
            value="verySatisfied"
            control={<Radio />}
            label="Very satisfied"
          />
          <FormControlLabel
            value="satisfied"
            control={<Radio />}
            label="Satisfied"
          />
          <FormControlLabel
            value="neutral"
            control={<Radio />}
            label="Neutral"
          />
          <FormControlLabel
            value="dissatisfied"
            control={<Radio />}
            label="Dissatisfied"
          />
          <FormControlLabel
            value="veryDissatisfied"
            control={<Radio />}
            label="Very dissatisfied"
          />
        </RadioGroup>
      </FormControl>

      <FormLabel component="legend">
        2. How was the knowledge of the instructor about the subject matter?
      </FormLabel>
      <RadioGroup
        name="knowledge"
        value={knowledge}
        onChange={(e) => setKnowledge(e.target.value)}
      >
        <FormControlLabel
          value="verySatisfied"
          control={<Radio />}
          label="Very satisfied"
        />
        <FormControlLabel
          value="satisfied"
          control={<Radio />}
          label="Satisfied"
        />
        <FormControlLabel value="neutral" control={<Radio />} label="Neutral" />
        <FormControlLabel
          value="dissatisfied"
          control={<Radio />}
          label="Dissatisfied"
        />
        <FormControlLabel
          value="veryDissatisfied"
          control={<Radio />}
          label="Very dissatisfied"
        />
      </RadioGroup>

      <FormLabel component="legend">
        3. How prepared the instructor was for each class?
      </FormLabel>
      <RadioGroup
        name="preparedness"
        value={preparedness}
        onChange={(e) => setPreparedness(e.target.value)}
      >
        <FormControlLabel
          value="verySatisfied"
          control={<Radio />}
          label="Very satisfied"
        />
        <FormControlLabel
          value="satisfied"
          control={<Radio />}
          label="Satisfied"
        />
        <FormControlLabel value="neutral" control={<Radio />} label="Neutral" />
        <FormControlLabel
          value="dissatisfied"
          control={<Radio />}
          label="Dissatisfied"
        />
        <FormControlLabel
          value="veryDissatisfied"
          control={<Radio />}
          label="Very dissatisfied"
        />
      </RadioGroup>

      <FormLabel component="legend">
        4. How effective was the communication in the classroom?
      </FormLabel>
      <RadioGroup
        name="communication"
        value={communication}
        onChange={(e) => setCommunication(e.target.value)}
      >
        <FormControlLabel
          value="verySatisfied"
          control={<Radio />}
          label="Very satisfied"
        />
        <FormControlLabel
          value="satisfied"
          control={<Radio />}
          label="Satisfied"
        />
        <FormControlLabel value="neutral" control={<Radio />} label="Neutral" />
        <FormControlLabel
          value="dissatisfied"
          control={<Radio />}
          label="Dissatisfied"
        />
        <FormControlLabel
          value="veryDissatisfied"
          control={<Radio />}
          label="Very dissatisfied"
        />
      </RadioGroup>

      <FormLabel component="legend">
        5. Ho well the instructor responded to the students'questions?
      </FormLabel>
      <RadioGroup
        name="respond"
        value={respond}
        onChange={(e) => setRespond(e.target.value)}
      >
        <FormControlLabel
          value="verySatisfied"
          control={<Radio />}
          label="Very satisfied"
        />
        <FormControlLabel
          value="satisfied"
          control={<Radio />}
          label="Satisfied"
        />
        <FormControlLabel value="neutral" control={<Radio />} label="Neutral" />
        <FormControlLabel
          value="dissatisfied"
          control={<Radio />}
          label="Dissatisfied"
        />
        <FormControlLabel
          value="veryDissatisfied"
          control={<Radio />}
          label="Very dissatisfied"
        />
      </RadioGroup>

      <FormLabel component="legend">
        6. How positive was the relation of instructor with the students?
      </FormLabel>
      <RadioGroup
        name="relation"
        value={relation}
        onChange={(e) => setRelation(e.target.value)}
      >
        <FormControlLabel
          value="verySatisfied"
          control={<Radio />}
          label="Very satisfied"
        />
        <FormControlLabel
          value="satisfied"
          control={<Radio />}
          label="Satisfied"
        />
        <FormControlLabel value="neutral" control={<Radio />} label="Neutral" />
        <FormControlLabel
          value="dissatisfied"
          control={<Radio />}
          label="Dissatisfied"
        />
        <FormControlLabel
          value="veryDissatisfied"
          control={<Radio />}
          label="Very dissatisfied"
        />
      </RadioGroup>

      <FormLabel component="legend">
        7. How well the instuctor provided the course materials that helped the
        students?
      </FormLabel>
      <RadioGroup
        name="courseMaterial"
        value={courseMaterial}
        onChange={(e) => setCourseMaterial(e.target.value)}
      >
        <FormControlLabel
          value="verySatisfied"
          control={<Radio />}
          label="Very satisfied"
        />
        <FormControlLabel
          value="satisfied"
          control={<Radio />}
          label="Satisfied"
        />
        <FormControlLabel value="neutral" control={<Radio />} label="Neutral" />
        <FormControlLabel
          value="dissatisfied"
          control={<Radio />}
          label="Dissatisfied"
        />
        <FormControlLabel
          value="veryDissatisfied"
          control={<Radio />}
          label="Very dissatisfied"
        />
      </RadioGroup>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
};

export default CourseEvaluationForm;
