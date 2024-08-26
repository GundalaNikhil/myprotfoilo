import { styled, keyframes } from "@mui/material/styles";
import { Box, Typography, Divider, IconButton } from "@mui/material";

const shine = keyframes`
  0% { background-position: 200% center; }
  50% { background-position: 0 center; }
  100% { background-position: 200% center; }
`;

export const ModalRoot = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  backgroundColor: "black",
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  outline: "none",
  borderRadius: theme.shape.borderRadius,
  maxHeight: "80vh",
  overflowY: "auto",
  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

export const GoldHeader = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(90deg, #FFD700, #FFEC8B)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  animation: `${shine} 3s infinite`,
  color: "transparent",
  fontWeight: "bold",
}));

export const MainHeader = styled(GoldHeader)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  position: "relative",
  textAlign: "center",
  fontStyle: "italic",
  fontSize: "2rem",
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  background: "linear-gradient(90deg, #FFD700, #FFEC8B)",
  width: "50%",
  height: "2px",
  margin: "0 auto",
}));

export const SubHeader = styled(GoldHeader)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const SubDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  background: "linear-gradient(90deg, #FFD700, #FFEC8B)",
  width: "30%",
  height: "1px",
}));

export const Paragraph = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontFamily: "'Roboto Slab', serif",
  fontSize: "1.1rem",
  lineHeight: 1.8,
  color: "white",
  textAlign: "justify",
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: theme.palette.grey[500],
}));
