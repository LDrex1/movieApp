import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function Navigation() {
  return (
    <AppBar
      sx={{
        background: "#292929",
        padding: { sx: "0px 17.42px", sm: "38px 30px" },
      }}
      position={"static"}
    >
      <Toolbar component="nav">
        <Button
          variant={"outlined"}
          sx={{
            color: "#ffffff",
            borderColor: "#ffffff",
            height: { xs: 33.5, sm: 60 },
            marginLeft: { xs: "auto", sm: 0 },
            marginRight: { xs: "auto", sm: 0 },
          }}
        >
          MyTestApp
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
