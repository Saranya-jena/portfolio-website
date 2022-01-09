import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  link: {
    margin: theme.spacing(0, 4.5),
    fontSize: "1.375rem",
    color: theme.palette.text.secondary,
  },
  appBar: {
    display: "flex",
    width: "100%",
    padding: theme.spacing(3, 0),
  },
  nav: {
    marginLeft: "auto",
    display: "flex",
  },
  icon: {
    // margin: theme.spacing(5, 0, 0, 0),
  },
}));

export default useStyles;
