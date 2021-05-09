import {Link} from "react-router-dom" 

import "../styles/sidebar.scss" 

import ButtonSidebar from "../components/ButtonSidebar"

const Sidebar: React.FC = () => {
  return (
    <div>
     <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/comics">comics</Link>
        </li>
        <li>
          <Link to="/map">map</Link>
        </li>
      </ul>
    </div>
  )
} 

export default Sidebar