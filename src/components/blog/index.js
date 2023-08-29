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
  BannerTitle,
} from "../../styles/banner";
const blogData = [
  {
    title: "React with MUI 5 Blog 1 Section",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
    author: "Jimmy",
    authorImg: "https://via.placeholder.com/150",
  },
  {
    title: "React with MUI 5 Blog 2 Section",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
    author: "Jhon",
    authorImg: "https://via.placeholder.com/150",
  },
];

export default function Blog() {
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
       <BannerTitle variant="h2">
       Blogs
        </BannerTitle>
      <Typography variant="body1" color="text.secondary">
        We use an agile approach to test assumptions and connect with the
        needs of your audience early and often.
      </Typography>
    </Box>
    <Grid container spacing={8}>
      {blogData.map((data, i) => (
        <Grid item lg={6} key={i}>
          <Box
            sx={{
              p: 6,
              border: 1,
              borderColor: "grey.200",
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              mb={2}
              sx={{ fontWeight: "bold" }}
            >
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={5}>
              {data.description}
            </Typography>
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