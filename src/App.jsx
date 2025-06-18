import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import amaia from "./assets/amaia.jpg";
import "./App.css";

const propDetails = [
  {
    index: 1,
    name: "Amaia Laguna",
    model: "Amaia Lands",
    location: "Laguna",
    area: "50sqm",
    price: "2.2 M",
    availability: "Ready for Occupancy",
  },

  {
    index: 2,
    name: "Amaia Laguna",
    model: "Amaia Lands",
    location: "Laguna",
    area: "50sqm",
    price: "2.2 M",
    availability: "Ready for Occupancy",
  },

  {
    index: 3,
    name: "Amaia Laguna",
    model: "Amaia Lands",
    location: "Laguna",
    area: "50sqm",
    price: "2.2 M",
    availability: "Ready for Occupancy",
  },
];

function App() {
  return (
    <>
      <HeaderSec />
      <PropCard />
    </>
  );
}

const HeaderSec = () => {
  return (
    <>
      <header id="amaia-houses">
        <div className="crop-bottom">
          <div className="image-filter-wrapper">
            <img id="amaia-bg" src={amaia} alt="amaia" />
            <div className="white-overlay"></div>
          </div>

          <div className="image-text">
            <h1 className="header1-text">Amaia Scapes Laguna</h1>
            <h2 className="header2-text">PROPERTY LIST</h2>
          </div>
        </div>
      </header>
    </>
  );
};

const PropCard = () => {
  return (
    <>
      {propDetails.map((prop, index) => (
        <div className="property-card" key={index}>
          <div className="prop-details">
            <table>
              <thead>
                <tr className="row1">
                  <th>Property</th>
                  <th>Model</th>
                  <th>Location</th>
                  <th>Area</th>
                  <th>Price</th>
                  <th>Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="row2">
                  <td>{prop.name}</td>
                  <td>{prop.model}</td>
                  <td>{prop.location}</td>
                  <td>{prop.area}</td>
                  <td>{prop.price}</td>
                  <td className="avail-text">{prop.availability}</td>
                </tr>
              </tbody>
            </table>

            <div className="prop-button">
              <a>
                <i className="fa-solid fa-map-location-dot"></i>
                <span className="map-text">View Property Map</span>
              </a>

              <button className="view-button">View Property Details</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default App;
