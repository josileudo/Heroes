import spider from "../../assets/spider-man.png"
import "./styles.scss"

const ComicsCard: React.FC = () => {
  return (
    <div className="comics-card">
      <div className="title-text">
        <span>Spider-man</span>
      </div>
      <img src = {spider} alt = "spider"/> 
      
    
      <div className="comics-info">
        <div className="date-infor">
          <p className="infor-card">PUBLICADO</p>
          <p className="infor-data"> July 11, 2018</p>
        </div>
        <div className="price-card">
          <p className="price-infor">PREÇO</p>
          <p className="price">$5.89</p>
        </div>
       
      </div>
    </div>
  )
}

export default ComicsCard