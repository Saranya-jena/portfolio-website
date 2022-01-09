import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  // root: {
  //   margin: theme.spacing(3),
  //   width: 345,
  // },
  // media: {
  //   height: 140,
  // },
  rootBG: {
    background: theme.palette.paper.background.main,
  },
}));

export default useStyles;
