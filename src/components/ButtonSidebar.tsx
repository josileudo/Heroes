import {ButtonHTMLAttributes} from "react"

import "../styles/button.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
}

const ButtonSidebar: React.FC<ButtonProps> = ({title}) =>{
  return (
    <button type= "button" title = {title}>
    </button>
  )
}

export default ButtonSidebar;