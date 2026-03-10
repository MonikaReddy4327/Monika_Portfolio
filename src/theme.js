import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#1e293b",
    },
    background: {
      default: "#f8fafc",
    }
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial",
    h4: {
      fontWeight: 700
    },
    h5: {
      fontWeight: 600
    }
  },
  shape: {
    borderRadius: 12
  }
});

export default theme;