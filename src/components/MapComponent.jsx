// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import axios from 'axios'; // For reverse geocoding
// //import 'bootstrap/dist/css/bootstrap.min.css';

// function MapComponent() {
//   const [center, setCenter] = useState({ lat: 40.7128, lng: -74.0060 });
//   const [selectedLocation, setSelectedLocation] = useState(null); // Store a single location

//   useEffect(() => {
//     // Get user's live location on component mount
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         position => {
//           setCenter({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         error => console.log(error)
//       );
//     }
//   }, []);

//   const handleMapClick = async (event) => {
//     const lat = event.latLng.lat();
//     const lng = event.latLng.lng();

//     try {
//       // Reverse geocoding to get address
//       const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCEpTigqk-SP6yIZYMLt0STeMjZujzAO9U`);
//       const address = response.data.results[0]?.formatted_address || "Unknown Address";

//       // Update selected location
//       setSelectedLocation({ lat, lng, address });
//     } catch (error) {
//       console.error("Error fetching address:", error);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <LoadScript googleMapsApiKey="AIzaSyCEpTigqk-SP6yIZYMLt0STeMjZujzAO9U">
//         <GoogleMap
//           mapContainerStyle={{ height: '800px', width: '100%' }}
//           center={center}
//           zoom={10}
          
//           onClick={handleMapClick}
//         >
//           <Marker position={center} />
//           {selectedLocation && (
//             <Marker position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }} />
//           )}
//         </GoogleMap>
//       </LoadScript>

//       {/* Location Table */}
//       {selectedLocation && (
//         <table className="table mt-4">
//           <thead>
//             <tr>
//               <th>Latitude</th>
//               <th>Longitude</th>
//               <th>Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{selectedLocation.lat}</td>
//               <td>{selectedLocation.lng}</td>
//               <td>{selectedLocation.address}</td>
//             </tr>
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default MapComponent;




import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios'; // For reverse geocoding

function MapComponent() {
  const [center, setCenter] = useState({ lat: 40.7128, lng: -74.0060 });
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    // Get user's live location on component mount
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        error => console.log(error)
      );
    }
  }, []);

  const handleMapClick = async (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    try {
      // Reverse geocoding to get address
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCEpTigqk-SP6yIZYMLt0STeMjZujzAO9U`);
      const address = response.data.results[0]?.formatted_address || "Unknown Address";

      // Update selected location
      setSelectedLocation({ lat, lng, address });
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  return (
    <div className="container mt-5">
      <LoadScript googleMapsApiKey="AIzaSyCEpTigqk-SP6yIZYMLt0STeMjZujzAO9U">
        <GoogleMap
          mapContainerStyle={{ height: '800px', width: '100%' }}
          center={center}
          zoom={10}
          onClick={handleMapClick}
        >
          <Marker position={center} />
          {selectedLocation && (
            <Marker position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapComponent;
