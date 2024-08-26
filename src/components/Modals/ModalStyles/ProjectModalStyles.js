import { styled } from "@mui/system";
import { Paper, Button } from "@mui/material";

export const ProjectModalContainer = styled(Paper)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "70%",
  maxWidth: 600,
  background: "rgba(255, 255, 255, 0.7)",
  backdropFilter: "blur(10px)",
  borderRadius: "15px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(4),
  outline: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "& .closeButton": {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

export const ProjectContent = styled("div")({
  textAlign: "left",
  overflowY: "auto",
  flex: 1,
  paddingRight: "16px",
});

export const ButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: 20,
});

export const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: 100,
  background: "linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)",
  border: 0,
  borderRadius: 25,
  boxShadow: "0 3px 5px 2px rgba(76, 175, 80, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    background: "linear-gradient(45deg, #8BC34A 30%, #4CAF50 90%)",
  },
}));

export const TechStack = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  marginTop: "10px",
  gap: "8px",
});

export const TechTag = styled("span")({
  background: "rgba(0, 0, 0, 0.1)",
  padding: "4px 8px",
  borderRadius: "12px",
  fontSize: "0.8rem",
});

export const DotContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
});

export const Dot = styled("div")(({ active }) => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: active ? "#4CAF50" : "black",
  margin: "0 5px",
  transition: "background 0.3s ease",
}));
