import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Mapa = ({latitude, longitude}) => {
    const position = [latitude, longitude]


  return (
    <MapContainer center={position} zoom={25} scrollWheelZoom={false} style={{height: "300px", width: "600px"}}>
        
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
  );
};

export default Mapa
