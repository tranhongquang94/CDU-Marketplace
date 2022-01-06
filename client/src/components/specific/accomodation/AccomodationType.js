import React from 'react'

function AccomodationType() {
  return (
    <section className="accomodation-type-section-container">
      <h2 className="section-title">Most popular type of accomodation</h2>

      <div className="accomodation-card-container">
        <div className="accomodation-card-wrapper">
          <img
            src="https://res.cloudinary.com/dixd5lojp/image/upload/c_scale,h_320,w_335/v1639538790/CDU%20Markeyplace-%20EMG609/Type%20of%20accomodation/townhouse_ioenol.webp"
            alt="townhouse"
          />
          <div className="image-overlay">
            <span className="accomodation-card-name">Townhouse</span>
          </div>
        </div>

        <div className="accomodation-card-wrapper">
          <img
            src="https://res.cloudinary.com/dixd5lojp/image/upload/v1639538789/CDU%20Markeyplace-%20EMG609/Type%20of%20accomodation/villa_y09rmj.webp"
            alt="villa"
          />
          <div className="image-overlay">
            <span className="accomodation-card-name">Villa</span>
          </div>
        </div>

        <div className="accomodation-card-wrapper">
          <img
            src="https://res.cloudinary.com/dixd5lojp/image/upload/v1639538789/CDU%20Markeyplace-%20EMG609/Type%20of%20accomodation/apartment_zmstca.webp"
            alt="apartment"
          />
          <div className="image-overlay">
            <span className="accomodation-card-name">Apartment</span>
          </div>
        </div>

        <div className="accomodation-card-wrapper">
          <img
            src="https://res.cloudinary.com/dixd5lojp/image/upload/v1639538789/CDU%20Markeyplace-%20EMG609/Type%20of%20accomodation/flat_sf1iob.webp"
            alt="flat"
          />
          <div className="image-overlay">
            <span className="accomodation-card-name">Flat</span>
          </div>
        </div>

        <div className="accomodation-card-wrapper">
          <img
            src="https://res.cloudinary.com/dixd5lojp/image/upload/v1639538789/CDU%20Markeyplace-%20EMG609/Type%20of%20accomodation/studio_o5wlg0.webp"
            alt="studio"
          />
          <div className="image-overlay">
            <span className="accomodation-card-name">Studio</span>
          </div>
        </div>

        <div className="accomodation-card-wrapper">
          <img
            src="https://res.cloudinary.com/dixd5lojp/image/upload/v1639538789/CDU%20Markeyplace-%20EMG609/Type%20of%20accomodation/bungalow_pdzv4t.webp"
            alt="Bungalow"
          />
          <div className="image-overlay">
            <span className="accomodation-card-name">Bungalow</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccomodationType
