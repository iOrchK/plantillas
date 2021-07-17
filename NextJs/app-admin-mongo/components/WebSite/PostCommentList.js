import React from "react";
import List from "@material-ui/core/List";
import PostCommentItem from "./PostCommentItem";
import {
  Avatar,
  Button,
  Fade,
  IconButton,
  InputAdornment,
  ListItem,
  Tooltip,
  Typography,
} from "@material-ui/core";
import GridItem from "../Grid/GridItem";
import { AddComment, Send } from "@material-ui/icons";
import TextFieldCustom from "../Form/TextFieldCustom";
import { Alert } from "@material-ui/lab";
import { getNameInitial } from "../../utils/helpers";
import { ToastSuccess } from "../Toast/Toast";

export default function CommentList({ fieldId, comments, classes }) {
  const [user, setUser] = React.useState({
    fullName: "Jorge Chable",
    profile: null,
  });
  const [createMode, setCreateMode] = React.useState(false);

  const CreateCommentComponent = () => {
    if (!createMode) {
      return (
        <ListItem align="center">
          <Button
            type="button"
            variant="text"
            color="primary"
            fullWidth
            onClick={() => setCreateMode(true)}
            startIcon={<AddComment />}
          >
            Quiero comentar algo
          </Button>
        </ListItem>
      );
    }

    return (
      <ListItem>
        <Avatar
          className={classes.avatar}
          alt={user.fullName}
          src={user.profile}
        >
          {getNameInitial(user?.fullName)}
        </Avatar>
        &nbsp;
        <TextFieldCustom
          id={fieldId}
          label="Escribe aquí un comentario"
          multiline
          rows={4}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip
                  disableFocusListener
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                  placement="top"
                  title={
                    <Typography variant="body2" component="p">
                      Agregar comentario
                    </Typography>
                  }
                >
                  <IconButton
                    edge="end"
                    component="span"
                    onClick={() => handleOnCreate()}
                  >
                    <AddComment fontSize={"small"} />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
      </ListItem>
    );
  };

  const handleOnCreate = () => {
    setCreateMode(false);
    ToastSuccess("Comentario agregado!");
  };

  return (
    <GridItem xs={12}>
      <List className={classes.commentList}>
        {!comments?.length ? (
          <ListItem style={{ display: "block" }}>
            <Alert severity="info">
              Sé el primero en comentar esta publicación
            </Alert>
          </ListItem>
        ) : null}

        {comments?.map((comment) => (
          <PostCommentItem key={comment.id} classes={classes} {...comment} />
        ))}

        {CreateCommentComponent()}
      </List>
    </GridItem>
  );
}
