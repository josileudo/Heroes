import {Icons}  from "../Icons"

import {ButtonHTMLAttributes} from "react"
 
import map from "../../assets/map.svg"
import home from "../../assets/home.svg"

import "./styles.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
  iconName: 'home' | 'map'  
  selected?: boolean
}

export function ButtonSidebar ({title, iconName, selected, ...rest}: ButtonProps){
  return (
    <button 
      className= "button-container"
      type= "button" {...(selected && {className: 'selected'})} {...rest}
      >
        <Icons name = {iconName} color = {"white"}/>
    </button>
  )
}

export default ButtonSidebar;