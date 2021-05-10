import ComicsCard from "../../components/ComicsCard"
import { SearchBar } from "../../components/SearchBar/Index"
import "./styles.scss"

export function Comics(){
  return (
    <div className="comics-container">
      <div className="search">
        <SearchBar/>
      </div>
      <div className="comics">
        <ComicsCard/>
      </div>
    </div>
  )
  
   
}
