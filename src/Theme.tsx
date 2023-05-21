import {
  createTheme,
  PaletteOptions,
  PaletteColor,
} from "@mui/material/styles";
import "./index.css";

interface CustomPaletteOptions extends PaletteOptions {
  extra: {
    tertiary: PaletteColor;
  };
}

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IranYekan",
  },
  palette: {
    primary: {
      main: "#6d77a6",
    },
    secondary: {
      main: "#585567",
    },
    extra: {
      tertiary: {
        main: "#e3a655",
      },
    },
    background: {
      default: "#f8f6f4",
    },
  } as CustomPaletteOptions,
});

export default theme;
