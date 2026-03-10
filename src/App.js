import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";

import AboutMe from "../src/Components/AboutMe";
import Projects from "../src/Components/Projects";
import Skills from "../src/Components/Skills";
import Contacts from "../src/Components/Contacts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AboutMe />
      <Projects />
      <Skills />
      <Contacts />

    </ThemeProvider>
  );
}

export default App;