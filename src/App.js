import { Routes, Route } from "react-router-dom";
import { AppStyle } from "./Global.style";
import store from "./Store";
import { Provider } from "react-redux";
import Main from "./Screens/Main/Main";
import SidBar from "./Components/SidBar/SidBar";
import "./index.css";
import * as React from "react";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ReservationsContentScreen from "./Screens/ReservationsContentScreen/ReservationsContentScreen";
import NewReservationsContent from "./Components/Content/ReservationsContent/NewReservationsContent/NewReservationsContent";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = <SidBar />;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Provider store={store}>
      <AppStyle>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          anchor={"right"}
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              position: "relative",
            },
          }}
          open
        >
          {drawer}
        </Drawer>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: "none" },
            position: "absolute",
            bottom: "39rem",
            left: "2rem",
          }}
        >
          <MenuIcon />
        </IconButton>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reservations" element={<ReservationsContentScreen />} />
          <Route path="/reservat" element={<NewReservationsContent />} />
        </Routes>
      </AppStyle>
    </Provider>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
