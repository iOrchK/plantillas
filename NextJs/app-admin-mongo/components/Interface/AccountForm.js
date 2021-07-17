import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ImageViewerModalCustom from "../Form/ImageViewerModalCustom";
import PasswordFieldCustom from "../Form/PasswordFieldCustom";
import TextFieldCustom from "../Form/TextFieldCustom";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";

const useStyles = makeStyles((theme) => ({
  large: {
    width: "25vh",
    height: "25vh",
  },
}));

const AccountForm = ({ open, setOpen }) => {
  const classes = useStyles();
  const [openViewer, setOpenViewer] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleSave = () => {
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={setOpen}
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="lg"
        fullWidth
        style={{ zIndex: 1000 }}
      >
        <DialogTitle>
          <Typography variant="h4" gutterBottom>
            Información de tu cuenta
          </Typography>
        </DialogTitle>
        <DialogContent>
          <GridContainer>
            <GridItem xs={12} md={4} lg={3} align="center">
              <GridContainer>
                <GridItem xs={12}>
                  <Avatar
                    alt="Profile"
                    src="https://www.tierragamer.com/wp-content/uploads/2021/01/sarada-cosplay.jpg"
                    className={classes.large}
                    onClick={() => setOpenViewer(true)}
                    style={{ cursor: "pointer" }}
                  />
                </GridItem>

                <GridItem br />
              </GridContainer>
            </GridItem>

            <GridItem xs={12} md={8} lg={9}>
              <GridContainer>
                <GridItem xs={12}>
                  <DialogContentText>
                    To subscribe to this website, please enter your email
                    address here. We will send updates occasionally.
                  </DialogContentText>
                </GridItem>

                <GridItem xs={12} md={12} lg={6}>
                  <TextFieldCustom label="Correo electrónico" />
                </GridItem>

                <GridItem xs={12} md={12} lg={6}>
                  <PasswordFieldCustom />
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>

      <ImageViewerModalCustom
        style={{ zIndex: 1001 }}
        open={openViewer}
        setOpen={setOpenViewer}
        views={[
          {
            source:
              "https://www.tierragamer.com/wp-content/uploads/2021/01/sarada-cosplay.jpg",
          },
          {
            source:
              "https://www.tierragamer.com/wp-content/uploads/2021/01/sarada-cosplay.jpg",
          },
        ]}
      />
    </div>
  );
};

export default AccountForm;
