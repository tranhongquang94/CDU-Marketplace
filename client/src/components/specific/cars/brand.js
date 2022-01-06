import React from "react";
import { Link } from "react-router-dom";

function Brand({ brand }) {
  return (
    <section className="brand">
      <h2 className="title">Popular Brand on our website: </h2>
      <ul className="brand-logo-container">
        {brand.map((brand, idx) => {
          const { logo, name } = brand;
          return (
            <li key={idx} className="single-brand">
              <Link to="#">
                <div className="logo-container">
                  <img src={logo} alt={`${name} logo`} />
                </div>
                <span>{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Brand;
