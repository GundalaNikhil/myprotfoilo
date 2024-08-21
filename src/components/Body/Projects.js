import React from "react";
import { useStyles } from "./BodyStyles/ProjectStyles";
import clsx from "clsx";

const Projects = () => {
  const classes = useStyles();
  return (
    <div>
      <button className={classes.button}>
        <svg
          className={clsx(classes.svg, classes.symbolLeft)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 103.28 122.88"
        >
          <polygon points="103.28 122.88 0 76.93 0 45.95 103.28 0 103.28 33.94 27.83 61.34 103.28 88.74 103.28 122.88 103.28 122.88" />
        </svg>
        <span className={classes.span}>PROJECTS</span>
        <svg
          className={clsx(classes.svg, classes.symbolSlash)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 59.35 96"
        >
          <polygon points="26.56,96 0,96 32.79,0 59.35,0 26.56,96" />
        </svg>
        <svg
          className={clsx(classes.svg, classes.symbolRight)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 103.28 122.88"
        >
          <polygon points="0 122.88 103.28 76.93 103.28 45.95 0 0 0 33.94 75.46 61.34 0 88.74 0 122.88 0 122.88" />
        </svg>
      </button>
    </div>
  );
};

export default Projects;
