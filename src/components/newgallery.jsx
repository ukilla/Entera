import React from 'react'
import ImageGallery from "react-image-gallery";

const images = [
    {
        "original": "img/portfolio/1-large.jpg",
        "thumbnail": "img/portfolio/1-small.jpg"
      },
      {
        "original": "img/portfolio/2-large.jpg",
        "thumbnail": "img/portfolio/2-small.jpg"
      },
      {
        "original": "img/portfolio/3-large.jpg",
        "thumbnail": "img/portfolio/3-small.jpg"
      },
      {
        "original": "img/portfolio/4-large.jpg",
        "thumbnail": "img/portfolio/4-small.jpg"
      },
      {
        "original": "img/portfolio/5-large.jpg",
        "thumbnail": "img/portfolio/5-small.jpg"
      },
      {
        "original": "img/portfolio/6-large.jpg",
        "thumbnail": "img/portfolio/6-small.jpg"
      },
      {
        "original": "img/portfolio/7-large.jpg",
        "thumbnail": "img/portfolio/7-small.jpg"
      },
      {
        "original": "img/portfolio/8-large.jpg",
        "thumbnail": "img/portfolio/8-small.jpg"
      },
      {
        "original": "img/portfolio/9-large.jpg",
        "thumbnail": "img/portfolio/9-small.jpg"
      },
      {
        "original": "img/portfolio/10-large.jpg",
        "thumbnail": "img/portfolio/10-small.jpg"
      },
      {
        "original": "img/portfolio/11-large.jpg",
        "thumbnail": "img/portfolio/11-small.jpg"
      },
      {
        "original": "img/portfolio/12-large.jpg",
        "thumbnail": "img/portfolio/12-small.jpg"
      },
      {
        "original": "img/portfolio/1.jpeg",
        "thumbnail": "img/portfolio/1Small.jpeg"
      },
      {
        "original": "img/portfolio/2.jpeg",
        "thumbnail": "img/portfolio/2Small.jpeg"
      },
      {
        "original": "img/portfolio/3.jpeg",
        "thumbnail": "img/portfolio/3Small.jpeg"
      },
      {
        "original": "img/portfolio/13.jpeg",
        "thumbnail": "img/portfolio/13Small.jpeg"
      },
      {
        "original": "img/portfolio/14.jpeg",
        "thumbnail": "img/portfolio/14Small.jpeg"
      },
      {
        "original": "img/portfolio/15.jpeg",
        "thumbnail": "img/portfolio/15Small.jpeg"
      },
      {
        "original": "img/portfolio/16.jpeg",
        "thumbnail": "img/portfolio/16Small.jpeg"
      },
      {
        "original": "img/portfolio/17.jpeg",
        "thumbnail": "img/portfolio/17Small.jpeg"
      },
  ];

const NewGallery = () => {
  return (
    <ImageGallery items={images} />
  )
}

export default NewGallery