import { Box, Paper, Typography, Stack, Button } from "@mui/material";
import { Email, GitHub, PhoneAndroid } from "@mui/icons-material";
import SectionTitle from "./SectionTitle";

const Contacts = () => {
  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Contact" subtitle="View contact Information" />
      <Paper
        elevation={0}
        sx={{ p: 4, borderRadius: 5, border: "1px solid", borderColor: "divider" }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          I’m open to React.js, Redux, and frontend developer opportunities where I can
          contribute to building scalable, user-friendly web applications.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button variant="contained" startIcon={<Email />}>
            Email: monikareddy030240@gmail.com
          </Button>
          <Button variant="outlined" startIcon={<PhoneAndroid />}>
            520-789-6521
          </Button>
          <Button variant="outlined" startIcon={<GitHub />}>
            GitHub
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Contacts;