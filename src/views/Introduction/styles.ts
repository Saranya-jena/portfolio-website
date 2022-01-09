import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  introText: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "30%",
  },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(10, 15),
  },
  intro: {
    fontWeight: 600,
    fontSize: "3rem",
  },
  line: {
    marginLeft: "auto",
    marginTop: theme.spacing(1),
  },
  desc: {
    margin: theme.spacing(2, 0),
  },
}));

export default useStyles;
