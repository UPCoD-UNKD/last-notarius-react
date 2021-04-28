import React,{useState} from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"
import * as dataBase from "./datanot.json"
import "./index.css"


let mainCoords = {};

function success(pos) {
  var crd = pos.coords;

  mainCoords.lat = crd.latitude;
  mainCoords.lng = crd.longitude;

};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error);


var n = 0;

function increment(){

  n++;
  return n;
}

function GMap(){
  
  

  const [selectedNotarius, setSelectedNotarius] = useState(null);

  return (
<>
    

    <GoogleMap 
    defaultZoom={10} 
    defaultCenter={mainCoords}>
      
      {dataBase.Notar.map((notarius) => (
        <Marker key={increment()}
        position={{ lat: (+notarius.Latitude), lng: (+notarius.Longitude)}}
        onClick={() => {
          setSelectedNotarius(notarius);
        }}
        />
      ))}

        {selectedNotarius && (
          <InfoWindow 
          position={{ lat: (+selectedNotarius.Latitude), lng: (+selectedNotarius.Longitude)}}
          onCloseClick={() => {
            setSelectedNotarius(null)
          }}
          > 
            <div>
              <h3>{selectedNotarius.NAME_OBJ}</h3>
              <p>{selectedNotarius.FIO}</p>
              </div>
          </InfoWindow>
        )}
      </GoogleMap>
      </>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(GMap))

export default function Map() { 

  return (

    <div style={{width: "100vw", height: "100wh"}}>
      
      <WrappedMap
      googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&
      libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
      loadingElement = {<div style={{width: "400px", height: `100%` }}/>}
      containerElement= {<div style={{ width: "400px", height: `400px` }} />}
      mapElement= {<div style={{ width: "400px", height: `100%` }} />}
      >

      </WrappedMap> 
    </div>
  )
}
