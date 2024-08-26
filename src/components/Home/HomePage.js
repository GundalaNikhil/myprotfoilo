import React, { useEffect, useState } from "react";
import { useStyles } from "./HomeStyles/HomeStyles";
import { Modal } from "@mui/material";
import Nav from "../Nav/Nav";
import AboutMe from "../Body/AboutMe";
import Experience from "../Body/Experience";
import Projects from "../Body/Projects";
import Skills from "../Body/Skills";
import Hobbies from "../Body/Hobbies";
import ContactMe from "../Body/ContactMe";
import nick from "../../gallery/nick.jpeg";
import AboutMeModal from "../Modals/AboutMeModal";
import ExperienceModal from "../Modals/ExperienceModal";
import ProjectsModal from "../Modals/ProjectsModal";
import HobbiesModal from "../Modals/HobbiesModal";
import SkillsModal from "../Modals/SkillsModal";
import ContactMeModal from "../Modals/ContactMeModal";

const HomePage = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  //Modal PopUp
  const [openAboutMeModal, setOpenAboutMeModal] = useState(false);
  const [openExperienceModal, setOpenExperienceModal] = useState(false);
  const [openProjectsModal, setOpenProjectsModal] = useState(false);
  const [openSkillsModal, setOpenSkillsModal] = useState(false);
  const [openHobbiesModal, setOpenHobbiesModal] = useState(false);
  const [openContactMeModal, setOpenContactMeModal] = useState(false);

  const handleOpenAboutMeModal = () => {
    setOpenAboutMeModal(true);
  };

  const handleCloseAboutMeModal = () => {
    setOpenAboutMeModal(false);
  };

  const handleOpenExperienceModal = () => {
    setOpenExperienceModal(true);
  };

  const handleCloseExperienceModal = () => {
    setOpenExperienceModal(false);
  };

  const handleOpenProjectsModal = () => {
    setOpenProjectsModal(true);
  };

  const handleCloseProjectsModal = () => {
    setOpenProjectsModal(false);
  };

  const handleOpenHobbiesModal = () => {
    setOpenHobbiesModal(true);
  };

  const handleCloseHobbiesModal = () => {
    setOpenHobbiesModal(false);
  };

  const handleOpenSkillsModal = () => {
    setOpenSkillsModal(true);
  };

  const handleCloseSkillsModal = () => {
    setOpenSkillsModal(false);
  };

  const handleOpenContactMeModal = () => {
    setOpenContactMeModal(true);
  };

  const handleCloseContactMeModal = () => {
    setOpenContactMeModal(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsNavVisible(true);
    }, 7000);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.navContainer}>
        <Nav isLoading={isLoading} setIsLoading={setIsLoading} />
      </div>

      {isNavVisible ? (
        <>
          <div className={classes.image}>
            <img src={nick} alt="logo" className={classes.imageContent} />
          </div>

          <div className={classes.content}>
            <div className={classes.circularContainer}>
              <div
                className={`${classes.buttonItem} ${classes.aboutMeButton}`}
                onClick={handleOpenAboutMeModal}
              >
                <AboutMe />
              </div>
              <div
                className={`${classes.buttonItem} ${classes.experienceButton}`}
                onClick={handleOpenExperienceModal}
              >
                <Experience />
              </div>
              <div
                className={`${classes.buttonItem} ${classes.projectButton}`}
                onClick={handleOpenProjectsModal}
              >
                <Projects />
              </div>
              <div
                className={`${classes.buttonItem} ${classes.skillButton}`}
                onClick={handleOpenSkillsModal}
              >
                <Skills />
              </div>
              <div
                className={`${classes.buttonItem} ${classes.hobbyButton}`}
                onClick={handleOpenHobbiesModal}
              >
                <Hobbies />
              </div>
              <div
                className={`${classes.buttonItem} ${classes.contactMeButton}`}
                onClick={handleOpenContactMeModal}
              >
                <ContactMe />
              </div>
            </div>
          </div>
        </>
      ) : null}

      <Modal
        open={openAboutMeModal}
        onClose={handleCloseAboutMeModal}
        aria-labelledby="about-me-modal"
        aria-describedby="about-me-description"
      >
        <div className={classes.modalContent}>
          <AboutMeModal />
        </div>
      </Modal>

      <Modal
        open={openExperienceModal}
        onClose={handleCloseExperienceModal}
        aria-labelledby="experience-modal"
        aria-describedby="experience-description"
      >
        <ExperienceModal onClose={handleCloseExperienceModal} />
      </Modal>

      <Modal
        open={openProjectsModal}
        onClose={handleCloseProjectsModal}
        aria-labelledby="projects-modal"
        aria-describedby="projects-description"
      >
        <ProjectsModal onClose={handleCloseProjectsModal} />
      </Modal>

      <Modal
        open={openHobbiesModal}
        onClose={handleCloseHobbiesModal}
        aria-labelledby="hobbie-modal"
        aria-describedby="hobbies-description"
      >
        <HobbiesModal onClose={handleCloseHobbiesModal} />
      </Modal>

      <Modal
        open={openSkillsModal}
        onClose={handleCloseSkillsModal}
        aria-labelledby="skills-modal"
        aria-describedby="skills-description"
      >
        <SkillsModal onClose={handleCloseSkillsModal} />
      </Modal>

      <Modal
        open={openContactMeModal}
        onClose={handleCloseContactMeModal}
        aria-labelledby="contactme-modal"
        aria-describedby="contactme-description"
      >
        <ContactMeModal onClose={handleCloseContactMeModal} />
      </Modal>
    </div>
  );
};

export default HomePage;
