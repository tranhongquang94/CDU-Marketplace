import React from 'react'

function Thumbnail({thumb, altText}) {
  return (
    <div className="itemThumb-container">
      <img src={thumb} alt={altText} className="itemThumb"></img>
    </div>
  );
}

export default Thumbnail;
