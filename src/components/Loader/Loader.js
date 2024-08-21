import React from "react";
import { useStyles } from "./LoaderStyles/LoaderStyles";

const TerminalLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.terminalLoader}>
      <div className={classes.terminalBox}>
        <div className={classes.terminalHeader}>
          <div className={classes.terminalTitle}>Status</div>
          <div className={classes.terminalControls}>
            <div className={`${classes.control} ${classes.close}`}></div>
            <div className={`${classes.control} ${classes.minimize}`}></div>
            <div className={`${classes.control} ${classes.maximize}`}></div>
          </div>
        </div>
        <div className={classes.text}>Loading...</div>
      </div>
    </div>
  );
};

export default TerminalLoader;
