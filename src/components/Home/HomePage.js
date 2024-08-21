import React, { useEffect, useState, useRef } from "react";
import { useStyles } from "./HomeStyles/HomeStyles";
import Nav from "../Nav/Nav";
import AboutMe from "../Body/AboutMe";
import Experience from "../Body/Experience";
import Projects from "../Body/Projects";
import Skills from "../Body/Skills";
import Hobbies from "../Body/Hobbies";
import ContactMe from "../Body/ContactMe";
import nick from "../../gallery/nick.jpeg";

const HomePage = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const buttonsContainerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsNavVisible(true);
    }, 7000);
  }, []);

  useEffect(() => {
    const checkOverflow = () => {
      if (buttonsContainerRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } =
          buttonsContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.navContainer}>
        <Nav isLoading={false} setIsLoading={setIsLoading} />
      </div>

      <div className={classes.image}>
        <img src={nick} alt="logo" className={classes.imageContent} />
      </div>

      <div className={classes.content}>
        <div className={classes.circularContainer}>
          <div className={`${classes.buttonItem} ${classes.aboutMeButton}`}>
            <AboutMe />
          </div>
          <div className={`${classes.buttonItem} ${classes.experienceButton}`}>
            <Experience />
          </div>
          <div className={`${classes.buttonItem} ${classes.projectButton}`}>
            <Projects />
          </div>
          <div className={`${classes.buttonItem} ${classes.skillButton}`}>
            <Skills />
          </div>
          <div className={`${classes.buttonItem} ${classes.hobbyButton}`}>
            <Hobbies />
          </div>
          <div className={`${classes.buttonItem} ${classes.contactMeButton}`}>
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
