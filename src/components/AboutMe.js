import { Box, Paper, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";

const AboutMe = () => {
  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle
        title="About Me"
        subtitle="A clean and professional introduction section for recruiters."
      />
      <Paper
        elevation={0}
        sx={{ p: 4, borderRadius: 5, border: "1px solid", borderColor: "divider" }}
      >
        <Typography variant="body1" sx={{ lineHeight: 1.9 }}>
          I am a frontend developer with experience building modern web applications
          using React.js, Redux Toolkit, JavaScript, HTML, CSS, and Material UI and NodeJS.For testing I have used Jest and Enzyme wit React Testing Libarary and playwright
          I enjoy creating reusable UI components, managing application state, and
          building responsive interfaces that are scalable and user-friendly.
        </Typography>
      </Paper>
    </Box>
  );
};

export default AboutMe;