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
          <span className="infor-card">PUBLICADO</span>
          <span className="infor-data"> July 11, 2018</span>
        </div>
        <div className="price-card">
          <span className="price-infor">PREÇO</span>
          <span className="price">$5.89</span>
        </div>
       
      </div>
    </div>
  )
}

export default ComicsCard