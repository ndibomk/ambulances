
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import React, { useEffect, useState } from "react";
import { Room, Star, StarBorder } from "@material-ui/icons";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import { format } from "timeago.js";
import * as turf from '@turf/turf';
const url='http://localhost:5000/pins'

function Book() {
  const notify = () => toast("Booke sucessfully!");
  const GEOFENCE = turf.circle([1.3107, 36.8250], 5, {units: 'miles'})
  const myStorage = window.localStorage;
  const [currentUsername, setCurrentUsername] = useState(myStorage.getItem("profile"));
  const [pins, setPins] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [title, setTitle] = useState(null);
  const [name, setName] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(0);
  const [distance, setDistance] = useState(null);
  const [stars, setStars] = useState([]);
function successLocation (position) {
setStars([position.coords.longitude,position.coords.latitude])
// console.log( 'starts ',stars[0]);
console.log('stars', stars);

}
let errorLocation= (position)=>{

}



  const location =navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation,{enableHighAccuracy:true})

  const [viewport, setViewport] = useState({
    latitude: 1.3107,
    longitude: 36.8250,
    zoom: 6,
    
  });
  const onMove = React.useCallback(({viewState}) => {
    const newCenter = [viewState.longitude, viewState.latitude];
    // Only update the view state if the center is inside the geofence
    if (turf.booleanPointInPolygon(newCenter, GEOFENCE)) {
      setViewport(newCenter);
    }
  }, [])

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
    // console.log('newplace', newPlace.lat);
  };
console.log( 'hello' ,currentPlaceId+newPlace)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: currentUsername,
      title,
      desc,
      name,
      rating: star,
      lat: newPlace.lat,
      long: newPlace.long,
      distance
      
    };

    try {
      const res = await axios.post(url, newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getPins = async () => {
      try {
        const allPins = await axios.get(url);
        setPins(allPins.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  const handleLogout = () => {
    setCurrentUsername(null);
    myStorage.removeItem("profile");
  };

  return (
    <div style={{ height: "80vh", width: "80%" }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken='pk.eyJ1IjoicGV0ZXJnZyIsImEiOiJjbDV1c3FpZ28wMmgzM3B0NDVtNXhjeWE5In0.ROzz0vJxUI7naXsMx6f6nw'
        width="100%"
        height="100%"
        transitionDuration="200"
        onMove={onMove}
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
        onViewportChange={(viewport) => setViewport(viewport)}
        onDblClick={currentUsername && handleAddClick}
      >
                  <h3 style={{color:"black",textAlign:'center'}} >Book the ambulance close to your location</h3>

        {pins.map((p) => (
          <>
             <Marker

              latitude={1}
              longitude={36}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <h5>ambu1</h5>
              <Room
                style={{
                  fontSize: 7 * viewport.zoom,
                  color:
                    currentUsername === p.username ? "green" : "blown",
                  cursor: "pointer",
                }}
                onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
              />
            </Marker> 
           
            <Marker

              latitude={1}
              longitude={38}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <h5 style={{marginLeft:'7rem'}}>ambu2</h5>
              <Room
                style={{
                  fontSize: 7 * viewport.zoom,
                  marginLeft:'7rem',
                  color:
                    currentUsername === p.username ? "red" : "red",
                  cursor: "pointer",
                }}
                // onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
              />
            </Marker>
            <Marker

              latitude={0.5}
              longitude={35}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <h5 style={{marginLeft:'4rem',marginTop:'6.5rem'}}>ambu3</h5>
              <Room
                style={{
                  fontSize: 7 * viewport.zoom,
                  marginLeft:'7rem',
                  // marginTop:'4rem',
                  color:
                    currentUsername === p.username ? "green" : "green",
                  cursor: "pointer",
                }}
                // onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
              />
            </Marker>
            <Marker

latitude={0.95}
longitude={36}
offsetLeft={-3.5 * viewport.zoom}
offsetTop={-7 * viewport.zoom}
>
<h5 style={{marginLeft:'4rem',marginTop:'6rem'}}>ambu4</h5>
<Room
  style={{
    fontSize: 7 * viewport.zoom,
    marginLeft:'7rem',
    // marginTop:'4rem',
    color:
      currentUsername === p.username ? "darkcyan" : "darkcyan",
    cursor: "pointer",
  }}
  // onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
/>
</Marker>
<Marker

latitude={1.6}
longitude={36.9}
offsetLeft={-3.5 * viewport.zoom}
offsetTop={-7 * viewport.zoom}
>
<h5 style={{marginLeft:'4rem',marginTop:'6rem'}}>ambu5</h5>
<Room
  style={{
    fontSize: 7 * viewport.zoom,
    marginLeft:'7rem',
    // marginTop:'4rem',
    color:
      currentUsername === p.username ? "blue" : "blue",
    cursor: "pointer",
  }}
  // onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
/>
</Marker>
<Marker

latitude={-0.2}
longitude={35.8}
offsetLeft={-3.5 * viewport.zoom}
offsetTop={-7 * viewport.zoom}
>
<h5 style={{marginLeft:'4rem',marginTop:'6rem'}}>ambu6</h5>
<Room
  style={{
    fontSize: 7 * viewport.zoom,
    marginLeft:'7rem',
    // marginTop:'4rem',
    color:
      currentUsername === p.username ? "yellow" : "yellow",
    cursor: "pointer",
  }}
  // onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
/>
</Marker>
            
            {/* {p._id === currentPlaceId && (
              <Popup
                key={p._id}
                latitude={p.lat}
                longitude={p.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlaceId(null)}
                anchor="left"
              >
                <div className="card">
                  <label>Place</label>
                  <h4 className="place">{p.title}</h4>
                  <label>Review</label>
                  <p className="desc">{p.desc}</p>
                  <label>Rating</label>
                  <div className="stars">
                    {Array(p.rating).fill(<Star className="star" />)}
                  </div>
                  <label>Information</label>
                  <span className="username">
                    Created by <b>{p.user?.result?.name}</b>
                  </span>
                  <span className="date">{format(p.createdAt)}</span>
                </div>
              </Popup>
            )} */}
          </>
          
        ))}
        {newPlace && (
          <>
            <Marker
              latitude={newPlace.lat}
              longitude={newPlace.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <Room
                style={{
                  fontSize: 7 * viewport.zoom,
                  color: "tomato",
                  cursor: "pointer",
                }}
              />
            </Marker>
            <Popup
              latitude={newPlace.lat}
              longitude={newPlace.long}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setNewPlace(null)}
              anchor="left"
            >
              <div>
                <form className="formss" onSubmit={handleSubmit}>
                <label>Name</label>
                  <input
                    placeholder="Your Name"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label>Location {successLocation}</label>
                  <input
                    placeholder="Enter a Place"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>Ambulance Booked</label>
                  <input
                    placeholder="Ambulance"
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  
                  <label>Codition out of 5</label>
                  <select onChange={(e) => setStar(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <label htmlFor="">Distnace</label>
                  <select onChange={(e) => setDistance(e.target.value)}>
                    <option value="1">ambulance 1 :{Math.sqrt(Math.abs((1-newPlace.lat)^2-(36-newPlace.long)^2))} miles</option>
                    <option value="2">ambulance 2 :{Math.sqrt(Math.abs((1-newPlace.lat)^2-(38-newPlace.long)^2))}miles</option>
                    <option value="3">ambulance 3 :{Math.sqrt(Math.abs((0.5-newPlace.lat)^2-(35-newPlace.long)^2))}miles</option>
                    <option value="4">ambulance 4 :{Math.sqrt(Math.abs((0.95-newPlace.lat)^2-(36-newPlace.long)^2))}miles</option>
                    <option value="5">ambulance 5 :{Math.sqrt(Math.abs((1.6-newPlace.lat)^2-(36.9-newPlace.long)^2))}miles</option>
                    <option value="5">ambulance 6 :{Math.sqrt(Math.abs((-0.2-newPlace.lat)^2-(35.8-newPlace.long)^2))}miles</option>

                  </select>
                  <button onClick={notify} type="submit" className="submitButton">
                    Add Pin
                  </button>
                </form>
              </div>
            </Popup>
          </>
        )}
        
      </ReactMapGL>
    </div>
  );
}

export default Book;
