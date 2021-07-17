import { Grid, Link, Paper, Typography } from "@material-ui/core";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GridItem from "../Grid/GridItem";

const social = [
  { name: "GitHub", icon: GitHubIcon },
  { name: "Twitter", icon: TwitterIcon },
  { name: "Facebook", icon: FacebookIcon },
];

const SidebarSocial = ({ classes }) => {
  return (
    <Paper elevation={0} className={classes.sidebarAboutBox}>
      <Typography variant="h6" gutterBottom>
        Social
      </Typography>

      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Paper>
  );
};

export default SidebarSocial;
