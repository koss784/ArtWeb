  import React from 'react'
  import { useState } from 'react';
  const NavBar = () => {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear)
    const years = [2023, 2024, 2025]
    return (
      <>
        <div className='container pb-2 pt-2 bg-gray-50 flex justify-center text-center max-w-screen h-full '>
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
                    ${year === currentYear
                      ? 'bg-gray-800 border-b-cyan-500 text-gray-100'
                      : 'bg-gray-800 border-b-cyan-900 text-gray-100'}`
                  }
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </button>
                
              ))}
              <div id='imArr24' className={`${selectedYear === 2024 ? '' : 'hidden'}`}>
                {}
              </div>
            </div>
          </div> 
        </div>
        <div id='Line1' className='relative bg-amber-500 max-w-screen h-2'></div> 
      </>
    )
  }

  export default NavBar