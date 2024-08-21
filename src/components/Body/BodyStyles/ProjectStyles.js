import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    fontWeight: "bold",
    width: "200px",
    height: "73px",
    padding: 0,
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    overflow: "hidden",
    "&:hover $svg": {
      opacity: 1,
      transform: "scale(1.5)",
    },
    "&:hover $span": {
      transform: "translateY(0)",
    },
  },
  span: {
    position: "relative",
    width: "100%",
    fontSize: "15px",
    fontWeight: 100,
    letterSpacing: "3px",
    textAlign: "center",
    color: "white",
    transition: "all 0.5s ease",
    display: "inline-block",
    zIndex: 1,
    // lineHeight: "73px",
  },
  svg: {
    position: "absolute",
    height: "20px",
    width: "20px",
    fill: "black",
    opacity: 0,
    transition: "all 1s ease",
    transform: "scale(0.5)",
    filter: "drop-shadow(0.5px 0.5px 0px #ffffffa6)",
  },
  symbolLeft: {
    left: "20px",
  },
  symbolSlash: {
    right: "30px",
  },
  symbolRight: {
    right: "5px",
  },
}));
