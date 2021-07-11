import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
  
export default function App() {
  return (
    <div stlye={{}}>
      <h4>My First Card in ReactJS</h4>
      <Card
        style={{
          width: 400,
          backgroundColor: "lightblue",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            Hey there!
          </Typography>
          <Typography variant="h5" component="h2">
            This is Devsnest assignment
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
            Stay Safe Stay Healthy
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Thank You</Button>
        </CardActions>
      </Card>
    </div>
  );
}
