import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";

function Skills() {
  const skills = ["ReactJS", "JavaScript", "HTML5", "CSS3", 
    "Material-UI", "TypeScript", "Redux", "Git & GitHub"];

  return (
    <Container id="skills" style={{ marginTop: "50px", padding: "50px" }}>
      <Typography variant="h4" gutterBottom>
        My Skills
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} style={{ padding: "20px", textAlign: "center", font: "caption" }}>
              {skill}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills;
