import React from "react";
import { useStyles } from "./BodyStyles/SkillsStyles";

const Skills = () => {
  const classes = useStyles();
  return (
    <div>
      <button className={classes.button}>
        <span className={classes.span}>SKILLS</span>
      </button>
    </div>
  );
};

export default Skills;
