import React, { useState } from "react";
import { Button, Typography, Box, Paper } from "@mui/material";

function AboutMe() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1500);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        px: 2,
        py: 6,
        backgroundColor: "#f8fafc",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 900,
          width: "100%",
          p: { xs: 3, md: 5 },
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 200,
            color: "#1e293b",
            mb: 1,
          }}
        >
          About Me
        </Typography>
              <Typography variant="h5" sx={{ fontWeight: 200 }}>
  Monika Reddy
</Typography>
        <Typography variant="h7" sx={{ color: "#2563eb", mb: 2 }}>
  Senior Full Stack Developer | React | Angular | Java
</Typography>


        <Typography
          variant="body1"
          sx={{
            color: "#475569",
            lineHeight: 1.9,
            fontSize: "1.05rem",
            mb: 4,
            margin:"30px"
          }}
        >
          I am a Senior Full Stack Developer with experience designing and
          building scalable enterprise applications using React, Angular, Java,
          and Node.js. I have contributed to large-scale projects at Lincoln
          Financial Group, Verizon, and Lowe’s, where I developed modern web
          applications, integrated backend APIs, and improved system
          performance. I am passionate about creating clean, responsive user
          interfaces and building reliable backend services that deliver strong
          user experiences.
        </Typography>
      </Paper>
    </Box>
  );
}

export default AboutMe;