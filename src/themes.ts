import { createTheme } from "@material-ui/core/styles";

// Augment the Palette interface
declare module "@material-ui/core/styles/createPalette" {
  export interface Palette {
    cards: {
      background: {
        main: string;
        purple: string;
        pink: string;
        yellow: string;
      };
    };
    line: {
      main: string;
      light: string;
      dark: string;
    };
    paper: {
      background: {
        main: string;
      };
    };
  }
  // allow configuration using `createMuiTheme`
  export interface PaletteOptions {
    cards: {
      background: {
        main: string;
        purple: string;
        pink: string;
        yellow: string;
      };
    };
    line: {
      main: string;
      light: string;
      dark: string;
    };
    paper: {
      background: {
        main: string;
      };
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#645FB6",
      light: "#FFFFFF",
      dark: "#1C4C62",
    },
    secondary: {
      main: "#109B67",
      light: "#109B6799",
      dark: "#128359",
    },
    text: {
      primary: "#F1F1F1",
      secondary: "#FFFFFF",
    },
    cards: {
      background: {
        main: "#2F2F2F",
        purple: "#363361",
        pink: "#A35055",
        yellow: "#816F5C",
      },
    },
    line: {
      main: "#EE2767",
      light: "#856767",
      dark: "#A35055",
    },
    paper: {
      background: {
        main: "#1C1C1C",
      },
    },
  },
});
export default theme;
