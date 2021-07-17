import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import uuid from "react-uuid";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import {
  AccountBalance,
  Assignment,
  EventNote,
  Home,
  LocalActivity,
  People,
  Redeem,
} from "@material-ui/icons";
import AccountMenu from "./AccountMenu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      // width: theme.spacing(9) + 1,
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const listItems = [
  {
    id: uuid(),
    text: "Inicio",
    icon: <Home />,
  },
  {
    id: uuid(),
    text: "Agenda de diario",
    icon: <MenuBookIcon />,
  },
  {
    id: uuid(),
    text: "Calendario mensual",
    icon: <EventNote />,
  },
  {
    id: uuid(),
    text: "Clientes",
    icon: <RecentActorsIcon />,
  },
  {
    id: uuid(),
    text: "Empeños",
    icon: <Assignment />,
  },
  {
    id: uuid(),
    text: "Remates",
    icon: <Redeem />,
  },
  {
    id: uuid(),
    text: "Balance",
    icon: <AccountBalance />,
  },
  {
    id: uuid(),
    text: "Bitácora",
    icon: <LocalActivity />,
  },
  {
    id: uuid(),
    text: "Usuarios",
    icon: <People />,
  },
];

const AdminLayout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(listItems[0]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const AppBarButton = () => (
    <IconButton
      color="inherit"
      onClick={handleDrawerOpen}
      edge="start"
      className={clsx(classes.menuButton, {
        [classes.hide]: open,
      })}
    >
      <MenuIcon />
    </IconButton>
  );

  const DrawerToolbar = () => (
    <div className={classes.toolbar}>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </div>
  );

  const DrawerItems = () => (
    <List>
      {listItems.map((item, index) => (
        <ListItem
          button
          key={"list-item-" + index}
          selected={selected?.id === item?.id}
          onClick={() => setSelected(item)}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {AppBarButton()}

          <Typography variant="h6" noWrap>
            {selected?.text}
          </Typography>

          <AccountMenu />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        {DrawerToolbar()}

        <Divider />

        {DrawerItems()}
        {/* <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
