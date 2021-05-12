import "./styles.scss"
import { useState, useEffect } from 'react'

export function SearchBar({searchComics}){

  const [search, setSearch] = useState('')
  useEffect(() => {
    searchComics(search)
  },[search])
  
  const debounce = (func, wait, immediate) => {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const callback = event => debounce(setSearch(event.target.value), 500, false);

  return (
    <div className="search-container">
      <input 
        onChange={callback}
        value={search}
        className="search"
        type="text" 
        placeholder= "Procure sua comic"/>
    </div>
  )
}
