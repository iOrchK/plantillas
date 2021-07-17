import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GridContainer from "../Grid/GridContainer";
import {
  transformTextToSpeech,
  transformNumberToWords,
} from "../../utils/helpers";
import Link from "@material-ui/core/Link";
import {
  MyFavoritesIcon,
  MyMessagesIcon,
  MyNotificationsIcon,
  MyPublicationsIcon,
  MyRelationShipsIcon,
} from "../Icons/Icons";

const SidebarActions = ({ classes }) => {
  const [myNotifications, setMyNotifications] = React.useState([]);
  const [myMessages, setMyMessages] = React.useState([]);
  const [myFavorites, setMyFavorites] = React.useState([]);
  const [myPublications, setMyPublications] = React.useState([]);
  const [myRelationships, setMyRelationships] = React.useState([]);

  React.useEffect(() => {
    const init = () => {
      let result = null;
      let textNot = null;
      let textMes = null;
      if (myNotifications?.length === 1) {
        textNot =
          transformNumberToWords(myNotifications?.length, "es", true) +
          " nueva notificación";
      } else if (myNotifications?.length > 1) {
        textNot =
          transformNumberToWords(
            myNotifications?.length,
            "es",
            true,
            false,
            true
          ) + " nuevas notificaciones";
      }
      if (myMessages?.length === 1) {
        textMes =
          transformNumberToWords(myMessages?.length, "es", false, true) +
          " nuevo mensaje";
      } else if (myMessages?.length > 1) {
        textMes =
          transformNumberToWords(myMessages?.length, "es", false, false, true) +
          " nuevos mensajes";
      }
      if (textNot !== null) {
        result = "Tienes " + textNot;
      }
      if (textMes !== null) {
        if (result !== null) {
          result += " y " + textMes;
        } else {
          result = "Tienes " + textMes;
        }
      }
      if (result !== null) {
        transformTextToSpeech(result);
      }
    };

    init();
  }, [myNotifications, myMessages]);

  return (
    <Paper elevation={0} className={classes.sidebarAboutBox}>
      <Link display="block" variant="body1" href="#">
        <GridContainer direction="row" spacing={1} alignItems="center">
          <Grid item>
            <MyNotificationsIcon badgeContent={myNotifications?.length} />
          </Grid>
          <Grid item> Mis notificaciones</Grid>
        </GridContainer>
      </Link>

      <Link display="block" variant="body1" href="#">
        <GridContainer direction="row" spacing={1} alignItems="center">
          <Grid item>
            <MyMessagesIcon badgeContent={myMessages?.length} />
          </Grid>
          <Grid item> Mis mensajes</Grid>
        </GridContainer>
      </Link>

      <Link display="block" variant="body1" href="#">
        <GridContainer direction="row" spacing={1} alignItems="center">
          <Grid item>
            <MyFavoritesIcon badgeContent={myFavorites?.length} />
          </Grid>
          <Grid item> Mis favoritos</Grid>
        </GridContainer>
      </Link>

      <Link display="block" variant="body1" href="#">
        <GridContainer direction="row" spacing={1} alignItems="center">
          <Grid item>
            <MyPublicationsIcon badgeContent={myPublications?.length} />
          </Grid>
          <Grid item> Mis publicaciones</Grid>
        </GridContainer>
      </Link>

      <Link display="block" variant="body1" href="#">
        <GridContainer direction="row" spacing={1} alignItems="center">
          <Grid item>
            <MyRelationShipsIcon badgeContent={myRelationships?.length} />
          </Grid>
          <Grid item> Mis relaciones</Grid>
        </GridContainer>
      </Link>
    </Paper>
  );
};

export default SidebarActions;
