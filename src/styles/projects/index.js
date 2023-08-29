import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../themes/index";

export const ProjectTitle = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1.2,
    fontSize: "42px",
    marginBottom: "20px",
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',    
    },
    fontFamily: '"Raleway", "sans-serif"',
    color:Colors.secondary
  
  }));
  
  export const ProjectDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.15,
      letterSpacing: 1.15,
      marginBottom: "1.5em",
    },
  }));
  
  export const BannerCompanyButton = styled(Button, {
    // Configure which props should be forwarded on DOM
    shouldForwardProp: (prop) => prop !== "color",
    name: "MyShopButton",
    slot: "Root",
    // We are specifying here how the styleOverrides are being applied based on props
    overridesResolver: (props, styles) => [
      styles.root,
      props.color === "primary" && styles.primary,
      props.color === "secondary" && styles.secondary,
    ],
  })(({ theme }) => ({
    padding: "12px 0px",
    borderRadius:'30px',
    color: Colors.white,
    fontWeight: "bold",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px",
      fontSize: "14px",
    },
  }));