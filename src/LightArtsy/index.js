import * as React from "react";
import "./index.css";
import { Link, Routes, Route, useLocation, matchPath } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DecorativeLights from "../routes/decorativeLights";
import StringLight from "../routes/stringLight";
import TableLamps from "../routes/tableLamps";
import TractOrder from "../routes/trackOrder";
import ContactUs from "../routes/contactUs";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Home from "../routes/home";

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export default function LightArtsy() {
  const routeMatch = useRouteMatch([
    "/",
    "/the-light-artsy",
    "/home",
    "/decorative-lights",
    "/string-light",
    "/table-lamps",
    "/track-order",
    "/contact-us",
  ]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <>
      <header>
        <span>+91 8208783910</span>
        <span>
          <ShoppingCartIcon />
        </span>
      </header>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/Images/Logo.jpg"}
          alt="Lights Artsy logo"
        />
      </div>
      <div className="tabs">
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs value={currentTab} centered>
            <GetTabByPath value={currentTab} />
            <Tab
              label="Decorative Lights"
              value="/decorative-lights"
              to="/decorative-lights"
              component={Link}
            />
            <Tab
              label="String Lights"
              value="/string-light"
              to="/string-light"
              component={Link}
            />
            <Tab
              label="Table Lamps"
              value="/table-lamps"
              to="/table-lamps"
              component={Link}
            />
            <Tab
              label="Track Order"
              value="/track-order"
              to="track-order"
              component={Link}
            />
            <Tab
              label="Contact Us"
              value="/contact-us"
              to="/contact-us"
              component={Link}
            />
          </Tabs>
        </Box>
      </div>
      <div className="search-field">
        <input type="text" placeholder="Search"></input>
        <SearchIcon className="search-icon" />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/the-light-artsy" element={<Home />} />
        <Route path="/decorative-lights" element={<DecorativeLights />} />
        <Route path="/string-light" element={<StringLight />} />
        <Route path="/table-lamps" element={<TableLamps />} />
        <Route path="/track-order" element={<TractOrder />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}
function GetTabByPath({ currentTab }) {
  switch (currentTab) {
    case "/":
      return <Tab label="Home" value="/" to="/" component={Link} />;
    case "/home":
      return <Tab label="Home" value="/home" to="/home" component={Link} />;
    case "/the-light-artsy":
      return (
        <Tab
          label="Home"
          value="/the-light-artsy"
          to="/the-light-artsy"
          component={Link}
        />
      );
    default:
      return <Tab label="Home" value="/home" to="/home" component={Link} />;
  }
}
