import {  List, Typography } from "@mui/material";
import {styled} from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../themes";

export const AppbarContainer = styled(Box)(() => ({    
    display: 'flex',
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 30px',
}));

export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "2em",
  fontFamily: '"Pacifico", "cursive"',
  color: Colors.secondary
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
  fontFamily: '"Raleway", "sans-serif"'
}));

export const ActionIcons = styled(Box)(() => ({
  flexGrow: 0,
}));
