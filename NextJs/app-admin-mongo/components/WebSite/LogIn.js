import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { ThemeObject } from "../../styles/theme";
import { APIRequest } from "../../utils/helpers";
import PasswordFieldCustom from "../Form/PasswordFieldCustom";
import TextFieldCustom from "../Form/TextFieldCustom";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

const useStyles = makeStyles((theme) => ({
  dialog: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.amber.main,
  },
}));

const LogIn = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState("login");
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  React.useEffect(() => {
    const init = async () => {
      if (open) {
        setMode("login");
        reset();
      }
    };

    init();
  }, [open]);

  const reset = () => {
    setEmail(null);
    setPassword(null);
  };

  const changeMode = (val) => {
    setMode(val);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    let response = await APIRequest.post("/api/user/login", {
      email,
      password,
    });
    if (response) {
      handleClose();
    }
  };

  const handleRecovery = () => {
    handleClose();
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    let response = await APIRequest.post("/api/user/register", {
      email,
    });
    if (response) {
      changeMode("login");
    }
  };

  const LogInViewComponent = () => (
    <GridContainer>
      <GridItem xs={12} align="center">
        <Button
          fullWidth
          color="primary"
          onClick={() => {
            changeMode("register");
            reset();
          }}
        >
          Para registrarse haga clic aquí
        </Button>
      </GridItem>

      <GridItem xs={12} align="center">
        <DialogContentText>
          Para iniciar sesión, a continuación ingrese su correo y su contraseña
        </DialogContentText>
      </GridItem>

      <GridItem xs={12}>
        <TextFieldCustom
          autoFocus
          label="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />
      </GridItem>

      <GridItem xs={12}>
        <PasswordFieldCustom onChange={(e) => setPassword(e.target.value)} />
      </GridItem>
    </GridContainer>
  );

  const RegisterViewComponent = () => (
    <GridContainer align="center">
      <GridItem xs={12}>
        <DialogContentText>
          Ingrese su correo electrónico personal, después presione el botón
          "Registrar" para crear su cuenta.
        </DialogContentText>
      </GridItem>

      <GridItem xs={12}>
        <TextFieldCustom
          autoFocus
          label="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />
      </GridItem>
    </GridContainer>
  );

  const RecoveryViewComponent = () => (
    <GridContainer align="center">
      <GridItem xs={12}>
        <DialogContentText>
          Ingrese su correo electrónico registrado, después presione el botón
          "Enviar correo de recuperación".
        </DialogContentText>
      </GridItem>

      <GridItem xs={12}>
        <TextFieldCustom
          autoFocus
          label="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />
      </GridItem>
    </GridContainer>
  );

  const DialogContentComponent = () => {
    switch (mode) {
      case "login":
        return LogInViewComponent();
      case "register":
        return RegisterViewComponent();
      case "recovery":
        return RecoveryViewComponent();
      default:
        return null;
    }
  };

  const LogInActionsComponent = () => (
    <GridContainer>
      <GridItem xs={12}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleLogIn}
          color="primary"
        >
          Iniciar sesión
        </Button>
      </GridItem>
      <GridItem xs={12}>
        <Button
          fullWidth
          onClick={() => {
            changeMode("recovery");
            reset();
          }}
          color="primary"
        >
          ¿Olvidó la contraseña?
        </Button>
      </GridItem>
    </GridContainer>
  );

  const RegisterActionsComponent = () => (
    <GridContainer>
      <GridItem xs={12}>
        <Button
          type="button"
          variant="contained"
          fullWidth
          color="primary"
          onClick={handleRegister}
        >
          Registrar
        </Button>
      </GridItem>
      <GridItem xs={12}>
        <Button
          type="button"
          variant="text"
          fullWidth
          onClick={() => {
            changeMode("login");
            reset();
          }}
          color="primary"
        >
          ¿Ya tiene una cuenta? Haga clic aquí para iniciar sesión
        </Button>
      </GridItem>
    </GridContainer>
  );

  const RecoveryActionsComponent = () => (
    <GridContainer>
      <GridItem xs={12}>
        <Button
          type="button"
          variant="contained"
          fullWidth
          color="primary"
          onClick={handleRecovery}
        >
          Enviar correo de recuperación
        </Button>
      </GridItem>

      <GridItem xs={12}>
        <Button
          type="button"
          variant="text"
          fullWidth
          color="primary"
          onClick={() => {
            changeMode("login");
            reset();
          }}
        >
          ¿Recordó su contraseña? Haga clic aquí para iniciar sesión
        </Button>
      </GridItem>
      <GridItem br />
    </GridContainer>
  );

  const DialogActionsComponent = () => {
    switch (mode) {
      case "login":
        return LogInActionsComponent();
      case "register":
        return RegisterActionsComponent();
      case "recovery":
        return RecoveryActionsComponent();
      default:
        return null;
    }
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        onClick={handleOpen}
      >
        Únete a la comunidad Nuevo Sol
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <div>
          <GridContainer className={classes.dialog}>
            <GridItem br />
            <GridItem xs={12} align="center">
              <img src="/static/logoV2.png" width="300" alt="cover" />
            </GridItem>
            <GridItem xs={12} align="center">
              <Typography variant="h5">
                Bienvenido a la comunidad Nuevo Sol
              </Typography>
            </GridItem>
            <GridItem br />
          </GridContainer>
          <DialogContent>{DialogContentComponent()}</DialogContent>
          <DialogActions>{DialogActionsComponent()}</DialogActions>
        </div>
      </Dialog>
    </div>
  );
};

export default LogIn;
