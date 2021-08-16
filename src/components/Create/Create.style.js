import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
      display: "flex",
      flexDirection:"column",
      height: "93vh",

  },
  form: {
      display: "flex",
      alignContent: "center",
      flexDirection: "column",
      margin: "auto auto",
      backgroundColor: "#B4E8FF",
      boxShadow: "3px 3px 10px 0px #00000040",
      borderRadius: "10px",
      height: "60vh",
  }, 
}));
