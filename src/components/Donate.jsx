// // Import necessary dependencies
// import React from 'react';
// import Base from './Base';  // Assuming base.jsx is located in the same folder
// import MapComponent from './MapComponent';  // Import the map component
// import "../CSS/Donate.css"

// const Donate = () => {
//   return (
//     <Base>
//       {/* Main container for the food sharing UI */}
//       <div className="share-food-container" style={{ display: 'flex', flexDirection: 'column' }}>
//         {/* Top section - Form for Individual/Bulk food sharing */}
//         <div className="food-sharing-form" style={{ padding: '20px' }}>
//           <h2>Want to share food?</h2>
//           <div>
//             <button className="btn-individual" style={buttonStyle}>Individual</button>
//             <button className="btn-bulk" style={buttonStyle}>Bulk</button>
//           </div>
//           <div className="location-search">
//             <input
//               type="text"
//               placeholder="Search Location"
//               style={{
//                 marginTop: '20px',
//                 padding: '10px',
//                 width: '100%',
//                 borderRadius: '5px',
//                 border: '1px solid #ccc',
//               }}
//             />
//           </div>
//         </div>

//         {/* Bottom section - Displaying the Map */}
//         <div className="food-map" style={{ padding: '20px' }}>
//           <MapComponent />
//         </div>
//       </div>
//     </Base>
//   );
// };

// const buttonStyle = {
//   margin: '10px',
//   padding: '10px 20px',
//   backgroundColor: '#f5c6c6',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
// };

// // Export the component
// export default Donate;


import React from 'react';
import Base from './Base';
import MapComponent from './MapComponent';
import "../CSS/Donate.css";

const Donate = () => {
  return (
    <Base>
      {/* Main container for the food sharing UI */}
      <div className="share-food-container">
        
        {/* Form section with buttons and location search */}
        <div className="food-sharing-form">
          <h2>Want to share food?</h2>
          <div>
            <button className="btn-individual">Individual</button>
            <button className="btn-bulk">Bulk</button>
          </div>
          <div className="location-search">
            <input
              type="text"
              placeholder="Search Location"
            />
          </div>
        </div>

        {/* Map section without extra padding */}
        <div className="map-container">
          <MapComponent />
        </div>
        
      </div>
    </Base>
  );
};

export default Donate;
