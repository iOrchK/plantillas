import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Tooltip, Zoom } from "@material-ui/core";
import PostCommentList from "./PostCommentList";
import Fade from "@material-ui/core/Fade";
import {
  MyFavoritesIcon,
  PostCommentsIcon,
  SharePostIcon,
} from "../Icons/Icons";
import { ThemeObject } from "../../styles/theme";

const useStyles = makeStyles((theme) => ({
  card: { maxWidth: "100%", marginBottom: theme.spacing(4) },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  inline: {
    display: "inline",
  },
  commentList: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Post({
  id,
  title,
  createdDate,
  source,
  description,
  favorites,
  shared,
  comments,
  index,
}) {
  const classes = useStyles();
  const [user, setUser] = React.useState({
    id: "1",
    fullName: "Jorge Chable",
    profile: null,
  });
  const [expanded, setExpanded] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setTimeout(handleFocusField, 250);
    }
  };

  const handleFocusField = () => {
    const tf = document.querySelector("#textfield-" + id);
    if (tf) {
      tf.scrollIntoView({ block: "center" });
      tf.focus();
    }
  };

  const CardHeaderComponent = () => (
    <CardHeader
      avatar={
        <Avatar
          alt={user?.fullName}
          src={user?.profile}
          className={classes.avatar}
        >
          {user?.fullName[0]}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={title}
      subheader={createdDate}
    />
  );

  const CardMediaComponent = () => (
    <CardMedia
      className={classes.media}
      image={source?.url}
      title={source?.title}
    />
  );

  const CardContentComponent = () => (
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {description}
      </Typography>
    </CardContent>
  );

  const isYourFavorite = () => {
    let exist = favorites?.find((a) => a.id === user.id);
    return exist ? { color: ThemeObject.palette.amber.main } : undefined;
  };

  const CardActionsComponent = () => (
    <CardActions disableSpacing>
      <Tooltip
        disableFocusListener
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        placement="top"
        title={getFavoritesTitle()}
      >
        <IconButton>
          <MyFavoritesIcon style={isYourFavorite()} />
        </IconButton>
      </Tooltip>

      <Tooltip
        disableFocusListener
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        placement="top"
        title={getSharedTitle()}
      >
        <IconButton>
          <SharePostIcon />
        </IconButton>
      </Tooltip>

      <Tooltip
        disableFocusListener
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        placement="top"
        title={getCommentsTitle()}
      >
        <IconButton onClick={handleExpandClick}>
          <PostCommentsIcon />
        </IconButton>
      </Tooltip>

      <IconButton
        id={"expand-comments-btn-" + id}
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
      >
        <ExpandMoreIcon />
      </IconButton>
    </CardActions>
  );

  const CardCommentsComponent = () => (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <PostCommentList
          classes={classes}
          fieldId={"textfield-" + id}
          comments={comments}
        />
      </CardContent>
    </Collapse>
  );

  const getSharedTitle = () => {
    let result = "Publicación compartida ";
    if (shared === 1) result += "1 vez";
    else result += (shared || 0) + " veces";
    return (
      <Typography variant="body2" component="p">
        {result}
      </Typography>
    );
  };

  const getFavoritesTitle = () => {
    if (!favorites?.length) {
      return (
        <Typography variant="body2" component="p">
          Agregar a favoritos
        </Typography>
      );
    }
    let arr = [];
    if (favorites?.length > 10) {
      for (let i = 0; i <= 9; i++) {
        arr.push(favorites[i]);
      }
    } else {
      arr = favorites;
    }
    return (
      <>
        <Typography variant="body2" component="p">
          Publicación favorita de:
        </Typography>
        {arr?.map((favorite) => (
          <Typography variant="body2" component="p">
            {favorite.fullName}
          </Typography>
        ))}
        {favorites?.length - 10 > 0 ? (
          <Typography variant="body2" component="p">
            y de {favorites?.length - 10} más ...
          </Typography>
        ) : null}
      </>
    );
  };

  const getCommentsTitle = () => (
    <Typography variant="body2" component="p">
      {"Ver los comentarios de ésta publicación"}
    </Typography>
  );

  const getTransition = () => {
    if (index === 0) return;
    return { transitionDelay: checked ? "500ms" : "0ms" };
  };

  return (
    <Zoom in={checked} style={getTransition()}>
      <Card className={classes.card}>
        {CardHeaderComponent()}
        {CardMediaComponent()}
        {CardContentComponent()}
        {CardActionsComponent()}
        {CardCommentsComponent()}
      </Card>
    </Zoom>
  );
}

Post.propTypes = {
  title: PropTypes.array,
  creationDate: PropTypes.string,
  source: PropTypes.any,
  description: PropTypes.string,
  favorites: PropTypes.array,
  comments: PropTypes.array,
};
