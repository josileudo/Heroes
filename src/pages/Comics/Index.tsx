import ComicsCard from "../../components/ComicsCard"
import { useEffect, useState } from 'react'
import { SearchBar } from "../../components/SearchBar/Index"
import md5 from 'md5'
import "./styles.scss"
const publicKey = "41da2da4458b01b269aad1c479fd5a74"
const privateKey = "bc7cbb89a3ae4803c8cc3f065059939145d1ef04"

const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

interface Comics {
  id: number
  title: string;
  image: string;
  date: string;
  price: string;
}

export function Comics(){
  const [comics, setComics] = useState<Comics[]>([])
  useEffect(() => {
    fetch(`http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
      .then(response => response.json())
      .then(snapshot => {
        const data = snapshot.data.results
        const resp = data.map(item => {
          return {
              id: item.id, 
              title: item.title, 
              image: item.thumbnail, 
              date: item.dates[0]?.date, 
              price:item.prices[0]?.price
          }
        })
      setComics(resp)
      })
  }, [])
  return (
    <div className="comics-container">
      <div className="search">
        <SearchBar/>
      </div>
      <div className="comics">
        {comics.map(comic => {
          return <ComicsCard key={comic.id} comic ={comic}/>
        })}
      </div>
    </div>
  )     
}
