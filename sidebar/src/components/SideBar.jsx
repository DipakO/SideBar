import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HelpIcon from "@mui/icons-material/Help";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Menu from "./Menu";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import FlightIcon from "@mui/icons-material/Flight";

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function SideBar({ stateLift }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const menuClick = () => {
    if (open) {
      const handleDrawerClose = () => {
        setOpen(false);
      };
      handleDrawerClose();
    } else {
      const handleDrawerOpen = () => {
        setOpen(true);
      };
      handleDrawerOpen();
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Navigate = useNavigate();

  React.useEffect(() => {
    stateLift(open);
  }, [open]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* This is The NAVBAR Sction */}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={menuClick}
            edge="start"
            // sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            {" "}
            <Menu open={open} />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "50rem",
              }}
            >
              <div>
                <Button style={{ color: "white", fontSize: "20px" }}>
                  Blog
                </Button>
              </div>

              <div>
                <Button style={{ color: "white", fontSize: "20px" }}>
                  {" "}
                  <CallIcon /> Contact Us
                </Button>
              </div>
              <div>
                <Button style={{ color: "white", fontSize: "20px" }}>
                  {" "}
                  <MiscellaneousServicesIcon /> Our_Servises
                </Button>
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* THis IS the Drawer And the Sidebar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  justifyContent: "center",
                }}
              >
                <div className="drawer">
                  <Link className="Link" to="/home">
                    <HomeIcon /> Home
                  </Link>
                </div>
                <div className="drawer">
                  <Link className="Link" to="/contact">
                    <DesignServicesIcon /> Additional Services
                  </Link>
                </div>
                <div className="drawer">
                  <Link className="Link" to="/sendemail">
                    <FlightIcon /> Flight Info..
                  </Link>
                </div>
                <div className="drawer">
                  <Link className="Link" to="/help">
                    <HelpIcon /> Help
                  </Link>
                </div>
              </div>
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography> */}
      </Main>
    </Box>
  );
}
