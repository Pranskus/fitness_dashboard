import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import ActivityTracker from "./ActivityTracker";
import CalendarView from "./CalendarView";
import SleepTracker from "./SleepTracker";
import WeightTracker from "./WeightTracker";
import PlannedActivities from "./PlannedActivities";

function Dashboard() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "#1a1a1a",
        minHeight: "100vh",
        color: "white",
        p: 3,
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 2 }}>
          Hello, Alex!
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          Ready for today's challenges?
        </Typography>

        <Grid container spacing={3}>
          {/* Activity Tracking Section */}
          <Grid item xs={12} lg={8}>
            <Paper sx={{ p: 3, bgcolor: "#2a2a2a", borderRadius: 4 }}>
              <ActivityTracker />
            </Paper>
          </Grid>

          {/* Calendar Section */}
          <Grid item xs={12} lg={4}>
            <Paper sx={{ p: 3, bgcolor: "#4a4af4", borderRadius: 4 }}>
              <CalendarView />
            </Paper>
          </Grid>

          {/* Sleep Tracker */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, bgcolor: "#2a2a2a", borderRadius: 4 }}>
              <SleepTracker />
            </Paper>
          </Grid>

          {/* Weight Progress */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, bgcolor: "#2a2a2a", borderRadius: 4 }}>
              <WeightTracker />
            </Paper>
          </Grid>

          {/* Planned Activities */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, bgcolor: "#2a2a2a", borderRadius: 4 }}>
              <PlannedActivities />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;
