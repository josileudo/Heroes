import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Welcome from '../pages/Welcome/Index'
import Comics from '../pages/Comics/Index'
import Map from "../pages/Map";

const Routes: React.FC= () => {
  
  const routes = [
    {
      path:"/",
      exact: true,
      main:() => <Welcome/>,
      container: "Welcome"
    },
    {
      path:"/comics",
      container: "Comics", 
      sidebar: ()=> <h1>comics</h1>,
      main: () => <Comics/>
    },
    {
      path:"/map",
      container:  "Map",
      sidebar:() => <h1>map</h1>,
      main: () => <Map/>
    }
  ]    
  return (
    <Router >
      <div>
        <Switch >
          {routes.map((route, index) => {
            <Route
              key = {index}
              path = {route.path}
              exact = {route.exact}
            />
        })}
        </Switch>
      </div>

      <div>
        <Switch>
          {routes.map((route, index) => {
            <Route
              key={index}
              path = {route.path}
              exact = {route.exact}
              children = {<route.main/>}
            />
          })}
        </Switch>
      </div>
    </Router>
   
    
  )
} 
  
export default Routes
  