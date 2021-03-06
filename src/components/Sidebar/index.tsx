import {Link} from "react-router-dom" 
import {ButtonSidebar} from "../ButtonSidebar"

import marca from "../../assets/marca.svg"
import "./styles.scss" 

interface TypesButton {
  title: string;
  name: 'map' | 'home'
  selected: boolean;
}

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="img-container">
        <img src={marca} alt="marca" />
      </div>
      <div className="">
        <Link to = "/comics"> <ButtonSidebar title = "home" iconName = "home"> </ButtonSidebar></Link>
        <Link to = "/map"> <ButtonSidebar title = "map" iconName = "map"></ButtonSidebar></Link>        
      </div>
    </div>
  )
} 

export default Sidebar