  import React from 'react'
  import Gallery from './Gallery.jsx'
  const NavBar = ({ selectedYear, setSelectedYear }) => {
    const years = [2020, 2021 ,2022 ,2023 , 2024, 2025]
    return (
      <>
        <div className='container pb-2 pt-2 z-50 bg-gray-50 flex justify-center text-center max-w-screen h-full '>
          <div>
            <div className='text-orange-950 text-2xl font-bold pb-1.5'>
              <p>Year</p>
            </div>
            <div className='justify-center items-center flex font-medium pb-2'>
              {years.map((year) => (
                <button
                  key={year}
                  type='button'
                  className={`hover:bg-amber-400 hover:text-amber-950  mx-0.5 px-3 border-4 border-gray-500 rounded-b-2xl
                    ${year === selectedYear
                      ? 'bg-gray-800 border-b-cyan-500 text-gray-100'
                      : 'bg-gray-800 border-b-cyan-900 text-gray-100'}`
                  }
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          </div> 
        </div>
        <div id='Line1' className='relative bg-amber-500 max-w-screen h-2'></div> 
      </>
    )
  }

  export default NavBar