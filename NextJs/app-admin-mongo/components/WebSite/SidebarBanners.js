import { Paper } from "@material-ui/core";
import React from "react";

const SidebarBanners = ({ classes }) => {
  const banners = ["/static/promocion1.jpeg", "/static/banner1.jpeg"];

  return (
    <>
      {banners.map((url) => (
        <Paper elevation={0}>
          <img className={classes.banner} src={url} />
        </Paper>
      ))}
    </>
  );
};

export default SidebarBanners;
