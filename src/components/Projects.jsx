import React from "react";
import { Container, Typography, Box, Chip } from "@mui/material";


const projects = [
  {
    title: "GPaaS",
    description: "Cloud-based platform providing scalable infrastructure for businesses to deploy and manage applications globally.",
    githubLink: "https://github.com/anrocks/GPaaS",
    imageUrl: "/img/image4.png", 
    tags: ["ReactJs", "API", "MUI", "Googlemap"]
  },
  {
    title: "Chat Application",
    description: "A real-time chat app built with ReactJS and Firebase. Users can log in, send messages, share images, and add new users.",
    githubLink: "https://github.com/vaishnavinimrot/Chat_App",
    imageUrl: "/img/image.png", 
    tags: ["ReactJS", "Firebase", "CSS", "Chat", "Authentication", "Image Sharing"]
  },
  
  
  {
    title: "Paytm",
    description: "A clone of Paytm featuring user authentication, transaction history, wallet integration, and product listings.",
    githubLink: "https://github.com/vaishnavinimrot/paytm.main",
    imageUrl: "/img/image5.png", 
    tags: ["ReactJs", "API", "Payment", "Tailwind CSS"]
  },
  {
    title: "Giphy App",
    description: "An app to search and explore GIFs using the Giphy API with a simple and interactive user interface.",
    githubLink: "https://github.com/vaishnavinimrot/Giphy-app",
    imageUrl: "/img/image2.png",
    tags: ["ReactJs" ,"API", "GIF" ,"Tailwind CSS"]
  },
  {
    title: "Gym Management System",
    description: "A web-based system to manage gym memberships, attendance, payments, and reports.",
    githubLink: "https://github.com/vaishnavinimrot/Gym-Management-System",
    imageUrl: "/img/image3.png", 
    tags: ["ReactJS", "CSS"]
  },
  {
  title: "Quiz App",
  description: "A quiz application that allows users to take quizzes on various topics, track their scores, and challenge their knowledge.",
  githubLink: "https://github.com/vaishnavinimrot/Quiz-app",
  imageUrl: "/img/image6.png", 
  tags: ["ReactJS", "", "Quiz", "Game"]
  },
  {
    title: "Hospital Management System",
    description: "A system to manage hospital functions like patient records, appointment scheduling, and billing.",
    githubLink: "https://github.com/vaishnavinimrot/Hospital-Management-System",
    imageUrl:"/img/image1.png", 
    tags: ["ReactJS", "CSS"]
  },
];

function Projects() {
  return (
    <Container style={{ marginTop: "50px", padding: "50px" }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>

      {/* Map over each project */}
      {projects.map((project, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "50px", 
            paddingBottom: "50px",
            borderBottom: "1px solid #ddd", 
            backgroundColor: "#fff", 
            borderRadius: "8px",
            padding: "20px", 
          }}
        >
          
          <Box sx={{ flex: 1, paddingRight: "20px" }}>
            <Typography variant="h5" gutterBottom>
              {project.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              {project.description}
            </Typography>

          
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.tags.map((tag, index) => (
                <Chip key={index} label={tag} variant="outlined" color="primary" />
              ))}
            </Box>

           
            <Typography
              variant="body1"
              sx={{
                marginTop: "10px",
                color: "#6A1B9A", 
                "&:hover": {
                  cursor: "pointer", 
                  color: "#4A148C", 
                },
              }}
              onClick={() => window.open(project.githubLink, "_blank")}
            >
              GitHub Link
            </Typography>
          </Box>

          {/* Vertical Divider */}
          <Box
            sx={{
              width: "2px",
              backgroundColor: "#000",
              height: "200px",
              margin: "0 20px",
            }}
          ></Box>

          {/* Right Side - Project Image */}
          <Box sx={{ flex: 1 }}>
            <img
              src={project.imageUrl} 
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>
      ))}
    </Container>
  );
}

export default Projects;
