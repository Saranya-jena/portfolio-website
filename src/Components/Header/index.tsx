import { Link, Toolbar, Typography } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import * as React from "react";
import useStyles from "./styles";

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
        className={classes.appBar}
      >
        <Toolbar>
          <img src="./icons/saranya.svg" alt="icon" className={classes.icon} />
          <Typography>Saranya Jena</Typography>
          <div className={classes.nav}>
            <Link className={classes.link}>
              <Typography>About</Typography>
            </Link>
            <Link className={classes.link}>
              <Typography>Skills</Typography>
            </Link>
            <Link className={classes.link}>
              <Typography>Experience</Typography>
            </Link>
            <Link className={classes.link}>
              <Typography>Projects</Typography>
            </Link>
            <Link className={classes.link}>
              <Typography>Others</Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
