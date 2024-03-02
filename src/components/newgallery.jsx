import React from 'react'
import ImageGallery from "react-image-gallery";

const images = [
    {
        "original": "img/portfolio/01-large.jpg",
        "thumbnail": "img/portfolio/01-small.jpg"
      },
      {
        "original": "img/portfolio/02-large.jpg",
        "thumbnail": "img/portfolio/02-small.jpg"
      },
      {
        "original": "img/portfolio/03-large.jpg",
        "thumbnail": "img/portfolio/03-small.jpg"
      },
      {
        "original": "img/portfolio/04-large.jpg",
        "thumbnail": "img/portfolio/04-small.jpg"
      },
      {
        "original": "img/portfolio/05-large.jpg",
        "thumbnail": "img/portfolio/05-small.jpg"
      },
      {
        "original": "img/portfolio/06-large.jpg",
        "thumbnail": "img/portfolio/06-small.jpg"
      }
  ];

const NewGallery = () => {
  return (
    <ImageGallery items={images} />
  )
}

export default NewGallery