import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import {
  ModalRoot,
  MainHeader,
  StyledDivider,
  SubHeader,
  SubDivider,
  Paragraph,
  CloseButton,
} from "./ModalStyles/AboutMeModalStyles";

const AboutMeModal = ({ onClose }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const headerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const [, forceUpdate] = useState();
  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
      <ModalRoot>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <MainHeader variant={isSmallScreen ? "h5" : "h4"}>
            Getting to Know Me
          </MainHeader>
          <StyledDivider />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
        >
          <Paragraph variant="body1">
            Hi there! I'm NIKHIL, and I'm excited to share a bit about myself.
          </Paragraph>

          <Paragraph>
            As a Full Stack Developer with a background in Information
            Technology, I'm passionate about crafting web applications and
            software solutions that put users first. I've had the pleasure of
            working with a diverse range of technologies in both Frontend and
            Backend development, and I'm well-versed in cloud deployment. What
            really drives me is the opportunity to continually learn and grow in
            this ever-evolving field.
          </Paragraph>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <SubHeader variant="h6">Educational Journey</SubHeader>
          <SubDivider />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
        >
          <Paragraph>
            I completed my bachelor's degree at VIT Vellore, graduating in 2020
            with a CGPA of 7.5. This experience laid a strong foundation for my
            career in tech and ignited my passion for problem-solving.
          </Paragraph>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <SubHeader>Professional Approach</SubHeader>
          <SubDivider />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={paragraphVariants}
        >
          <Paragraph>
            In my professional life, I thrive on collaboration and embrace
            challenges with enthusiasm. I believe in the power of teamwork and
            am always ready to contribute my skills to achieve our shared goals.
            Whether it's tackling a complex project or learning a new
            technology, I approach each opportunity with dedication and a
            positive attitude.
          </Paragraph>
        </motion.div>
      </ModalRoot>
    </>
  );
};

export default AboutMeModal;
