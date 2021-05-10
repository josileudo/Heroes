import {Switch, Route} from "react-router-dom"

import Welcome from '../pages/Welcome'
import Comics from '../pages/Comics'
import Map from "../pages/Map";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component = {Welcome}/>
    <Route path="/comics" component = {Comics}/>
    <Route path="/map" component = {Map}/>
  </Switch> 
)

export default Routes
