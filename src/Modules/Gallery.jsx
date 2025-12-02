/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
//20251202
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

    const getImageName = (imgPath) => {
    // Extract filename from path
    const filename = imgPath.split('/').pop();
    // Remove file extension
    const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
    // Convert underscores and hyphens to spaces
    const formattedName = nameWithoutExt.replace(/[_-]/g, ' ');
    // Capitalize first letter of each word
    return formattedName.replace(/\b\w/g, l => l.toUpperCase());
  };


  return (
    <>

      
      <div className='bg-amber-800 absolute justify-center items-center w-screen h-screen '>
        <div className='bg-linear-to-b from-red-950 from-10% via-amber-950 via-70% to-amber-800 gallery grid '>
          {currentImages.map((img) => (
             <div 
              key={img} 
              className="relative group overflow-hidden   m-3"
              onMouseEnter={() => handleImageHover(img)}
              onMouseLeave={handleImageLeave}
            >
              <div className="relative">
                <img
                  className='shadow-md shadow-gray-950/50 max-h-[40vh]  framed object-cover '
                  src={img}
                  onClick={() => setActiveImg(img)}
                />
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-2">
                  <h3 className="text-gray-300 pl-1 text-s font-extralight truncate">
                    {getImageName(img)}
                  </h3>
                </div>
              </div>
            </div>

          ))}
        </div>
        {currentImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-300">Німа нічо в {selectedYear}</p>
          </div>
        )}
        {activeImg && (
          <div 
            className='fixed pl-9 inset-0 z-30 bg-cover backdrop-blur-md max-w-screen h-[100vh] bg-gray-950/60 py-10 flex items-center justify-center'
            onClick={() => {setActiveImg(null)}}
          >
            <div className='relative justify-center'>
              <p className='absolute -translate-y-6 top-0 left-1/2 -translate-x-1/2 text-3xl font-sans  text-white '>
                {getImageName(activeImg)}
              </p>

              <button
                className='absolute top-2 right-2 text-5xl text-white'
                onClick={() => setActiveImg(null)}
              >
                ×
              </button>

              <img 
                src={activeImg}
                className='lg:max-h-[90vh] translate-y-5 lg:max-w-[90vh] max-w-[40vh] max-h-[100vh] object-contain rounded-lg shadow-2xl'
              />
            </div>
          </div>
        )}

      </div>
      
      </>
  )
}

export default Gallery
