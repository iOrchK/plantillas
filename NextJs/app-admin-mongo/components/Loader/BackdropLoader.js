import React from "react";
import { Button } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 999,
    color: "#A95153",
  },
}));

export const showLoader = () => {
  const btn = document.querySelector("#show-loader-btn");
  btn.click();
};

export default function BackdropLoader() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button
        type={"button"}
        id="show-loader-btn"
        style={{ display: "none" }}
        onClick={() => setOpen(!open)}
      />
      <Backdrop
        className={classes.backdrop}
        open={open}
        invisible={false}
        style={{ zIndex: 1000 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
