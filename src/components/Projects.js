import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Stack,
  Chip,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography
} from "@mui/material";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/PortfolioData";
import { setFilter, setSearch } from "../feature/portfolioSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const { filter, search } = useSelector((state) => state.portfolio);

  const filters = ["All", "React", "Redux", "UI", "Frontend"];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "All" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.tech.join(" ").toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <Box sx={{ py: 8 }}>
      <SectionTitle
        title="Projects"
        subtitle="This section uses Redux state for filtering and searching."
      />

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", md: "center" }}
        sx={{ mb: 3 }}
      >
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {filters.map((item) => (
            <Chip
              key={item}
              label={item}
              color={filter === item ? "primary" : "default"}
              onClick={() => dispatch(setFilter(item))}
              clickable
            />
          ))}
        </Stack>

        <TextField
          size="small"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          sx={{ minWidth: { xs: "100%", md: 260 } }}
        />
      </Stack>

      <Grid container spacing={3}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} md={6} key={project.title}>
            <Card sx={{ height: "100%", borderRadius: 5 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  {project.tech.map((tech) => (
                    <Chip key={tech} label={tech} size="small" />
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

export default Projects;