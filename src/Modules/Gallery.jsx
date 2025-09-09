import React, { useState } from 'react'
const Gallery = () => {
  const images2025 = import.meta.glob("/src/img/2025/" + "\x2A.{png,jpg,jpeg}", { eager: true, import: "default" });
  const images2024 = import.meta.glob("/src/img/2024/" + "\x2A.{png,jpg,jpeg}", { eager: true, import: "default" });
  const images2023 = import.meta.glob("/src/img/2023/" + "\x2A.{png,jpg,jpeg}", { eager: true, import: "default" });
  const imageArray25 = Object.values(images2025)
  const imageArray24 = Object.values(images2024)
  const imageArray23 = Object.values(images2023)

  
  const [activeImg, setActiveImg] = useState(null)

  return (
    <>

      <div className='container bg-[url(/Fon.jpg)] absolute bg-cover bg-center max-w-screen h-screen'>
        <div className='w-full h-full backdrop-brightness-50 backdrop-blur-sm'></div>
      </div>
      <div className='absolute justify-center items-center w-screen'>
        <div className='grid grid-cols-4 lg:grid-cols-6'>
          {imageArray25.map((img) => (
            <img
              key={img}
              className='lg:w-[25vh] md:w-[15vh] sm:w-[15vh] w-[12vh] m-3 overflow-hidden framed shadow-2xl shadow-gray-950/50'
              src={img}
              onClick={() => setActiveImg(img)}
            />
          ))}
          {imageArray24.map((img) => (
            <img
              key={img}
              className='hidden lg:w-[25vh] md:w-[15vh] sm:w-[15vh] w-[12vh] m-3 overflow-hidden framed shadow-2xl shadow-gray-950/50'
              src={img}
              onClick={() => setActiveImg(img)}
            />
          ))}
          {imageArray23.map((img) => (
            <img
              key={img}
              className='hidden lg:w-[25vh] md:w-[15vh] sm:w-[15vh] w-[12vh] m-3 overflow-hidden framed shadow-2xl shadow-gray-950/50'
              src={img}
              onClick={() => setActiveImg(img)}
            />
          ))}
        </div>

        {activeImg && (
          <div 
            className='bg-opacity-80 flex items-center justify-center'
            onClick={() => setActiveImg(null)}
          >
            <img 
              src={activeImg}
              className='max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl'
              />
          </div>
        )}

      </div>
      
      </>
  )
}

export default Gallery