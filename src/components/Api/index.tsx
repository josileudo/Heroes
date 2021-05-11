import {useState, useEffect} from 'react'

import md5 from 'md5'

const baseUrl = "http://gateway.marvel.com/v1/public/comics"
const publicKey = "41da2da4458b01b269aad1c479fd5a74"
const privateKey = "bc7cbb89a3ae4803c8cc3f065059939145d1ef04"

const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

interface Comics {
  title: string;
  thumbnail: string;
  dates: string;
  prices: string;
}

const Api: React.FC = () => {
  const [comics, setComics] = useState<Comics[]>([])

  useEffect(() => {
    fetch(`http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
      .then(response => response.json())
      .then(data => setComics(data))
  })

  console.log(comics)

  return (
     <p></p>  
  )
}

export default Api