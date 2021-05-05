import {
  Switch,
  Route,
} from "react-router-dom";

import Welcome from '../pages/Welcome/Index'
import Comics from '../pages/Comics/Index'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component = {Welcome} />
    <Route path="/comics" component = {Comics} />
  </Switch>
)

export default Routes
  