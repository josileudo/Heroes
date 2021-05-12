import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { useState, useEffect } from 'react'
import "./styles/App.scss"

import Sidebar from "./components/Sidebar";

import { Comics } from "./pages/Comics"
import Map from "./pages/Map"
import Welcome from "./pages/Welcome"


const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Welcome />,
  },
  {
    path: "/comics",
    main: () => <Comics />
  },
  {
    path: "/map",
    main: () => <Map />
  }
];

export default function App() {
  return (
    
    <Router>
      <div >
        
        <div className="app-container">
          <Sidebar />              
        </div> 
        <div style={{ flex: 1 }}>

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
