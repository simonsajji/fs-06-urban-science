import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIcons, MyList } from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Colors } from "../../styles/themes";

export default function Actions({ matches }) {

  const Component =  ActionIcons ;

  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
        </ListItemButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
      </MyList>
    </Component>
  );
}