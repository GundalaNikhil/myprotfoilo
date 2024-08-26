import { styled } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const HobbiesModalContainer = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  top: "10%",
  left: "25%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "70%",
  maxWidth: 700,
  background: "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(100px)",
  backgroundColor: "transparent",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(4),
  outline: "none",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
}));

export const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(4),
  fontWeight: "bold",
  color: "#6a0c0b",
  textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
}));

export const HobbiesGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "2rem",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  overflow: "auto",
});

export const HobbyItem = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  borderRadius: "15px",
  background: "rgba(255, 255, 255, 0.6)",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
  },
});

export const HobbyImage = styled("img")({
  width: "100px",
  height: "70px",
  objectFit: "contain",
  marginBottom: "1rem",
});

export const HobbyName = styled(Typography)({
  fontWeight: "bold",
  textAlign: "center",
  //   color: "white",
  textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
});

export const CloseButton = styled(IconButton)({
  position: "absolute",
  color: "white",
  top: "1rem",
  right: "1rem",
});
