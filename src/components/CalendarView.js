import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import mockData from "../data/MOCK_DATA.json";

function CalendarView() {
  // Get the last 5 activities and next 2 planned ones
  const today = new Date();
  const activities = mockData
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((activity) => ({
      date: activity.date,
      type: activity.activity,
      completed: new Date(activity.date) < today,
    }))
    .slice(-7);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Weekly Overview
      </Typography>
      <Grid container spacing={1}>
        {activities.map((activity, index) => (
          <Grid item xs={12} key={index}>
            <Paper
              sx={{
                p: 1.5,
                display: "flex",
                justifyContent: "space-between",
                bgcolor: activity.completed
                  ? "success.light"
                  : "background.paper",
                opacity: !activity.completed ? 0.7 : 1,
              }}
            >
              <Typography>{activity.date}</Typography>
              <Typography>{activity.type}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CalendarView;
