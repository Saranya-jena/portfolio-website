import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import Home from "./Pages/Home";
import theme from "./themes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};
export default App;
