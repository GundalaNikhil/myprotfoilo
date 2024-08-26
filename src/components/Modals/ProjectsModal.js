import React, { useState, useEffect } from "react";
import {
  ButtonContainer,
  ProjectContent,
  ProjectModalContainer,
  StyledButton,
  TechStack,
  TechTag,
  DotContainer,
  Dot,
} from "./ModalStyles/ProjectModalStyles";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ProjectsModal = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % projectsData.length);
  };

  const handlePrevious = () => {
    setCurrentStep(
      (prevStep) => (prevStep - 1 + projectsData.length) % projectsData.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(timer);
  }, []);

  const currentProject = projectsData[currentStep];

  return (
    <ProjectModalContainer>
      <IconButton className="closeButton" onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <ProjectContent>
        <Typography variant="h4" gutterBottom>
          {currentProject.name}
        </Typography>
        <Typography variant="body1" paragraph>
          {currentProject.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Key Features:
        </Typography>
        <ul>
          {currentProject.features.map((feature, index) => (
            <li key={index}>
              <Typography variant="body2">{feature}</Typography>
            </li>
          ))}
        </ul>
        <Typography variant="h6" gutterBottom>
          Tech Stack:
        </Typography>
        <TechStack>
          {currentProject.techStack.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>
      </ProjectContent>

      <ButtonContainer>
        <StyledButton onClick={handlePrevious}>&lt; Previous</StyledButton>
        <DotContainer>
          {projectsData.map((_, index) => (
            <Dot key={index} active={index === currentStep} />
          ))}
        </DotContainer>
        <StyledButton onClick={handleNext}>Next &gt;</StyledButton>
      </ButtonContainer>
    </ProjectModalContainer>
  );
};

export default ProjectsModal;

const projectsData = [
  {
    name: "MMR - Mathi Maha Rasa",
    description:
      "An e-commerce platform specializing in traditional South Indian culinary products. Built with React.js for the frontend and Java for the backend, this project showcases a modern, responsive design with seamless user experience.",
    techStack: [
      "React.js",
      "Java Spring Boot",
      "Docker",
      "Azure",
      "RESTful API",
      "Recoil",
      "Material-UI",
    ],
    features: [
      "Microservices architecture for scalability",
      "Containerized deployment using Docker for consistency across environments",
      "Implemented JWT-based authentication for secure user sessions",
      "Integrated Razorpay payment gateway for smooth transactions",
      "Utilized Recoil for efficient state management",
    ],
  },
  {
    name: "Sri Rama Printers",
    description:
      "A full-stack web application for a printing service company. This project demonstrates the integration of frontend and backend technologies to create a robust ordering system for various print products.",
    techStack: ["React.js", "Java Spring Boot", "Docker", "MySQL", "Azure"],
    features: [
      "Implemented a RESTful API using Spring Boot for handling orders and product management",
      "Utilized React.js with hooks for a dynamic and responsive user interface",
      "Deployed on AWS using Docker containers for easy scaling and management",
      "Implemented real-time order tracking using WebSockets",
      "Integrated a custom CMS for easy product and content management",
    ],
  },
  {
    name: "Dice Game",
    description:
      "An interactive web-based dice game showcasing frontend development skills and game logic implementation.",
    techStack: ["JavaScript", "ReactJS", "Material-UI", "SVG animations"],
    features: [
      "Implemented complex game logic using pure JavaScript",
      "Utilized SVG for smooth dice roll animations",
      "Responsive design for seamless play across devices",
      "Implemented local storage for saving game state",
    ],
  },
  {
    name: "Rock Paper Scissors",
    description:
      "A classic game reimagined for the web, demonstrating proficiency in frontend technologies and game state management.",
    techStack: ["React.js", "Material-UI", "Framer Motion"],
    features: [
      "Utilized React hooks for efficient state management",
      "Implemented engaging animations using Framer Motion",
      "Designed an AI opponent with varying difficulty levels",
      "Responsive and accessible design following WCAG guidelines",
    ],
  },
  {
    name: "Todo Extension",
    description:
      "A productivity-boosting todo application designed to be deployed as a browser extension, showcasing skills in extension development and state persistence.",
    techStack: ["React.js", "Chrome Extension API", "Webpack"],
    features: [
      "Developed as a Single Page Application (SPA) for smooth user experience",
      "Implemented drag-and-drop functionality for task reordering",
      "Integrated with browser's storage API for syncing across devices",
      "Optimized bundle size using Webpack for quick load times",
    ],
  },
];
