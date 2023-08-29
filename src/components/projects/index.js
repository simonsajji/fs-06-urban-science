import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  Container,
  Grid,
  Box,
  Avatar,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import {
  ProjectTitle,
  ProjectDescription
} from "../../styles/projects";

const projectData = [
  {
    title: "Fire System",
    description:
      "Fire safety is everyone's responsibility. The safety of your employees, suppliers, and customers is dependent upon the severity of your fire protection program. Therefore, before choosing a Fire system company for your work please make sure to check their approvals, certificates, and standards. We at Urban Science follow the complete international guidelines while performing Fire system work. Gaining your trust makes us the leading facility management company in Dubai.",
    author: "Jimmy",
    authorImg: "https://via.placeholder.com/150",
  }
];

export default function Projects() {
  const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down("md"));
return (
  <Container sx={{ py: { xs: 8, lg: 16 } }}>
    <Box
      sx={{
        mx: "auto",
        mb: { lg: 16, sm: 8 },
        maxWidth: "sm",
        textAlign: "center",
      }}
    >
       <ProjectTitle variant="h2">
       Projects
        </ProjectTitle>
    </Box>
    <Grid container spacing={8}>
      {projectData.map((data, i) => (
        <Grid item lg={12} key={i}>
          <Box
            sx={{
              p: 6,
              border: 1,
              borderColor: "grey.200",
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <ProjectTitle
              variant="h4"
              component="h2"
              mb={2}
              sx={{ fontWeight: "bold" }}
            >
              {data.title}
            </ProjectTitle>
            <ProjectDescription variant="body2" color="text.secondary" mb={5}>
              {data.description}
            </ProjectDescription>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  src={data.authorImg}
                  sx={{ width: 28, height: 28, mr: 1 }}
                />
                <Typography variant="subtitle1">{data.author}</Typography>
              </Box>
              <Button endIcon={<ArrowForward />} color="primary" size="small">
                Read more
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
);
}