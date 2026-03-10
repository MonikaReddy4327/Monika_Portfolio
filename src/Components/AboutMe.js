import { Typography, Box } from "@mui/material";

function AboutMe() {
  return (
    <Box
      sx={{
        maxWidth: 700,
        margin: "auto",
        padding: 3
      }}
    >
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>

      <Typography variant="body1">
        I am a Senior Full Stack Developer with experience building scalable
        enterprise applications using React, Angular, Java, and Node.js. I have
        worked with organizations such as Lincoln Financial Group, Verizon,
        and Lowe’s where I developed modern web applications, integrated backend
        APIs, and improved application performance. I enjoy building clean,
        responsive user interfaces and designing reliable backend services that
        support enterprise systems.
      </Typography>
    </Box>
  );
}

export default AboutMe;