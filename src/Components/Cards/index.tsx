import useStyles from "./styles";

const Cards: React.FC = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.rootBG} /* style={{
        background: theme.palette.paper.background.main,
      }} */
    >
      <p>A bare bones application!</p>
    </div>
  );
};

export default Cards;
