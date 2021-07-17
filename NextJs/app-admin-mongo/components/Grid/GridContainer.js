import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  grid: {
    margin: "0px!important",
  },
});

const GridContainer = ({ className, children, ...others }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid + " " + className} {...others}>
      {children}
    </Grid>
  );
};

export default GridContainer;
