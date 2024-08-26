import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  "@global": {
    "html, body": {
      margin: 0,
      padding: 0,
      height: "100%",
      width: "100%",
      overflow: "hidden",
    },
    body: {
      backgfroundColor: "#282828",
    },
  },
  root: {
    backgroundColor: "#282828",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    height: "100vh",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    overflow: "auto",
  },
  navContainer: {
    width: "100%",
  },
  image: {
    position: "fixed",
    width: "25vw", // Maintains a responsive size relative to the viewport
    height: "28vw",
    borderRadius: "50%",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    paddingTop: "calc(50% - 34vw)", // Centers the image dynamically
    paddingLeft: "calc(50% - 13vw)",
    paddingRight: "calc(50% - 20vw)",
  },
  imageContent: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },

  content: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: "100%",
    width: "100%",
  },

  circularContainer: {
    position: "relative",
    width: "50vw",
    height: "50vw",
    maxWidth: "600px",
    maxHeight: "600px",
    minWidth: "250px",
    minHeight: "250px",
    borderRadius: "50%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },

  buttonItem: {
    position: "absolute",
    width: "20vw", // Scales button width relative to the viewport
    maxWidth: "200px",
    height: "10vw", // Scales button height relative to the viewport
    maxHeight: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    transition: "transform 0.3s ease-in-out",
    zIndex: 3,
    fontSize: "calc(10px + 1vw)", // Responsive font size
  },

  aboutMeButton: {
    transform: "rotate(180deg) translate(0, 18vw) rotate(180deg)",
  },
  experienceButton: {
    transform: "rotate(65deg) translate(0, -18vw) rotate(-65deg)",
  },
  projectButton: {
    transform: "rotate(100deg) translate(0, -18vw) rotate(-100deg)",
  },
  skillButton: {
    transform: "rotate(298deg) translate(0, -18vw) rotate(-298deg)",
  },
  hobbyButton: {
    transform: "rotate(258deg) translate(0, -18vw) rotate(-258deg)",
  },
  contactMeButton: {
    transform: "rotate(180deg) translate(0, -18vw) rotate(-180deg)",
  },

  modalContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
  },
}));
