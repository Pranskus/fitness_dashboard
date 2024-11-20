import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import mockData from "../data/MOCK_DATA.json";

function SleepTracker() {
  const sortedData = mockData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const lastNight = sortedData[0];

  // Calculate weekly average
  const weeklyData = sortedData.slice(0, 7);
  const weeklyAverage =
    weeklyData.reduce((acc, curr) => acc + curr.sleepHours, 0) /
    weeklyData.length;

  const goal = 8;
  const progressValue = (lastNight.sleepHours / goal) * 100;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Sleep Tracker
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h4">{lastNight.sleepHours}h</Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Last Night's Sleep
        </Typography>
        <LinearProgress
          variant="determinate"
          value={Math.min(progressValue, 100)}
          sx={{ mt: 1, height: 8, borderRadius: 4 }}
        />
        <Typography variant="caption" color="text.secondary">
          Goal: {goal}h
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="body2" color="text.secondary">
            Weekly Average
          </Typography>
          <Typography>{weeklyAverage.toFixed(1)}h</Typography>
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary">
            Last 7 Days
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5 }}>
            {weeklyData.map((day, index) => (
              <Box
                key={index}
                sx={{
                  height: 40,
                  width: 4,
                  bgcolor: "primary.main",
                  opacity: day.sleepHours / goal,
                  borderRadius: 1,
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SleepTracker;
