import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../themes/index";

export const AboutContainer = styled(Box)(({ matches, theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexDirection:"column",
    alignItems:"center",
    width: "100%",
    height: "100%",
    padding: "0px 0px",
    // background: Colors.light_gray,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

export const AboutTitle = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1.2,
    fontSize: "42px",
    marginBottom: "20px",
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',    
    },
    fontFamily: '"Raleway", "sans-serif"',
    color:Colors.secondary
  
  }));
  
  export const AboutDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.3,
    textAlign:"justify",
    padding:"40px",
    fontSize:"17px",
    letterSpacing: 1.3,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.15,
      letterSpacing: 1.15,
      marginBottom: "1.5em",
    },
  }));

  export const VisionTitle = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1.2,
    fontSize: "30px",
    marginBottom: "20px",
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',    
    },
    fontFamily: '"Raleway", "sans-serif"',
    color:Colors.secondary
  
  }));
  
  export const VisionDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.3,
    textAlign:"justify",
    padding:"40px",
    fontStyle:"italic",
    fontSize:"17px",
    fontWeight:"600",
    letterSpacing: 1.3,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.15,
      letterSpacing: 1.15,
      marginBottom: "1.5em",
    },
  }));
  
  
  export const AboutImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%",
    height: "800px",
    marginBottom:"20px",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      height: "700px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "600px",
    },
  }));