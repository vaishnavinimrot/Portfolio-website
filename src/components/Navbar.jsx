import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(45deg, #6A1B9A, #E91E63)", 
        color: "#FFFFFF", 
        boxShadow: "none", 
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
          }}
        >
          My Portfolio
        </Typography>
        {/* Navigation Links */}
        <Button
          color="inherit"
          href="#about" 
          sx={{ textTransform: "none", fontWeight: "bold" }}
        >
          About
        </Button>
        <Button
          color="inherit"
          href="#skills" 
          sx={{ textTransform: "none", fontWeight: "bold" }}
        >
          Skills
        </Button>
        <Button
          color="inherit"
          href="#projects" 
          sx={{ textTransform: "none", fontWeight: "bold" }}
        >
          Projects
        </Button>
        <Button
          color="inherit"
          href="#skills" 
          sx={{ textTransform: "none", fontWeight: "bold" }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
