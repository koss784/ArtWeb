  import React from 'react'
  import Gallery from './Gallery.jsx'
  const NavBar = ({ selectedYear, setSelectedYear }) => {
    const years = [2020, 2021 ,2022 ,2023 , 2024, 2025]
    return (
      <>
        <div className='container z-50 bg-black max-w-screen h-full '>
          <div className='relative bg-linear-to-b from-white from-80% to-red-950  w-screen m-0'>
            <div className='flex-col ml-2'>
              <div className='text-black text-2xl font-medium pb-1.5 pt-2'>
                <p>Year of Creation</p>
              </div>
              <div className=' flex text-s pb-4'>
                {years.map((year) => (
                  <button
                    key={year}
                    type='button'
                    className={`hover:bg-yellow-400/50 hover:text-amber-950  mx-0.5 px-3 border-4 border-gray-500 rounded-b-2xl
                      ${year === selectedYear
                        ? 'bg-gray-900 border-b-cyan-500 text-gray-100'
                        : 'bg-gray-700 border-b-cyan-900 text-gray-100'}`
                    }
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
             </div> 
            <img
              src='src/img/Autograph.png'
              className='absolute size-20 object-contain top-0 right-10'

            />
            <div id='Line1' className=' bg-red-950  max-w-screen h-1 bottom-0 align-bottom'></div> 
          </div> 
        </div>
      </>
    )
  }

  export default NavBar