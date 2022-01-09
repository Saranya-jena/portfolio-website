import Header from "../../Components/Header";
import Introduction from "../../views/Introduction";
import useStyles from "./styles";

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Introduction />
    </div>
  );
};

export default Home;
