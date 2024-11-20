import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

function ExerciseList({ exercises }) {
  return (
    <List>
      {exercises.map((exercise, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText
              primary={exercise.name}
              secondary={
                <>
                  <Typography component="span" variant="body2">
                    Type: {exercise.type}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2">
                    Muscle: {exercise.muscle}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2">
                    Equipment: {exercise.equipment}
                  </Typography>
                  <br />
                  <Typography component="span" variant="body2">
                    Instructions: {exercise.instructions}
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default ExerciseList;
