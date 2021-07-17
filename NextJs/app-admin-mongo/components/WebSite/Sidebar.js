import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SidebarActions from "./SidebarActions";
import SidebarBanners from "./SideBarBanners";
import SidebarArchives from "./SidebarArchives";
import SidebarSocial from "./SidebarSocial";
import GridItem from "../Grid/GridItem";

const useStyles = makeStyles((theme) => ({
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  banner: { width: "100%" },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <GridItem xs={12} md={4}>
      <SidebarActions classes={classes} />

      <SidebarBanners classes={classes} />

      <SidebarArchives classes={classes} />

      <GridItem br />

      <SidebarSocial classes={classes} />

      <GridItem br />
    </GridItem>
  );
}
