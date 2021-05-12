import { useEffect, useState, useRef } from 'react'
import { SearchBar } from "../../components/SearchBar/Index"
import {Link} from "react-router-dom"

import md5 from 'md5'
import ComicsCard from "../../components/ComicsCard"
import Modal from 'react-modal'

const publicKey = "41da2da4458b01b269aad1c479fd5a74"
const privateKey = "bc7cbb89a3ae4803c8cc3f065059939145d1ef04"

import "./styles.scss"

const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

interface ComicsInterface {
  id: number
  title: string;
  image: string;
  date: string;
  price: string;
}
export function Comics() {
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  var subtitle;

  const [comics, setComics] = useState<ComicsInterface[]>([])
  const [comic, setComic] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [dropdown, setDropdown] = useState("");
  const [modalIsOpen,setIsOpen] = useState(false);

  const modalRef = useRef(null);
  useEffect(() => {
    fetch(`http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
      .then(response => response.json())
      .then(snapshot => {
        const data = snapshot.data.results
        const resp = data.map(item => {
          return {
            id: item.id,
            description: item.description,
            title: item.title,
            image: `${item.thumbnail.path ?? "default"}/portrait_uncanny.${item.thumbnail.extension}`,
            date: item.dates[0]?.date,
            price: item.prices[0]?.price
          }
        })
        setComics(resp);
      })
  }, [])
  function fetchComics(search){
    if(search === '')
      fetch(`http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
        .then(response => response.json())
        .then(snapshot => {
          const data = snapshot.data.results
          const resp = data.map(item => {
            return {
              id: item.id,
              description: item.description,
              title: item.title,
              image: `${item.thumbnail.path ?? "default"}/portrait_uncanny.${item.thumbnail.extension}`,
              date: item.dates[0]?.date,
              price: item.prices[0]?.price
            }
          })
          setComics(resp);
        })
      else
        fetch(`http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}&title=${search}`)
        .then(response => response.json())
        .then(snapshot => {
          const data = snapshot.data.results
          const resp = data.map(item => {
            return {
              id: item.id,
              description: item.description,
              title: item.title,
              image: `${item.thumbnail.path ?? "default"}/portrait_uncanny.${item.thumbnail.extension}`,
              date: item.dates[0]?.date,
              price: item.prices[0]?.price
            }
          })
          setComics(resp);
        })
  }
  function openModal(comicPayload) {
    setIsOpen(true);
    setComic(comicPayload)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }
  return (
    <div className="comics-container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-container" ref={modalRef}>
          <div className="modal-img">
            <img className="modal-img-content" src={comic.image} alt={comic.title}/>
          </div>
          <div className="modal-content">
            <h1>{comic.title}</h1>
            <p>{comic.description ?? "sem descrição"}</p>
            <div className="comics-info">
              <div className="date-infor">
                <p className="infor-card">PUBLICADO</p>
                <p className="infor-data">{new Date(comic.date).toLocaleDateString()}</p>
              </div>
              <div className="price-card">
                <p className="infor-card">PREÇO</p>
                <p className="price">${comic.price}</p>
              </div>
            </div>
            <Link to="/map">
              <button onClick={() => {
                localStorage.setItem('comic',JSON.stringify(comic))
              }}>Enviar</button>
            </Link>
          </div>
        </div>
      </Modal>
      <div className="search">
        <SearchBar searchComics={text => {
          fetchComics(text);
        }} />
      </div>

      <div className="comics">
        {comics.map(comic => {
          return (
            <div onClick={() => openModal(comic)}>
              <ComicsCard key={comic.id} comic={comic} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
