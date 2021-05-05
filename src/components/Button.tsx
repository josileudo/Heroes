import {ButtonHTMLAttributes} from "react"

import "../styles/button.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title: string;
}

export function Button ({title} : ButtonProps){
  return (
    <button type= "button">
      {title}
    </button>
  )
}