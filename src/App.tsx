import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react'
import "./styles/App.scss"

import Sidebar from "./components/Sidebar";

import { Comics } from "./pages/Comics"
import Map from "./pages/Map"
import Welcome from "./pages/Welcome"

import marca from "./assets/marca.svg"
import React from "react";
import Api from "./components/Api";


const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Welcome />,
  },
  {
    path: "/comics",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <Comics />
  },
  {
    path: "/map",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <Map />
  }
];

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div className="app-container">
          <Sidebar />
        </div>

        <div style={{ flex: 1,margin: 50}}>
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
