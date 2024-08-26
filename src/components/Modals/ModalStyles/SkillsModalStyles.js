// SkillsModalStyles.js
import { IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

export const ModalContainer = styled(motion.div)(({ theme }) => ({
  top: "15%",
  left: "15%",
  width: "70%",
  height: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  overflow: "hidden",
  position: "relative",
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  color: "white",
  zIndex: 1000,
}));

export const SkillItem = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  width: "80px",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
  transition: "all 0.5s ease-in-out",
  cursor: "pointer",
}));

export const SkillIcon = styled("img")(({ theme }) => ({
  width: "60px",
  height: "60px",
  objectFit: "contain",
}));
