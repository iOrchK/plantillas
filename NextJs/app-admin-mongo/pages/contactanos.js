import {
  Avatar,
  Button,
  Divider,
  Grow,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Call, LocationOn, Map, WhatsApp } from "@material-ui/icons";
import React from "react";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import WebSiteLayout from "../components/WebSite/WebSiteLayout";
import { copyTextToClipBoard } from "../utils/helpers";

const useStyles = makeStyles((theme) => ({
  call: {
    color: "#fff",
    backgroundColor: "blue",
    minWidth: "150px",
    minHeight: "150px",
  },
  whatsapp: {
    color: "#fff",
    backgroundColor: "green",
    minWidth: "150px",
    minHeight: "150px",
  },
  location: {
    color: "#fff",
    backgroundColor: "crimson",
    minWidth: "150px",
    minHeight: "150px",
  },
  map: {
    color: "#fff",
    backgroundColor: "orange",
    minWidth: "150px",
    minHeight: "150px",
  },
  icon: { fontSize: "50px" },
  paper: {
    padding: theme.spacing(2),
  },
}));

const geolocationShared = "https://goo.gl/maps/Qkbdit12kW8W2P2g7";
const geolocationEmbed =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1917.4579563173102!2d-89.64748709902423!3d20.962820391954434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9bcc6747be6ea0c3!2sNuevo%20Sol%20Casa%20de%20Empe%C3%B1o!5e0!3m2!1ses-419!2smx!4v1622442919582!5m2!1ses-419!2smx";

const Contactanos = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div>
      <WebSiteLayout title={"Contáctanos"} selected={2}>
        <GridContainer justify="center">
          <GridItem xs={12} align="center">
            <Typography variant="h5" style={{ margin: "1rem" }}>
              ¿Cómo contactarnos?
            </Typography>
          </GridItem>

          <GridItem xs={12}>
            <Divider />
          </GridItem>

          <GridItem br />

          <GridItem xs={6} md={4} lg={3} xl={3} align="center">
            <Grow in={checked}>
              <div>
                <Avatar className={classes.call}>
                  <Call className={classes.icon} />
                </Avatar>
                <Typography component="p">
                  Llámenos por teléfono al 9999123456.
                </Typography>
                <Button
                  type="button"
                  variant="text"
                  color="primary"
                  onClick={() =>
                    copyTextToClipBoard("999123456", "Teléfono copiado")
                  }
                >
                  Clic aquí para copiar el teléfono
                </Button>
              </div>
            </Grow>
          </GridItem>

          <GridItem xs={6} md={4} lg={3} xl={3} align="center">
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 1000 } : {})}
            >
              <div>
                <Avatar className={classes.whatsapp}>
                  <WhatsApp className={classes.icon} />
                </Avatar>
                <Typography component="p">
                  Envíenos un WhatsApp al 999123456.
                </Typography>
                <Button
                  type="button"
                  variant="text"
                  color="primary"
                  onClick={() =>
                    copyTextToClipBoard("999123456", "WhatsApp copiado!")
                  }
                >
                  Clic aquí para copiar el WhatsApp
                </Button>
              </div>
            </Grow>
          </GridItem>

          <GridItem xs={6} md={4} lg={3} xl={3} align="center">
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 2000 } : {})}
            >
              <div>
                <Avatar className={classes.location}>
                  <LocationOn className={classes.icon} />
                </Avatar>
                <Typography component="p">
                  Obténga nuestra ubicación de Google Maps
                </Typography>
                <Button
                  type="button"
                  variant="text"
                  color="primary"
                  onClick={() =>
                    copyTextToClipBoard(geolocationShared, "Ubicación copiada!")
                  }
                >
                  Clic aquí para copiar la ubicación
                </Button>
              </div>
            </Grow>
          </GridItem>

          <GridItem xs={6} md={4} lg={3} xl={3} align="center">
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 3000 } : {})}
            >
              <div>
                <Avatar className={classes.map}>
                  <Map className={classes.icon} />
                </Avatar>
                <Typography component="p">
                  Visítenos en nuestra sucursal ubicada en la calle 96 no. 558
                  entre calle 67 y calle 67a de la colonia Mulsay en Mérida,
                  Yucatán, México.
                </Typography>
              </div>
            </Grow>
          </GridItem>

          <GridItem br />

          <GridItem xs={12}>
            <Divider />
          </GridItem>

          <GridItem xs={12} align="center">
            <Typography variant="h5" style={{ margin: "1rem" }}>
              Geolocalización
            </Typography>
          </GridItem>

          <GridItem xs={12}>
            <Divider />
          </GridItem>

          <GridItem br />

          <GridItem xs={12} align="center">
            <Typography>
              Haga clic en el botón "Como llegar" en el mapa de geolocalización
              para recibir instrucciones desde su ubicación actual
            </Typography>
          </GridItem>

          <GridItem br />

          <GridItem xs={12} align="center">
            <Paper elevation={4} className={classes.paper}>
              <iframe
                src={geolocationEmbed}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </Paper>
          </GridItem>

          <GridItem br />
        </GridContainer>
      </WebSiteLayout>
    </div>
  );
};

export default Contactanos;
