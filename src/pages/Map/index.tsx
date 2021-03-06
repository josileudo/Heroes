import "./styles.scss"
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

export default function Map() {
  
  function LocationMarker() {

    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
    const comic = localStorage.getItem("comic")
    const comics = JSON.parse(comic)
  
    return position === null ? null : (
      <Marker 
        draggable="true" 
        position={position}
       >
        <Popup>
          <h3>{comics.title}</h3>
          <img src={comics.image} alt={comics.title} />
         
        </Popup>
      </Marker>
    )
  }
  

    return (
      <div className="pageMap">
        <MapContainer  onClick={() => {
        }} style={{ width: "100%", height: "100vh" }} center={[51.505, -0.09]} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker/>
          
        </MapContainer>
      </div>
    );
  }

