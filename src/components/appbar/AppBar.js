import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { Link } from "react-router-dom";
export default function AppBar({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader variant="h5" position="sticky" >Urban Science</AppbarHeader>
      <MyList type="row">
        <ListItem  component={Link} to="/">Home</ListItem>
        <ListItem  component={Link} to="/blog" >Blogs</ListItem> 
        <ListItem component={Link} to="/projects" >Projects</ListItem>
        <ListItem component={Link} to="/about">About</ListItem>
        <ListItem>Contact Us</ListItem>
        <ListItemButton >
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={true} />
    </AppbarContainer>
  );
}