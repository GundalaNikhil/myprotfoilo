import React from "react";
import { useStyles } from "./BodyStyles/AboutMeStyles";

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div>
      <button className={classes.button}>
        <span className={classes.span}>ABOUT ME</span>
      </button>
    </div>
  );
};

export default AboutMe;
