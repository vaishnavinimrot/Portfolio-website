import React from "react";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <div style={{ textAlign: "center", padding: "20px",  backgroundcolor: "rgba(239, 196, 217, 0.5)" }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 Your Name. All Rights Reserved.
      </Typography>
    </div>
  );
}

export default Footer;
