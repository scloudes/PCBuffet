import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { setCategory } from "actions";
import { connect } from "react-redux";

import CategoryCard from "components/CategoryCard";
import { Grid, Typography } from "@material-ui/core";

import getCategories from "services/getCategories";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "2rem",
  },
}));

function CategorySelector(props) {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, [setCategories]);

  const renderCategories = () => {
    return categories.map((category) => (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        key={category.category}
        onClick={() => {
          localStorage.setItem(
            "selectedCategory",
            JSON.stringify({
              category: category.category,
              questions: category.questions,
            })
          );
          props.setCategory({
            category: category.category,
            questions: category.questions,
          });
          props.handler(1);
        }}
      >
        <CategoryCard category={category.category} title={category.title} />
      </Grid>
    ));
  };

  return (
    <Grid container spacing={4} justifyContent="space-evenly">
      <Grid item xs={12}>
        <Typography className={classes.title} component="h1">
          SELECCIONE UNA CATEGORIA
        </Typography>
      </Grid>
      {renderCategories()}
    </Grid>
  );
}

const mapDispatchToProps = { setCategory };

export default connect(null, mapDispatchToProps)(CategorySelector);
