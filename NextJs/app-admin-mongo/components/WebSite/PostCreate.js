import {
  Avatar,
  Button,
  Card,
  CardMedia,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Close, Error, Public, Send } from "@material-ui/icons";
import React from "react";
import { getNameInitial } from "../../utils/helpers";
import TextFieldCustom from "../Form/TextFieldCustom";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import { MyPublicationsIcon } from "../Icons/Icons";
import { ToastSuccess } from "../Toast/Toast";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
  commentList: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const PostCreate = () => {
  const classes = useStyles();
  const [user, setUser] = React.useState({
    fullName: "Jorge Chable",
    profile: null,
  });
  const [createMode, setCreateMode] = React.useState(false);
  const [source, setSource] = React.useState({});
  const [description, setDescription] = React.useState(null);

  React.useEffect(() => {
    if (createMode) {
      setSource({});
      setDescription(null);
    }
  }, [createMode]);

  if (!createMode) {
    return (
      <GridItem xs={12} align="center">
        <Button
          id="add-publication-btn"
          type="button"
          variant="text"
          color="primary"
          fullWidth
          onClick={() => setCreateMode(true)}
        >
          <MyPublicationsIcon /> &nbsp;{" "}
          <Typography>Quiero agregar una nueva publicación</Typography>
        </Button>
      </GridItem>
    );
  }

  const handleOnCreate = () => {
    setCreateMode(false);
    ToastSuccess("Publicación creada!");
  };

  const MediaComponent = () => {
    if (!Object.keys(source)?.length)
      return (
        <TextFieldCustom label="Ingresa la url de la imágen, video o audio para la publicación *" />
      );
    return (
      <CardMedia
        className={classes.media}
        image={source?.url}
        title={source?.title}
      />
    );
  };

  return (
    <GridItem xs={12}>
      <Card>
        <GridContainer>
          <GridItem br />

          <GridItem xs={12}>
            <Typography variant="h5" color="primary">
              <MyPublicationsIcon /> &nbsp; Nueva publicación de{" "}
              {user?.fullName}
            </Typography>
          </GridItem>

          <GridItem xs={12}>{MediaComponent()}</GridItem>

          <GridItem xs={12}>
            <TextFieldCustom
              label="Ingrese una descripción para su publicación *"
              multiline
              rows={4}
            />
          </GridItem>

          <GridItem br />

          <GridItem xs={12} align="right">
            <Button
              type="button"
              variant="outlined"
              color="primary"
              startIcon={<Close fontSize={"small"} />}
              onClick={() => setCreateMode(false)}
            >
              Cancelar
            </Button>{" "}
            &nbsp;
            <Button
              type="button"
              variant="contained"
              color="primary"
              startIcon={<Public fontSize={"small"} />}
              onClick={() => handleOnCreate()}
            >
              Publicar
            </Button>
          </GridItem>

          <GridItem br />
        </GridContainer>
      </Card>
    </GridItem>
  );
};

export default PostCreate;
