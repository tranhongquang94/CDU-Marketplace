import React from 'react'
import { Link } from "react-router-dom";

function VehicleTypes({vehicleTypes}) {
  return (
    <section className="vehicle-types">
      <h2 className="title">Browse by Vehicle Types: </h2>
      <ul className="vehicle-type-list-container">
        {
          vehicleTypes.map((type,idx) => {
            const {logo, name} = type;
            return (
              <li key={idx} className="single-vehicle-type">
                <Link to="#">
                  <div className="logo-container">
                    <img src={logo} alt={`${name} logo`} />
                  </div>
                  <span>{name}</span>
                </Link>
              </li>
            );
          })
        }
      </ul>
    </section>
  )
}

export default VehicleTypes
