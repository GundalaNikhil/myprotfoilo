import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { TextField, Button } from "@mui/material";

export const ModalOverlay = styled(motion.div)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
}));

export const ModalContainer = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  width: "90%",
  maxWidth: "500px",
  position: "relative",
  boxShadow: theme.shadows[5],
}));

export const Title = styled(motion.h2)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(3),
  color: theme.palette.text.primary,
  fontSize: "1.8rem",
  fontWeight: 600,
}));

export const Form = styled(motion.form)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const CloseButton = styled(motion.button)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  background: "none",
  border: "none",
  fontSize: "1.5rem",
  cursor: "pointer",
  color: theme.palette.text.secondary,
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
