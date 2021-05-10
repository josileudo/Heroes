import "./styles.scss"

export function SearchBar(){
  return (
    <div className="search-container">
      <input 
        className="search"
        type="text" 
        placeholder= "Procure sua comic"/>
    </div>
  )
}
