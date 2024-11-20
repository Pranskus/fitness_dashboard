import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";
import mockData from "../data/MOCK_DATA.json";

function PlannedActivities() {
  // Get next 3 upcoming activities
  const upcomingActivities = mockData
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .filter((activity) => new Date(activity.date) >= new Date())
    .slice(0, 3)
    .map((activity, index) => ({
      id: index,
      name: activity.activity,
      time: activity.activityTime,
      date: activity.date,
      type: activity.activity,
    }));

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Upcoming Activities
      </Typography>
      <List>
        {upcomingActivities.map((activity) => (
          <ListItem
            key={activity.id}
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              mb: 1,
            }}
          >
            <ListItemText
              primary={activity.name}
              secondary={
                <Box sx={{ display: "flex", gap: 1, mt: 0.5 }}>
                  <Typography variant="body2" color="text.secondary">
                    {activity.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • {activity.time}
                  </Typography>
                </Box>
              }
            />
            <Chip
              label={activity.type}
              size="small"
              color="primary"
              variant="outlined"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PlannedActivities;
