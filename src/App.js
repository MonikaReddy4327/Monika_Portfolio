import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, AppBar, Toolbar, Typography, Button, Stack, Container, Divider } from "@mui/material";
import { getTheme } from "./theme/theme";
// import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SkillBars from "./components/SkillBars";
import Contacts from "./components/Contacts";
import SectionTitle from "./components/SectionTitle";
import { useSelector } from "react-redux";

const App = () => {
  const darkMode = useSelector((state) => state.portfolio.darkMode);
  const theme = React.useMemo(() => getTheme(darkMode), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid",
          borderColor: "divider"
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight={800}>
            Monika Portfolio
          </Typography>

          <Stack direction="row" spacing={1}>
            <Button color="inherit">About Me</Button>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Projects</Button>
            <Button variant="contained">Contact</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        {/* <Hero /> */}
        <Divider />
        <AboutMe />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <SkillBars />
        <Divider />
        <SectionTitle/>
        <Contacts />
      </Container>
    </ThemeProvider>
  );
};

export default App;