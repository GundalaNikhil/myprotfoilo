import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "black",
    padding: "20px 0",
    // "&:hover": {
    //   webkitTransform: "rotateX(-16.62deg) rotateY(-28.64788975654116deg)",
    //   transform: "rotateX(-16.62deg) rotateY(-28.64788975654116deg)",
    // },
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0",
    },
  },
  searchbar: {
    fontSize: 16,
    fontFamily: "arial, sans-serif",
    color: "#202124",
    display: "flex",
    zIndex: 3,
    height: 60,
    backgroundColor: "white",
    border: "1px solid #dfe1e5",
    boxShadow: "none",
    borderRadius: 30,
    margin: "0 auto",
    width: "90%",
    maxWidth: 700,
    "&:hover": {
      boxShadow: "0 1px 6px rgb(32 33 36 / 28%)",
      borderColor: "rgba(223,225,229,0)",
    },
    [theme.breakpoints.down("md")]: {
      height: 50,
      maxWidth: 600,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      maxWidth: 400,
    },
  },
  searchbarWrapper: {
    flex: 1,
    display: "flex",
    padding: "5px 8px 0 14px",
    alignItems: "center",
  },
  searchbarLeft: {
    display: "flex",
    alignItems: "center",
    paddingRight: 13,
  },
  searchIconWrapper: {
    margin: "auto",
  },
  searchIcon: {
    color: "#9aa0a6",
    height: 30,
    width: 30,
    [theme.breakpoints.down("md")]: {
      height: 25,
      width: 25,
    },
    [theme.breakpoints.down("sm")]: {
      height: 20,
      width: 20,
    },
  },
  searchbarCenter: {
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
  },
  searchbarInput: {
    backgroundColor: "transparent",
    border: "none",
    margin: 0,
    padding: "0 0 0 10px",
    color: "rgba(0, 0, 0, .87)",
    wordWrap: "break-word",
    outline: "none",
    display: "flex",
    flex: "100%",
    height: "100%",
    fontSize: "1.7em",
    fontFamily: "Courier New",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
    "&::placeholder": {
      color: "transparent",
    },
  },
  searchbarRight: {
    display: "flex",
    alignItems: "center",
  },
  voiceSearch: {
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    border: 0,
    background: "transparent",
    outline: "none",
    padding: "0 8px",
    width: "40px",
    height: "40px",
    [theme.breakpoints.down("md")]: {
      width: "35px",
      height: "35px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30px",
      height: "30px",
    },
  },
  voiceSearchIcon: {
    width: "100%",
    height: "100%",
  },
}));
