import { createTheme } from "@mui/material/styles";

export const getTheme = (darkMode) =>
  createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#1976d2"
      },
      secondary: {
        main: "#9c27b0"
      },
      background: {
        default: darkMode ? "#0b1020" : "#f7f9fc",
        paper: darkMode ? "#11182d" : "#ffffff"
      }
    },
    shape: {
      borderRadius: 18
    },
    typography: {
      fontFamily: "Inter, Roboto, Arial, sans-serif"
    }
  });