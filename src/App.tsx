import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
  
import "./styles/App.scss"

import Sidebar from "./components/Sidebar";

import {Comics} from "./pages/Comics"
import Map from "./pages/Map"
import Welcome from "./pages/Welcome"

import marca from "./assets/marca.svg"
import React from "react";


const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>,
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

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div className = "app-container"
         
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
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}s
          </Switch>
        </div>
      </div>
    </Router>
  );
}
