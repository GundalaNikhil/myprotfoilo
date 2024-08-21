import React, { useEffect, useRef, useState } from "react";
import {
  voiceSearchBottomSVG,
  voiceSearchMiddleSVG,
  voiceSearchMiddleTopSVG,
  voiceSearchTopSVG,
} from "../../SVG_DATA/svg_data";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./NavStyles/NavStyles";
import TerminalLoader from "../Loader/Loader";

const Nav = ({ isLoading, setIsLoading }) => {
  const classes = useStyles();

  const inputRef = useRef(null);
  const displayText = "Nikhil Gundala";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (inputRef.current) {
        inputRef.current.value = displayText.slice(0, index + 1) + "|";
        index++;
        if (index === displayText.length) {
          clearInterval(interval);
          inputRef.current.value = displayText.slice(0, index + 1);
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 4000);
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {});

  return (
    <div className={classes.root}>
      <div className={classes.searchbar}>
        <div className={classes.searchbarWrapper}>
          <div className={classes.searchbarLeft}>
            <div className={classes.searchIconWrapper}>
              <SearchIcon className={classes.searchIcon} />
            </div>
          </div>
          <div className={classes.searchbarCenter}>
            <input
              ref={inputRef}
              className={classes.searchbarInput}
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className={classes.searchbarRight}>
            <div className={classes.voiceSearch}>
              <svg
                className={classes.voiceSearchIcon}
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path fill="#4285f4" d={voiceSearchTopSVG}></path>
                <path fill="#34a853" d={voiceSearchBottomSVG}></path>
                <path fill="#fbbc05" d={voiceSearchMiddleTopSVG}></path>
                <path fill="#ea4335" d={voiceSearchMiddleSVG}></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <TerminalLoader />}
    </div>
  );
};

export default Nav;
