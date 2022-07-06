import React, { useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MUISidebar from "./MUISidebar";

function MUIHeader() {
  let [drawerState, setDrawerState] = useState(false);

  function toggleDrawer() {
    setDrawerState(!drawerState);
  }

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer}
            disableRipple={true}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <ReactLink to="/">Home</ReactLink>
          </Typography>

          <Button
            to="/login"
            component={ReactLink}
            disableRipple={true}
            color="inherit"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <MUISidebar drawerState={drawerState} onToggle={toggleDrawer} />
    </React.Fragment>
  );
}

export default MUIHeader;
