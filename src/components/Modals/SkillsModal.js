import React, { useEffect, useState } from "react";
import ReactIcon from "../../gallery/skills/react_icon.png";
import JsIcon from "../../gallery/skills/js_icon.png";
import JavaIcon from "../../gallery/skills/java_icon.png";
import CSharpIcon from "../../gallery/skills/csharp_icon.png";
import PythonIcon from "../../gallery/skills/python_icon.png";
import TypeScriptIcon from "../../gallery/skills/typescript_icon.png";
import HtmlIcon from "../../gallery/skills/html_icon.png";
import CssIcon from "../../gallery/skills/css_icon.png";
import BootstrapIcon from "../../gallery/skills/bootstrap_icon.png";
import CloudIcon from "../../gallery/skills/cloud_icon.png";
import DockerIcon from "../../gallery/skills/docker_icon.png";
import GitLogo from "../../gallery/skills/git-logo.png";
import GitHubLogo from "../../gallery/skills/github-logo.png";
import NodejsLogo from "../../gallery/skills/nodejs-logo.png";
import ReduxLogo from "../../gallery/skills/redux-logo.png";
import TailwindCssLogo from "../../gallery/skills/tailwind-css-logo.png";
import { Tooltip } from "@mui/material";
import {
  ModalContainer,
  SkillIcon,
  SkillItem,
} from "./ModalStyles/SkillsModalStyles";
import { CloseButton } from "./ModalStyles/AboutMeModalStyles";
import CloseIcon from "@mui/icons-material/Close";

const SkillsModal = ({ onClose }) => {
  const [shuffledSkills, setShuffledSkills] = useState([]);

  useEffect(() => {
    const shuffleSkills = () => {
      const shuffled = [...skillsData].sort(() => Math.random() - 0.5);
      const positions = calculatePositions(shuffled.length);
      setShuffledSkills(
        shuffled.map((skill, index) => ({ ...skill, ...positions[index] }))
      );
    };

    shuffleSkills();
    const intervalId = setInterval(shuffleSkills, 50000); // Shuffle every 50 seconds

    return () => clearInterval(intervalId);
  }, []);

  const calculatePositions = (count) => {
    const positions = [];
    const gridSize = Math.ceil(Math.sqrt(count));
    const cellSize = 100 / gridSize;

    for (let i = 0; i < count; i++) {
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;
      positions.push({
        left: `${col * cellSize + cellSize / 2}%`,
        top: `${row * cellSize + cellSize / 2}%`,
      });
    }

    return positions;
  };

  return (
    <ModalContainer>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
      {shuffledSkills.map((skill, index) => (
        <SkillItem
          key={skill.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{ left: skill.left, top: skill.top }}
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          <Tooltip title={skill.name} arrow>
            <SkillIcon src={skill.image} alt={skill.name} />
          </Tooltip>
        </SkillItem>
      ))}
    </ModalContainer>
  );
};

export default SkillsModal;

const skillsData = [
  { name: "React.js", image: ReactIcon },
  { name: "JavaScript", image: JsIcon },
  { name: "Java", image: JavaIcon },
  { name: "CSharp", image: CSharpIcon },
  { name: "Python", image: PythonIcon },
  { name: "TypeScript", image: TypeScriptIcon },
  { name: "HTML5", image: HtmlIcon },
  { name: "CSS3", image: CssIcon },
  { name: "Bootstrap", image: BootstrapIcon },
  { name: "Azure", image: CloudIcon },
  { name: "Docker", image: DockerIcon },
  { name: "Git", image: GitLogo },
  { name: "GitHub", image: GitHubLogo },
  { name: "Node.js", image: NodejsLogo },
  { name: "Redux", image: ReduxLogo },
  { name: "Tailwind CSS", image: TailwindCssLogo },
];
