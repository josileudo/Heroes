import "./styles.scss"

import spider from "../../assets/spider.png"
import logo from "../../assets/logotipo.svg" 

import {Button} from "../../components/Button"
import {Link} from "react-router-dom"

const Welcome: React.FC= () => {

  function handleClickButton (){
    return 
    
  }
  return (
    <div className="page-container">
      <header className="header-container">
        <img src={logo} alt="logo"/>
      </header>

      <section className="wrapper">
        <div className="left-container">
          <h1>
            Chame um Herói
            para ir até a sua 
            casa
          </h1>
          <p>
            Vários heróis para você sentir 
            conforto e segurança
          </p>
          <div className = "button">
            <Link to = "/comics">
              <Button
                title = "Vamos lá"
                onClick = {handleClickButton}
              />
            </Link>
            
          </div>
        </div>
    
        <div className = "right-container">
          <img src={spider} alt = "spider"/>
        </div>
      </section>
    </div>
  )
}
export default Welcome