import { styled } from "@mui/system";
import { Paper, Button } from "@mui/material";

export const ExperienceModalContainer = styled(Paper)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "60%",
  maxWidth: 600,
  background: "rgba(255, 255, 255, 0.5)",
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

  "& .title": {
    fontSize: "1.5rem",
    fontWeight: 700,
    fontStyle: "italic",
  },
}));

export const ExperienceContent = styled("div")({
  textAlign: "left",
  overflowY: "auto",
  flex: 1,
  paddingRight: "16px",
});

export const ButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: 10,
});

export const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: 100,
  background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
  border: 0,
  borderRadius: 25,
  boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    background: "linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)",
  },
}));

export const DescriptionList = styled("ul")({
  paddingLeft: "20px",
  marginTop: "10px",
  "& li": {
    marginBottom: "8px",
  },
});

export const LogoImage = styled("img")({
  maxWidth: "200px",
  maxHeight: "150px",
  objectFit: "contain",
  borderRadius: "20px",
});

export const TitleContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "30px",
});

export const TitleWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  textAlign: "right",
});

export const Duration = styled("span")({
  fontStyle: "italic",
  marginTop: "5px",
});

export const DotContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "25px",
});

export const Dot = styled("div")(({ active }) => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: active ? "#2196F3" : "#bbb",
  margin: "0 5px",
  transition: "background 0.3s ease",
}));
