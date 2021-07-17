import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  grid: {
    padding: "0 15px !important",
    wordWrap: "normal",
  },
});

const GridItem = ({ className, br, children, ...others }) => {
  const classes = useStyles();

  if (br) {
    return <Grid item xs={12} style={{ marginTop: "1.5rem" }} />;
  }

  return (
    <Grid item className={classes.grid + " " + className} {...others}>
      {children}
    </Grid>
  );
};

export default GridItem;
