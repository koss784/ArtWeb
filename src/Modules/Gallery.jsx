import React, { useState } from 'react'

const Gallery = () => {
  const images = ['/img/Arctic.png', '/img/Dishonored.jpg', '/img/Ship.jpg']
  const [activeImg, setActiveImg] = useState(null)

  return (
    <>

      <div className='container bg-[url(/Fon.jpg)] absolute bg-cover bg-center max-w-screen h-screen'>
        <div className='w-full h-full backdrop-brightness-50 backdrop-blur-sm'></div>
      </div>
      <div className=''>
        <div className='absolute grid grid-flow-col auto-cols-max'>
          {images.map((img) => (
            <img
              key={img}
              className={`w-50 m-3 overflow-hidden framed shadow-2xl shadow-gray-950/50
              ${img === '/img/Dishonored.jpg' ? "inset-y-5" : ''}
              `}
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