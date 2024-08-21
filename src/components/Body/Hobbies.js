import React from "react";
import { useStyles } from "./BodyStyles/HobbiesStyles";

const Hobbies = () => {
  const classes = useStyles();
  return (
    <div>
      <button className={classes.button}>
        <main id="container" className={classes.container}>
          <div className={classes.circle}></div>
        </main>
        <span className={classes.span}>HOBBIES</span>
      </button>
    </div>
  );
};

export default Hobbies;
