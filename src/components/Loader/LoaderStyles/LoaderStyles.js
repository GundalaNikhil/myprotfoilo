import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  "@keyframes blinkCursor": {
    "50%": {
      borderRightColor: "transparent",
    },
  },
  "@keyframes typeAndDelete": {
    "0%, 10%": {
      width: 0,
    },
    "45%, 55%": {
      width: "6.2em",
    },
    "90%, 100%": {
      width: 0,
    },
  },
  terminalLoader: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // transparent background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  terminalBox: {
    border: "0.1em solid #333",
    backgroundColor: "#1a1a1a",
    color: "#0f0",
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: "1em",
    padding: "1.5em 1em",
    width: "12em",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
    position: "relative",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  terminalHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1.5em",
    backgroundColor: "#333",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    padding: "0 0.4em",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  terminalTitle: {
    color: "#eee",
  },
  terminalControls: {
    display: "flex",
  },
  control: {
    width: "0.6em",
    height: "0.6em",
    marginLeft: "0.4em",
    borderRadius: "50%",
    backgroundColor: "#777",
  },
  close: {
    backgroundColor: "#e33",
  },
  minimize: {
    backgroundColor: "#ee0",
  },
  maximize: {
    backgroundColor: "#0b0",
  },
  text: {
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "0.2em solid green", // Cursor
    animation: `$typeAndDelete 4s steps(11) infinite, $blinkCursor 0.5s step-end infinite alternate`,
    marginTop: "1.5em",
  },
}));
