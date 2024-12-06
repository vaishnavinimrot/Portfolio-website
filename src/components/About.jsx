import React from "react";
import { Container, Typography, Box } from "@mui/material";

function About() {
  return (
    <Container
      id="about"
      style={{
        padding: "50px",
        paddingTop: "10px", 
        position: "relative",
        zIndex: "1",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff", 
          padding: "30px", 
          borderRadius: "8px", 
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
        }}
      >
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" color="textSecondary">
          <p style={{ color: "#000000" }}> {/* Darkest text */}
            I specialize in creating seamless user interfaces using HTML5, JSX,
            JavaScript, TypeScript, React JS, and Redux. I bring style to my work
            with frameworks like Tailwind CSS, Material UI, and Bootstrap, ensuring
            every pixel is perfect.
          </p>

          <p style={{ color: "#000000" }}> {/* Darkest text */}
            In addition to front-end development, I'm proficient in working with
            APIs to integrate data seamlessly into applications. I also have a strong
            understanding of database management with MySQL and MongoDB, contributing
            to efficient data handling and storage solutions. Proficient in Git version
            control, I ensure project versions are managed effectively and streamline
            collaborative development processes. I leverage CSS-in-JS libraries like
            Styled Components to create responsive and visually appealing designs
            across various devices.
          </p>
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
