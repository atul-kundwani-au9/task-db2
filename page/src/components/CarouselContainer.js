import React from 'react';
import { Carousel } from 'react-bootstrap';
// import image1 from '../images/1.jpg';
// import image2 from '../images/2.jpg';
// import image3 from '../images/3.jpg';

const CarouselContainer = () => {
  return (
    <Carousel controls={false}  pause={false} style={{marginTop:'-10px'}} >
      <Carousel.Item interval={2000}>
        <img
          className="images"          
          src={'https://www.wallpapertip.com/wmimgs/14-148979_spa-4k-download-hd-wallpaper-high-resolution-high.jpg'}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="images"
          src={'https://wallpapermemory.com/uploads/386/spa-background-full-hd-1080p-218852.jpg'}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="images"
          src={'https://c4.wallpaperflare.com/wallpaper/863/745/302/spa-background-desktop-wallpaper-preview.jpg'}
          alt="Third slide"
        />
       
      </Carousel.Item>
     
    </Carousel>
  )
}

export default CarouselContainer;
