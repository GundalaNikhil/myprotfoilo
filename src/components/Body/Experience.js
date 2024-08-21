import React from "react";
import { useStyles } from "./BodyStyles/ExperienceStyles";
import clsx from "clsx";

const Experience = () => {
  const classes = useStyles();
  return (
    <button className={clsx(classes.button, classes.buttonHover)}>
      <span className={classes.span}>EXPERIENCE</span>
    </button>
  );
};

export default Experience;
