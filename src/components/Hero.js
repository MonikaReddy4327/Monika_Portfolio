import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Grid,
  Typography,
  Stack,
  Chip,
  Paper,
  Avatar,
  IconButton
} from "@mui/material";
import {
  GitHub,
  Email,
  Brightness4,
  Brightness7,
  Code,
  Web,
  Storage,
} from "@mui/icons-material";
import { toggleTheme } from "../feature/portfolioSlice";

const Hero = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.portfolio.darkMode);

  return (
    <Box
      sx={{
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        py: 8
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Chip label="React + Redux + MUI Portfolio" sx={{ mb: 2, fontWeight: 600 }} />
          <Typography variant="h2" fontWeight={800} sx={{ mb: 2, lineHeight: 1.1 }}>
            Frontend Developer building modern, scalable, and accessible web applications
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3, maxWidth: 720 }}>
            I create responsive user interfaces with React.js, Redux Toolkit, HTML, CSS,
            and Material UI, focusing on reusable components and clean architecture.
          </Typography>

          <Stack direction="row" spacing={1.5} flexWrap="wrap">
            <Chip icon={<Code />} label="React.js" />
            <Chip icon={<Storage />} label="Redux Toolkit" />
            <Chip icon={<Web />} label="MUI" />
            <Chip label="HTML5" />
            <Chip label="CSS3" />
            <Chip label="JavaScript" />
          </Stack>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 5,
              border: "1px solid",
              borderColor: "divider"
            }}
          >
            <Stack spacing={2} alignItems="center">
              <Avatar sx={{ width: 100, height: 100, fontSize: 32 }}>M</Avatar>
              <Typography variant="h5" fontWeight={700}>
                Monika
              </Typography>
              <Typography color="text.secondary" textAlign="center">
                React Developer | Redux | Material UI | HTML | CSS
              </Typography>

              <Stack direction="row" spacing={1}>
               <IconButton
                component="a"
                href="https://github.com/MonikaReddy4327/Monika_Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                >
               <GitHub />
                </IconButton>
                <IconButton>
                  <Email />
                </IconButton>
                <IconButton onClick={() => dispatch(toggleTheme())}>
                  {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;