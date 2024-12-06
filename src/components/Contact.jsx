import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function Contact() {
  return (
    <Container id="contact" style={{ marginTop: "50px", padding: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <form>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Container>
  );
}

export default Contact;
