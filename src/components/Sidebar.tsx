 
import "../styles/sidebar.scss" 
import marca from "../assets/marca.svg"

import {ButtonSidebar} from "../components/ButtonSidebar"

export function Sidebar(){
  return (
    <nav className="sidebar">
      <img src={marca} alt="logo"/>

      <div className="buttons-container">
        <ButtonSidebar
          title = "casinha"
        />
        <ButtonSidebar
          title = "mapa"
        />
      </div>
  </nav>
  )
}