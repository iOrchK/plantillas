import { Link, Paper, Typography } from "@material-ui/core";
import React from "react";
import GridItem from "../Grid/GridItem";

const archives = [
  { title: "March 2020", url: "#" },
  { title: "February 2020", url: "#" },
  { title: "January 2020", url: "#" },
  { title: "November 1999", url: "#" },
  { title: "October 1999", url: "#" },
  { title: "September 1999", url: "#" },
  { title: "August 1999", url: "#" },
  { title: "July 1999", url: "#" },
  { title: "June 1999", url: "#" },
  { title: "May 1999", url: "#" },
  { title: "April 1999", url: "#" },
];

const SidebarArchives = ({ classes }) => {
  return (
    <Paper elevation={0} className={classes.sidebarAboutBox}>
      <Typography variant="h6" gutterBottom>
        Archives
      </Typography>

      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}

      <GridItem br />
    </Paper>
  );
};

export default SidebarArchives;
