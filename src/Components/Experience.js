import { Box, Grid, Paper, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { experience } from "../data/PortfolioData";

const Experience = () => {
  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle
        title="What I Bring"
        subtitle="Portfolio."
      />
      <Grid container spacing={2}>
        {experience.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                height: "100%"
              }}
            >
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {item}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;