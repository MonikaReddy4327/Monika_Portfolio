import { Box, Grid, Card, CardContent, Typography, Stack, Chip } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/PortfolioData";

const Skills = () => {
  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle title="Skills" subtitle="Highlight core frontend stack clearly." />
      <Grid container spacing={3}>
        {Object.entries(skills).map(([key, list]) => (
          <Grid item xs={12} md={4} key={key}>
            <Card sx={{ height: "100%", borderRadius: 5 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ mb: 2, textTransform: "capitalize" }}
                >
                  {key}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {list.map((item) => (
                    <Chip key={item} label={item} sx={{ mb: 1 }} />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;