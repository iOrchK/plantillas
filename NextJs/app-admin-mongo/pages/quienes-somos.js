import {
  Avatar,
  Divider,
  Fade,
  Grow,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import WebSiteLayout from "../components/WebSite/WebSiteLayout";

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: "#fff",
    backgroundColor: "blue",
    minWidth: "150px",
    minHeight: "150px",
  },
}));

const QuienesSomos = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div>
      <WebSiteLayout title={"¿Quiénes somos?"} selected={1}>
        <GridContainer justify="center">
          <GridItem br />
        </GridContainer>

        <Fade in={checked} timeout={1000}>
          <GridContainer
            style={{
              backgroundImage: `url(https://www.grandespymes.com.ar/wp-content/uploads/2019/06/C%C3%B3mo-definir-la-misi%C3%B3n-visi%C3%B3n-y-valores-de-una-empresa-Ejemplos.png)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "30rem",
            }}
          >
            <GridItem xs={12}>
              {
                <img
                  style={{ display: "none" }}
                  src={
                    "https://www.grandespymes.com.ar/wp-content/uploads/2019/06/C%C3%B3mo-definir-la-misi%C3%B3n-visi%C3%B3n-y-valores-de-una-empresa-Ejemplos.png"
                  }
                  alt={"misión"}
                />
              }
            </GridItem>
          </GridContainer>
        </Fade>

        <GridContainer justify="center">
          <GridItem br />

          <GridItem xs={12}>
            <Divider />
          </GridItem>

          <GridItem xs={12} align="center">
            <Typography variant="h5" style={{ margin: "1rem" }}>
              Equipo Nuevo Sol
            </Typography>
          </GridItem>

          <GridItem xs={12}>
            <Divider />
          </GridItem>

          <GridItem br />

          <GridItem xs={6} md={4} lg={3} xl={3} align="center">
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 2000 } : {})}
            >
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  className={classes.avatar}
                />
                <Typography component="p">Remy Sharp - Fundador</Typography>
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
                <Avatar
                  alt="Travis Howard"
                  src="https://material-ui.com/static/images/avatar/6.jpg"
                  className={classes.avatar}
                />
                <Typography component="p">Travis Howard - Director</Typography>
              </div>
            </Grow>
          </GridItem>

          <GridItem xs={6} md={4} lg={3} xl={3} align="center">
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 4000 } : {})}
            >
              <div>
                <Avatar
                  alt="Cindy Baker"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                  className={classes.avatar}
                />
                <Typography component="p">Cindy Baker - Operador</Typography>
              </div>
            </Grow>
          </GridItem>

          <GridItem br />
        </GridContainer>
      </WebSiteLayout>
    </div>
  );
};

export default QuienesSomos;
