import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { ExitToApp, People } from "@material-ui/icons";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import AccountForm from "./AccountForm";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  textWhite: { color: theme.textWhite },
}));

const AccountMenu = ({ logout }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openAccount, setOpenAccount] = React.useState(false);
  const router = useRouter();

  const handleAccount = () => {
    handleClose();
    setOpenAccount(true);
  };

  const closeSession = () => {
    handleClose();
    logout();
    router.push("/auth");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <IconButton onClick={handleMenu}>
        <AccountCircle className={classes.textWhite} />
      </IconButton>
      <Menu
        id="account-menu-ab"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleAccount}>
          <People color="primary" />{" "}
          <Typography color="primary"> &nbsp; Mi cuenta</Typography>
        </MenuItem>
        <MenuItem id="log-out-btn" onClick={closeSession}>
          <ExitToApp color="primary" />{" "}
          <Typography color="primary"> &nbsp; Cerrar sesión</Typography>
        </MenuItem>
      </Menu>

      <AccountForm open={openAccount} setOpen={setOpenAccount} />
    </div>
  );
};

export default AccountMenu;
