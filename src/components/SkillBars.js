import { Box, Paper, Stack, Typography, LinearProgress } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { strengths } from "../data/PortfolioData";

const SkillBars = () => {
  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle
        title="Core Strengths"
        subtitle="premium."
      />
      <Paper
        elevation={0}
        sx={{ p: 4, borderRadius: 5, border: "1px solid", borderColor: "divider" }}
      >
        <Stack spacing={3}>
          {strengths.map((item) => (
            <Box key={item.label}>
              <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                <Typography fontWeight={600}>{item.label}</Typography>
                <Typography color="text.secondary">{item.value}%</Typography>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={item.value}
                sx={{ height: 10, borderRadius: 10 }}
              />
            </Box>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default SkillBars;