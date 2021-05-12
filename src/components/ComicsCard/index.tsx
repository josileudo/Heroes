import {useState} from "react"


import spider from "../../assets/spider-man.png"
import Api from "../Api"
import "./styles.scss"

interface ComicsItens {
  comic: {
    id: number
    title: string;
    image: string;
    date: string;
    price: string;
    description: string;
  }
}

const ComicsCard: React.FC<ComicsItens> = ({...props}) => {
  
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState ()

  const handleModal = () => {
    console.log()
    setShowModal(prev => !prev)
  }

  return (
    <>
      <div  className="comics-card" onClick={handleModal}>
        <div className="title-text">
          <span>{props.comic.title}</span>
        </div>
        <img src = {props.comic.image ?? {spider}} alt = {props.comic.title}/> 
        <div className="comics-info">
          <div className="date-infor">
            <p className="infor-card">PUBLICADO</p>
            <p className="infor-data"> {new Date(props.comic.date).toLocaleDateString()}</p>
          </div>
          <div className="price-card">
            <p className="price-infor">PREÇO</p>
            <p className="price">$ {props.comic.price}</p>
          </div>
        </div>
      </div>
    </>  
  )
}

export default ComicsCard