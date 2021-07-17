import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useRouter } from "next/router";
import TextFieldCustom from "../Form/TextFieldCustom";
import PasswordFieldCustom from "../Form/PasswordFieldCustom";
import { ToastWarning } from "../Toast/Toast";
import { showLoader } from "../Loader/BackdropLoader";
import AuthContext from "./Context/AuthContext";

function Copyright() {
  return (
    <Typography variant="body2" color="textWhite" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Nuevo sol
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  logIn: {
    borderRadius: "4px",
    padding: "1rem",
    background: "rgba(255, 165, 0, 0.5)",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const router = useRouter();
  const authContext = React.useContext(AuthContext);
  const [user, setUser] = React.useState({
    email: null,
    password: null,
  });
  const { email, password } = user;
  const { login, auth } = authContext;

  React.useEffect(() => {
    if (auth) {
      router.push("/admin");
    }
    console.log(auth);
  }, [auth]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      ToastWarning("Favor de completar los campos requeridos");
      return;
    }
    showLoader();
    await login(user);
    showLoader();
  };

  const getEmailError = () => {
    if (!email) return "Correo requerido";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return "Correo inválido";
    }
    return;
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.logIn} align="center">
          <img src="/static/logoV2.png" width="300" alt="cover" />
          <TextFieldCustom
            autoFocus
            label="Correo electrónico"
            error={getEmailError()}
            helperText={getEmailError()}
            onChange={(e) => {
              const email = e.target.value;
              setUser({ ...user, email });
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) onSubmit(e);
            }}
          />
          <PasswordFieldCustom
            error={!password}
            onChange={(e) => {
              const password = e.target.value;
              setUser({ ...user, password });
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) onSubmit(e);
            }}
          />

          {/* <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Recuerdame"
        /> */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => onSubmit(e)}
          >
            Iniciar sesión
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                ¿Olvidaste la contraseña?
              </Link>
            </Grid>
            <Grid item xs={12} align="center">
              <Box mt={4}>
                <Copyright />
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
