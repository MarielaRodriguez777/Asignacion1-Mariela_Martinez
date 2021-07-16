import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import image from '../../img/slider.jpg'

const images = [
  { url: image },
  { url: image },
  { url: image },
  { url: image },
  { url: image },
  { url: image },
  { url: image },
];


export const Banner = () => {
  return (
    <div>
      <SimpleImageSlider
        position='absolute'
        width= '100%'
        height='100%'
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

