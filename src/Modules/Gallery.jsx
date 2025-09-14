/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Gallery = ({selectedYear }) => {

  const imagesByYear = {
    2025: Object.values(
      import.meta.glob("/src/img/2025/" + "\x2A.{png,jpg,jpeg}", { eager: true, import: "default" })
    ),
    2024: Object.values(
      import.meta.glob("/src/img/2024/" + "\x2A.{png,jpg,jpeg}", { eager: true, import: "default" })
    ),
    2023: Object.values(
      import.meta.glob("/src/img/2023/" + "\x2A.{png,jpg,jpeg}", { eager: true, import: "default" })
    ),
    2022: Object.values(
      import.meta.glob("/src/img/2022/" + "\x2A.{png,jpg,jpeg}", { eager: true, import: "default" })
    ),
    2021: Object.values(
      import.meta.glob("/src/img/2021/" + "\x2A.{png,jpg,jpeg}", { eager: true, import: "default" })
    ),
    2020: Object.values(
      import.meta.glob("/src/img/2020/" + "\x2A.{png,jpg,jpeg}", { eager: true, import: "default" })
    ),
};

  const [activeImg, setActiveImg] = useState(null)
  const currentImages = imagesByYear[selectedYear] || [];
  const [hoverImg, setHoverImg] = useState(null)
  const [backdropBrightness, setBackdropBrightness] = useState(50);

  const handleImageHover = (img) => {
    setHoverImg(img);
    setBackdropBrightness(30); // Brighter on hover
  };

  const handleImageLeave = () => {
    setHoverImg(null);
    setBackdropBrightness(50); // Back to normal
  };

  return (
    <>

      <div className='container bg-[url(/Fon.jpg)] absolute bg-cover bg-center max-w-screen h-screen'>
        <div 
          id='backdrop1' 
          className='w-full h-full backdrop-blur-sm transition-all duration-300'
          style={{ backdropFilter: `brightness(${backdropBrightness}%) blur(4px)` }}
          >
        </div>
      </div>
      <div className='absolute justify-center items-center w-screen'>
        <div className=' mr-3  grid grid-cols-4 lg:grid-cols-6 size-fit lg:gap-5 gap-0'>
          {currentImages.map((img) => (
            <img
              key={img}
              className='lg:w-[25vh] md:w-[15vh] sm:w-[15vh] w-[12vh] m-3 overflow-hidden framed shadow-2xl shadow-gray-950/50'
              src={img}
              onClick={() => setActiveImg(img)}
              onMouseEnter={() => handleImageHover(img)}
              onMouseLeave={handleImageLeave}
            />
          ))}
        </div>
        {currentImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-300">Німа нічо в {selectedYear}</p>
          </div>
        )}
        {activeImg && (
          <div 
            className='fixed pl-9 inset-0 z-30 bg-cover max-w-screen h-[100vh] bg-gray-950/60 py-10 flex items-center justify-center'
            onClick={() => setActiveImg(null)}
          >
            <img 
              src={activeImg}
              className='lg:max-h-[90vh] lg:max-w-[90vh] max-w-[40vh] max-h-[100vh] object-contain rounded-lg shadow-2xl'
            />
            <button
              className='lg:-translate-y-[47vh] text-5xl text-white -translate-y-28'
              onClick={() => setActiveImg(null)}
            >
              ×
            </button>
          </div>
        )}

      </div>
      
      </>
  )
}

export default Gallery
