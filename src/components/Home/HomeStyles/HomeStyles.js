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
      backgroundColor: "#282828",
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
    position: "absolute",
    width: "150px", // Adjust size as needed
    height: "150px", // Adjust size as needed
    borderRadius: "50%",
    zIndex: 1, // Ensure the image is above the buttons
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
    minWidth: "300px",
    minHeight: "300px",
    borderRadius: "50%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonItem: {
    position: "absolute",
    width: "200px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    transition: "transform 0.3s ease-in-out",
  },

  aboutMeButton: {
    transform:
      "rotate(180deg) translateX(20px) translateY(200px) rotate(180deg)",
  },
  experienceButton: {
    transform:
      "rotate(60deg) translateX(75px) translateY(-260px) rotate(-60deg)",
  },
  projectButton: {
    transform:
      "rotate(130deg) translateX(-70px) translateY(-290px) rotate(-130deg)",
  },
  skillButton: {
    transform:
      "rotate(295deg) translateX(-70px) translateY(-290px) rotate(-295deg)",
  },
  hobbyButton: {
    transform:
      "rotate(250deg) translateX(-30px) translateY(-300px) rotate(-250deg)",
  },
  contactMeButton: {
    transform:
      "rotate(180deg) translateX(20px) translateY(-280px) rotate(-180deg)",
  },
}));
