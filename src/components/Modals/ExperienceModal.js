import React, { useState, useEffect } from "react";
import {
  ButtonContainer,
  ExperienceContent,
  ExperienceModalContainer,
  StyledButton,
  DescriptionList,
  LogoImage,
  TitleContainer,
  TitleWrapper,
  Duration,
  DotContainer,
  Dot,
} from "./ModalStyles/ExperienceModalStyles";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Cognizant_logo from "../../gallery/Cognizant_logo.png";
import FedEx_logo from "../../gallery/Fedex_Logo.jpg";
import Hexagon_logo from "../../gallery/hex_logo.png";

const ExperienceModal = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % dummyExperience.length);
  };

  const handlePrevious = () => {
    setCurrentStep(
      (prevStep) =>
        (prevStep - 1 + dummyExperience.length) % dummyExperience.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const currentExperience = dummyExperience[currentStep];

  const getLogo = (company) => {
    switch (company) {
      case "FedEx":
        return FedEx_logo;
      case "Hexagon":
        return Hexagon_logo;
      case "Cognizant":
        return Cognizant_logo;
      default:
        return null;
    }
  };

  return (
    <ExperienceModalContainer>
      <IconButton className="closeButton" onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <ExperienceContent>
        <TitleContainer>
          <LogoImage
            src={getLogo(currentExperience.company)}
            alt={`${currentExperience.company} Logo`}
          />
          <TitleWrapper>
            <Typography className="title">
              {currentExperience.position}
            </Typography>
            <Duration>{currentExperience.duration}</Duration>
          </TitleWrapper>
        </TitleContainer>
        <DescriptionList>
          {currentExperience.description.map((desc, index) => (
            <li key={index}>
              <Typography variant="body1">{desc}</Typography>
            </li>
          ))}
        </DescriptionList>
      </ExperienceContent>

      <ButtonContainer>
        <StyledButton onClick={handlePrevious}>&lt; Previous</StyledButton>
        <DotContainer>
          {dummyExperience.map((_, index) => (
            <Dot key={index} active={index === currentStep} />
          ))}
        </DotContainer>
        <StyledButton onClick={handleNext}>Next &gt;</StyledButton>
      </ButtonContainer>
    </ExperienceModalContainer>
  );
};

export default ExperienceModal;

const dummyExperience = [
  {
    company: "FedEx",
    position: "Senior Full Stack Developer",
    duration: "2024, May - Present",
    description: [
      "Implemented design patterns and best practices to ensure robust application structures.",
      "Orchestrated microservices architecture, significantly improving system performance and response times.",
      "Managed server migration to RHEL 8.0, ensuring a seamless transition with zero downtime",
      "Collaborated with cross functional teams to deliver the high functional software solutions",
    ],
  },
  {
    company: "Hexagon",
    position: "Senior Full Stack Developer",
    duration: "2021, Aug - 2024, May",
    description: [
      "Developed a Cloud Admin Portal to bridge customer interactions and support administration activities for various Cloud Solutions and Applications across HCCI.",
      "Infrastructure Design: Conceptualized and designed the project’s infrastructure and ERD during the early stages.",
      "Micro Front Ends: Created Micro Front Ends to enhance user interactions.",
      "Performance Optimization:Boosted back-end performance by implementing cache services and reducing API calls.",
      "CI/CD Pipelines: Established end-to-end CI/CD pipelines for builds, tests, security scans, Black Duck scans, SAV, unit tests, load tests, integration tests, and synthetic tests. Automated the process to push build images to Azure Container Registry (ACR) and trigger releases.",
      "Container Management: Managed Docker containers of a single version and utilized Kubernetes for deployment, scaling, and load balancing.",
    ],
  },
  {
    company: "Cognizant",
    position: "Software Developer",
    duration: "2020, Jul - 2021, Aug",
    description: [
      "Migrated a brokerage application’s complete UI from Angular to React within 3 months.",
      "Experienced in React, Redux Saga, and RESTful services.",
      "Developed optimized code and reusable components for cross-environment performance.",
      "Worked with microservices and monolithic applications.",
      "Collaborated in a 15+ member team, following Agile methodologies.",
      "Experienced in JIRA, Azure Boards, and Git/GitLab.",
    ],
  },
];
