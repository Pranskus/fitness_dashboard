import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import mockData from "../data/MOCK_DATA.json";

function ActivityTracker() {
  // Get the most recent date's data
  const todayData = mockData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )[0];

  const goals = {
    steps: 10000,
    calories: 2000,
    time: "2h",
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6">Physical Activity</Typography>
        <Typography>{todayData.date}</Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3">{todayData.steps}</Typography>
          <Typography variant="subtitle1">Steps</Typography>
          <Box sx={{ mt: 1 }}>
            <Typography variant="caption">Goal: {goals.steps}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h3">{todayData.caloriesBurned}</Typography>
          <Typography variant="subtitle1">Calories burned</Typography>
          <Box sx={{ mt: 1 }}>
            <Typography variant="caption">Goal: {goals.calories}</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h3">{todayData.activityTime}</Typography>
          <Typography variant="subtitle1">Activity time</Typography>
          <Box sx={{ mt: 1 }}>
            <Typography variant="caption">Goal: {goals.time}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ActivityTracker;
