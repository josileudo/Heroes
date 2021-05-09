import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Comics from "./pages/Comics/Index"
import Welcome from "./pages/Welcome/Index"
import Map from "./pages/Map"
import Sidebar from "./components/Sidebar";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Welcome/>
  },
  {
    path: "/comics",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <Comics/>
  },
  {
    path: "/map",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <Map/>
  }
];

export default function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "10rem",
            background: "#f0f0f0"
          }}
        >
          <Sidebar/>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
