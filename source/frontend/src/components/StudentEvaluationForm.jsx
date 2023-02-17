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
  const [instructorTeaching, setInstructorTeaching] = useState("");
  const [reactEffectiveness, setReactEffectiveness] = useState("");
  const [materialUIEffectiveness, setMaterialUIEffectiveness] = useState("");
  const [coursePace, setCoursePace] = useState("");
  const [courseDifficulty, setCourseDifficulty] = useState("");
  const [courseOrganization, setCourseOrganization] = useState("");
  const [courseMaterials, setCourseMaterials] = useState("");
  const [likedMost, setLikedMost] = useState("");
  const [likedLeast, setLikedLeast] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [wouldRecommend, setWouldRecommend] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
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

      {/* Repeat the above code for each question in the form */}

      <TextField
        label="What did you like the most about the course?"
        fullWidth
        value={likedMost}
        onChange={(e) => setLikedMost(e.target.value)}
      />

      <TextField
        label="What did you like the least about the course?"
        fullWidth
        value={likedLeast}
        onChange={(e) => setLikedLeast(e.target.value)}
      />

      <TextField
        label="What suggestions do you have for improving the course?"
        fullWidth
        value={suggestions}
        onChange={(e) => setSuggestions(e.target.value)}
      />

      <FormControl component="fieldset">
        <FormLabel component="legend">
          12. Would you recommend this course to others?
        </FormLabel>
        <RadioGroup
          name="wouldRecommend"
          value={wouldRecommend}
          onChange={(e) => setWouldRecommend(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <Button type="submit" variant="contained" color="primary"></Button>
    </form>
  );
};

export default CourseEvaluationForm;
