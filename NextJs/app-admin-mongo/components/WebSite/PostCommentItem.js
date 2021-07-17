import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import { getNameInitial } from "../../utils/helpers";

const PostCommentItem = ({
  fullName,
  createdDate,
  profile,
  comment,
  classes,
}) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar className={classes.avatar} alt={fullName} src={profile}>
            {getNameInitial(fullName)}
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          primary={fullName}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {createdDate}
              </Typography>
              {"  —  " + comment}
            </React.Fragment>
          }
        />
      </ListItem>
    </>
  );
};

export default PostCommentItem;
