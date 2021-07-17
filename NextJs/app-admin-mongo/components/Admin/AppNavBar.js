import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountMenu from "./AccountMenu";
import DrawerButtonMenu from "./DrawerButtonMenu";
import AuthContext from "../Auth/Context/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  textWhite: { color: theme.textWhite },
}));

const AppNavBar = ({ title, selected }) => {
  const classes = useStyles();
  const authContext = React.useContext(AuthContext);
  const { logout } = authContext;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <DrawerButtonMenu selected={selected} />

          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>

          <AccountMenu logout={logout} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppNavBar;
