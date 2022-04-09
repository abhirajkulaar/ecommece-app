import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import { Home } from "@mui/icons-material";

function AppBarTop() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" href="/" color="inherit">
            <Home />
          </IconButton>
          {/* <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={""} color="inherit">
            <MenuIcon />
          </IconButton> */}
          <Menu
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            id={""}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={false}
            onClose={""}
          >
            <MenuItem onClick={""}>Landing</MenuItem>
            <MenuItem onClick={""}>My account</MenuItem>
          </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Groyyo Test Assignment
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarTop;
