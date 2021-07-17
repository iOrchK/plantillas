import { Toolbar, Typography } from "@material-ui/core";
import React from "react";
import GridItem from "../Grid/GridItem";
import LogIn from "./LogIn";

const HeaderCover = ({ classes }) => {
  const cover = "https://source.unsplash.com/random";
  //   const cover = "/static/history1.jpeg";

  return (
    <GridItem
      xs={12}
      style={{
        backgroundImage: `url(${cover})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={cover} alt={"cover"} />}
      <Toolbar
        className={classes.toolbar}
        style={{
          height: "25rem",
        }}
      >
        <img src="/static/logoV2.png" align="right" width="350" alt="cover" />
        {/* <Typography
          component="h2"
          variant="h5"
          color="primary"
          align="right"
          noWrap
          aria-label="brand"
        >
          Casa de empeños Nuevo Sol
        </Typography> */}

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {" "}
        </Typography>

        <LogIn />
      </Toolbar>
    </GridItem>
  );
};

export default HeaderCover;
