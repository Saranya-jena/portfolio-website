import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "fixed",
    overflow: "hidden",
    height: "100vh",
    width: "100%",
    background: theme.palette.paper.background.main,
    // display: 'grid',
    // gridTemplateColumns: '20.5em auto',
    // gridTemplateRows: '6.5em auto',
    // gridTemplateAreas: '"header header" "sidebar content"',

    "& ::-webkit-scrollbar": {
      width: "0.4rem",
      height: "0.4rem",
    },
    "& ::-webkit-scrollbar-track": {
      marginTop: theme.spacing(1),
      webkitBoxShadow: `inset 0 0 8px ${theme.palette.common.black}`,
      backgroundColor: theme.palette.line.light,
    },
    "& ::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.line.light,
      borderRadius: 8,
    },
    "& img": {
      userDrag: "none",
    },
  },

  // media: {
  //   height: 140,
  // },
  rootBG: {},
}));

export default useStyles;
