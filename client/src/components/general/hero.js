import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Hero({ page, cover }) {
  const [heroTitle, setHeroTitle] = useState("");
  const [heroDesc, setHeroDesc] = useState("");
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const capitalize = (str) => {
    let arr = str.split("");
    arr.forEach((char, idx) => {
      if (idx === 0) {
        char = char.toUpperCase();
        arr[idx] = char;
      }
    });
    return arr.join("");
  };

  const checkLogin = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      alert("Please log in first before posting any item.");
    }
  };

  useEffect(() => {
    setHeroTitle(`CDU ${capitalize(page)} Marketplace`);
    if (page === "homepage") {
      setHeroTitle("CDU Marketplace");
      setHeroDesc("Sell everything here");
    } else if (page === "jobs") {
      setHeroDesc("Find your dream job.");
    } else if (page === "accomodation") {
      setHeroDesc("Find your future places");
    } else {
      setHeroDesc(`Sell your ${capitalize(page)} here`);
    }
  }, [page]);

  return (
    <div className="hero-container">
      <picture>
        <source
          media="(max-width: 500px)"
          srcSet={cover.max_width_500}
          type="image/webp"
        />
        <source
          media="(min-width: 501px) and (max-width: 768px)"
          srcSet={cover.max_width_768}
          type="image/webp"
        />
        <source
          media="(min-width: 768px) and (max-width: 1050px)"
          srcSet={cover.max_width_1050}
          type="image/webp"
        />
        <source
          media="(min-width: 1050px) and (max-width: 1450px)"
          srcSet={cover.max_width_1450}
          type="image/webp"
        />
        <img src={cover.fallback} alt="hero-cover" />
      </picture>

      <div className="hero-text">
        <h1 className="hero-title">{heroTitle}</h1>
        <p className="hero-desc">{heroDesc}</p>
      </div>

      <Link className="btn cta-btn" to="/newItem" onClick={checkLogin}>
        Post New {page !== "homepage" ? capitalize(page) : "Item"}
      </Link>
    </div>
  );
}

export default Hero;
