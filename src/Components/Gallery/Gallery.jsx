import React, { useState } from "react";
import Masonry from "../../Masonry/Masonry.jsx";
import "./Gallery.css";

// images
import adidas from "../../assets/Poster/adidas.jpg";
import artboard from "../../assets/Poster/Artboard 1.jpg";
import autoshow from "../../assets/Poster/auto show.jpg";
import burger from "../../assets/Poster/burger2.jpg";
import golden from "../../assets/Poster/golden buds.jpg";
import gt3 from "../../assets/Poster/gt3.jpg";
import haze from "../../assets/Poster/haze tech.jpg";
import nike from "../../assets/Poster/nike3.jpg";

const Gallery = () => {

  const items = [
    { id: "1", img: adidas, height: 400 },
    { id: "2", img: artboard, height: 300 },
    { id: "3", img: autoshow, height: 500 },
    { id: "4", img: burger, height: 350 },
    { id: "5", img: golden, height: 450 },
    { id: "6", img: gt3, height: 380 },
    { id: "7", img: haze, height: 450 },
    { id: "8", img: nike, height: 360 },
  ];

  return (
    <section className="container py-5">
      <h1 className="mb-4">Creative Vault</h1>

      <Masonry
        items={items}
        
      />

     
    </section>
  );
};

export default Gallery;
