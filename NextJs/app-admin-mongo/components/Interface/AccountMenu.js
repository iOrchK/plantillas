import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { ExitToApp, People } from "@material-ui/icons";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import AccountForm from "./AccountForm";

const useStyles = makeStyles((theme) => ({
  textWhite: { color: theme.textWhite },
}));

const AccountMenu = () => {
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openAccount, setOpenAccount] = React.useState(false);

  const handleAccount = (e) => {
    e.preventDefault();
    handleClose(e);
    setOpenAccount(true);
  };

  const handleCloseSession = async (e) => {
    e.preventDefault();
    router.push("/auth/close-session");
  };

  const handleClose = (e) => {
    e.preventDefault();
    setAnchorEl(null);
  };

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
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
        <MenuItem id="log-out-btn" button onClick={handleCloseSession}>
          <ExitToApp color="primary" />{" "}
          <Typography color="primary"> &nbsp; Cerrar sesión</Typography>
        </MenuItem>
      </Menu>

      <AccountForm open={openAccount} setOpen={setOpenAccount} />
    </div>
  );
};

export default AccountMenu;
