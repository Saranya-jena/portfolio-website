import { IconButton, Typography, useTheme } from "@material-ui/core";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Avatar from "@mui/material/Avatar";
import useStyles from "./styles";

const Introduction: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <div className={classes.introText}>
        <Typography variant="h4">Hey!</Typography>
        <Typography className={classes.intro}>
          I’m Saranya Jena a Software Developer.
        </Typography>
        <img src="./icons/line.svg" alt="line" className={classes.line} />
        <Typography className={classes.desc}>
          UX Designer based in Jakarta, Indonesia. I am designing with a minimal
          and beautiful design in mind.
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography>Contact me</Typography>
          <IconButton>
            <EmailIcon sx={{ color: theme.palette.primary.light }} />
          </IconButton>
          <IconButton>
            <LinkedInIcon sx={{ color: theme.palette.primary.light }} />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ color: theme.palette.primary.light }} />
          </IconButton>
        </div>
      </div>
      <Avatar
        alt="Saranya Jena"
        src="./icons/saranyaAvatar.jpeg"
        sx={{ width: "30%", height: "10%" }}
      />
    </div>
  );
};

export default Introduction;
