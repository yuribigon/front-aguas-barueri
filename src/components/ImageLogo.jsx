import React from 'react';

const ImageLogo = ({ src, alt }) => {

  return (
    <div className="logo">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageLogo;