import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../Grid/GridContainer";
import HeaderCover from "./HeaderCover";
import HeaderSubnav from "./HeaderSubnav";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header({ title, selected }) {
  const classes = useStyles();

  return (
    <GridContainer>
      <HeaderCover classes={classes} />

      <HeaderSubnav classes={classes} selected={selected} />
    </GridContainer>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
