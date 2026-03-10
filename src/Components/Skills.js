import { Chip, Stack, Typography } from "@mui/material";

function Skills() {
  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Skills
      </Typography>

      <Stack direction="row" spacing={2} flexWrap="wrap">

        <Chip label="React" color="primary" />
        <Chip label="Angular" color="primary" />
        <Chip label="Java" />
        <Chip label="Spring Boot" />
        <Chip label="Node.js" />
        <Chip label="PostgreSQL" />
        <Chip label="Docker" />
        <Chip label="AWS" />

      </Stack>
    </div>
  );
}

export default Skills;