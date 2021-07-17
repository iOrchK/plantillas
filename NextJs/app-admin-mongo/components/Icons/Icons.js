import { Badge } from "@material-ui/core";
import {
  Favorite,
  Forum,
  Message,
  Notifications,
  Share,
  WbSunny,
} from "@material-ui/icons";
import { FaHandshake } from "react-icons/fa";
import React from "react";

export const MyNotificationsIcon = ({
  badgeContent,
  badgeColor,
  ...others
}) => (
  <Badge badgeContent={badgeContent || 0} color={badgeColor || "error"}>
    <Notifications {...others} />
  </Badge>
);

export const MyMessagesIcon = ({ badgeContent, badgeColor, ...others }) => (
  <Badge badgeContent={badgeContent || 0} color={badgeColor || "error"}>
    <Message {...others} />
  </Badge>
);

export const MyPublicationsIcon = ({ badgeContent, badgeColor, ...others }) => (
  <Badge badgeContent={badgeContent || 0} color={badgeColor || "error"}>
    <WbSunny {...others} />
  </Badge>
);

export const MyFavoritesIcon = ({ badgeContent, badgeColor, ...others }) => (
  <Badge badgeContent={badgeContent || 0} color={badgeColor || "error"}>
    <Favorite {...others} />
  </Badge>
);

export const MyRelationShipsIcon = ({
  badgeContent,
  badgeColor,
  ...others
}) => (
  <Badge badgeContent={badgeContent || 0} color={badgeColor || "error"}>
    <FaHandshake
      style={{ marginLeft: "0.25rem", fontSize: "1.25rem" }}
      {...others}
    />
  </Badge>
);

export const PostCommentsIcon = ({ badgeContent, badgeColor, ...others }) => (
  <Badge badgeContent={badgeContent || 0} color={badgeColor || "error"}>
    <Forum {...others} />
  </Badge>
);

export const SharePostIcon = ({ badgeContent, badgeColor, ...others }) => (
  <Badge badgeContent={badgeContent || 0} color={badgeColor || "error"}>
    <Share {...others} />
  </Badge>
);
