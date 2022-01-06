import React from 'react'

function PopularDestination() {
  return (
    <section className="popular-destination-section-container">
      <h2 className="section-title">Popular Destination</h2>

      <div className="image-section-wrapper">
        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/dixd5lojp/image/upload/c_scale,w_500/v1639454702/CDU%20Markeyplace-%20EMG609/Popular%20Destination/pexels-felix-haumann-3626248_vidpfq.webp"
            alt="melbourne-destination"
          />
          <span className="image-title">Melbourne</span>
          <div className="image-overlay"></div>
        </div>

        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/dixd5lojp/image/upload/v1639454854/CDU%20Markeyplace-%20EMG609/Popular%20Destination/pexels-patrick-mclachlan-995764_sq3lth.webp"
            alt="sydney-destination"
          />
          <span className="image-title">Sydney</span>
          <div className="image-overlay"></div>
        </div>

        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/dixd5lojp/image/upload/v1639454959/CDU%20Markeyplace-%20EMG609/Popular%20Destination/pexels-valeriia-miller-2516657_mzavpo.webp"
            alt="brisbane-destination"
          />
          <span className="image-title">Brisbane</span>
          <div className="image-overlay"></div>
        </div>

        <div className="image-wrapper">
          <img
            src="https://res.cloudinary.com/dixd5lojp/image/upload/v1639455086/CDU%20Markeyplace-%20EMG609/Popular%20Destination/pexels-harry-cunningham-harrydigital-3507776_za1fkv.webp"
            alt="perth-destination"
          />
          <span className="image-title">Perth</span>
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
}

export default PopularDestination
