import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    minHeight: 256,
    height: "100%",
  },
  cardHeight: {
    height: "100%",
  },
}));

function CategoryCard({ category, title }) {
  const classes = useStyles();

  return (
    <Card className={classes.cardHeight}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`/images/categories/${category}.png`}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CategoryCard;
