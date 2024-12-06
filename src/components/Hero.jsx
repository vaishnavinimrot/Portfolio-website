import React from "react";
import { Container, Typography, Button, IconButton, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";

function Hero() {
  return (
    <Container
      id="home"
      style={{ textAlign: "center", marginTop: "50px", padding: "50px" }}
    >
      <Typography variant="h2" gutterBottom>
        Hi, I'm Vaishnavi Nimrot
      </Typography>
      <Typography variant="h5" style={{ color: "#000000" }} paragraph>
        Frontend Developer | React Enthusiast | UI Designer
      </Typography>

      {/* Social Media and CV Section */}
      <Box display="flex" justifyContent="center" gap={2} marginTop={3}>
        <IconButton
          color="inherit"
          href="https://github.com/vaishnavinimrot" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/vaishnavi-nimrot-345631251" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="vaishnavinimrot@gmail.com" // Replace with your Email
        >
          <EmailIcon />
        </IconButton>
        <Button
          variant="contained"
          color="primary"
          href="/VAISHNAVI NIMROT...pdf"  // Replace with your CV link
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<DownloadIcon />}
        >
          Download CV
        </Button>
       
      </Box>
    </Container>
  );
}

export default Hero;
