import React from "react";
import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

function WeightTracker() {
  const weightData = {
    current: 75.5,
    goal: 70,
    history: [
      { date: "2024-03-01", weight: 78 },
      { date: "2024-03-08", weight: 77.2 },
      { date: "2024-03-15", weight: 76.1 },
      { date: "2024-03-22", weight: 75.5 },
    ],
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Weight Progress
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Box>
          <Typography variant="h4">{weightData.current} kg</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Current Weight
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4">{weightData.goal} kg</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Goal Weight
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: 300 }}>
        <LineChart
          series={[
            {
              data: weightData.history.map((d) => d.weight),
              label: "Weight (kg)",
            },
          ]}
          xAxis={[
            {
              scaleType: "point",
              data: weightData.history.map((d) => d.date),
            },
          ]}
          height={300}
        />
      </Box>
    </Box>
  );
}

export default WeightTracker;
