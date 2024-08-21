import React from "react";
import { useStyles } from "./BodyStyles/ContactMeStyles";

const ContactMe = () => {
  const classes = useStyles();
  return (
    <div>
      <button className={classes.button}>
        <span className={classes.span}>CONTACT ME</span>
      </button>
    </div>
  );
};

export default ContactMe;
