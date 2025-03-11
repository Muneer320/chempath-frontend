import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  School as SchoolIcon,
  Science as ScienceIcon,
  Code as CodeIcon,
  Lightbulb as LightbulbIcon,
  Route as RouteIcon,
} from "@mui/icons-material";

const AboutPage: React.FC = () => {
  const theme = useTheme();

  const features = [
    "Step-by-step reaction pathways",
    "Multiple route options",
    "Focuses on high school curriculum",
    "Uses familiar reactions only",
    "Visual reaction maps",
    "Free access",
  ];

  const challenges = [
    "Dataset creation and curation",
    "Ensuring educational relevance",
    "Optimizing pathfinding algorithms",
    "Balancing simplicity with accuracy",
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
        About ChemPath
      </Typography>

      {/* Project Overview */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Project Overview
        </Typography>
        <Typography variant="body1" paragraph>
          ChemPath is an educational tool designed to help high school students
          (particularly JEE/NEET aspirants) find step-by-step pathways between
          chemical compounds. The tool focuses on reactions and compounds
          relevant to their curriculum, making it more accessible than existing
          professional-grade solutions.
        </Typography>
        <Typography variant="body1">
          Think of it as your "Molecular GPS" - helping you navigate from one
          compound to another using the most efficient reaction pathways.
        </Typography>
      </Paper>

      {/* Problem & Solution */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LightbulbIcon color="error" sx={{ mr: 1 }} />
                <Typography variant="h6">The Problem</Typography>
              </Box>
              <Typography variant="body2" paragraph>
                High school students preparing for JEE and NEET exams spend
                countless hours memorizing chemical conversion pathways. Current
                solutions are either:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="PhD-level tools (way too complex)" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Paywalled resources (expensive and still too complex)" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Random YouTube tutorials (time-consuming and inconsistent)" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <CheckCircleIcon color="success" sx={{ mr: 1 }} />
                <Typography variant="h6">Our Solution</Typography>
              </Box>
              <Typography variant="body2" paragraph>
                ChemPath: A student-friendly tool that shows you how to get from
                compound A to compound B, using only reactions you actually need
                to know.
              </Typography>
              <Typography variant="body2" paragraph>
                Key features include:
              </Typography>
              <List dense>
                {features.map((feature, index) => (
                  <ListItem key={index}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <CheckCircleIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Technical Implementation */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <CodeIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5">Technical Implementation</Typography>
        </Box>

        <Typography variant="h6" gutterBottom>
          Architecture
        </Typography>
        <Typography variant="body1" paragraph>
          ChemPath is built on a graph-based system:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <ScienceIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Nodes: Chemical compounds"
              secondary="Each node represents a chemical compound with properties like formula, name, molecular weight, etc."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RouteIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Edges: Reaction mechanisms"
              secondary="Connections between compounds represent chemical reactions with properties like reagents, conditions, etc."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RouteIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Algorithm: Pathfinding"
              secondary="We use optimized graph traversal algorithms to find the most efficient pathways between compounds."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          Technology Stack
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" sx={{ textAlign: "center", p: 2 }}>
              <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Backend
              </Typography>
              <Typography variant="body2">FastAPI (Python)</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" sx={{ textAlign: "center", p: 2 }}>
              <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Frontend
              </Typography>
              <Typography variant="body2">React with TypeScript</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" sx={{ textAlign: "center", p: 2 }}>
              <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Database
              </Typography>
              <Typography variant="body2">Neo4j (Graph Database)</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" sx={{ textAlign: "center", p: 2 }}>
              <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Hosting
              </Typography>
              <Typography variant="body2">Huggingface</Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Challenges & Future Plans */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Current Challenges
              </Typography>
              <List>
                {challenges.map((challenge, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={challenge} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Future Enhancements
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Reaction mechanism visualization"
                    secondary="Interactive diagrams showing electron movement"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Mobile application"
                    secondary="Study on the go with a dedicated mobile app"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="User accounts and progress tracking"
                    secondary="Save your searches and track your learning progress"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Integration with educational platforms"
                    secondary="Connect with other learning resources"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Educational Focus */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
          background: `linear-gradient(120deg, ${theme.palette.primary.light}10, ${theme.palette.secondary.light}20)`,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <SchoolIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5">Educational Focus</Typography>
        </Box>
        <Typography variant="body1" paragraph>
          ChemPath is designed specifically for educational purposes, with a
          focus on:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
              <CheckCircleIcon color="success" sx={{ mr: 1, mt: 0.5 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  High School Curriculum Alignment
                </Typography>
                <Typography variant="body2">
                  All reactions are based on JEE/NEET syllabus, so you only
                  learn what you need to know.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
              <CheckCircleIcon color="success" sx={{ mr: 1, mt: 0.5 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Clear, Step-by-Step Instructions
                </Typography>
                <Typography variant="body2">
                  Each reaction pathway is broken down into manageable steps
                  with detailed explanations.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
              <CheckCircleIcon color="success" sx={{ mr: 1, mt: 0.5 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Multiple Pathway Options
                </Typography>
                <Typography variant="body2">
                  Learn different ways to achieve the same conversion, enhancing
                  your understanding of reaction mechanisms.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
              <CheckCircleIcon color="success" sx={{ mr: 1, mt: 0.5 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Practical Application Focus
                </Typography>
                <Typography variant="body2">
                  Emphasis on reactions that appear frequently in exams and have
                  practical applications.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Footer Note */}
      <Box sx={{ textAlign: "center", mt: 6, mb: 3 }}>
        <Typography variant="body2" color="textSecondary">
          ChemPath: Your Molecular GPS — Making chemistry navigation simpler for
          students.
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          sx={{ mt: 1, display: "block" }}
        >
          No molecules were harmed in the making of this application.
        </Typography>
      </Box>
    </Container>
  );
};

// Custom arrow icon component
const ArrowIcon: React.FC<{
  color:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "action"
    | "disabled"
    | "inherit";
}> = ({ color }) => (
  <Box
    component="span"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color:
        color === "primary" ? (theme) => theme.palette.primary.main : "inherit",
    }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
      />
    </svg>
  </Box>
);

export default AboutPage;
