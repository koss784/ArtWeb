import React from 'react'
const NavBar = () => {
  const currentYear = new Date().getFullYear();

  const years = [2023, 2024, 2025]

  return (
    <div className='container pb-2 pt-2 bg-gray-50 flex justify-center text-center max-w-screen h-full '>
      <div>
        <div className='text-orange-950 text-2xl font-bold '>
          <p>Year</p>
        </div>
        <div className='justify-center items-center flex font-medium'>
          {years.map((year) => (
            <button
              key={year}
              type='button'
              className={`hover:bg-amber-400 hover:text-amber-950  mx-0.5 px-3 border-4 border-gray-500 rounded-b-2xl
                ${year === currentYear
                  ? 'bg-gray-800 border-b-cyan-500 text-gray-100'
                  : 'bg-gray-800 border-b-cyan-900 text-gray-100'}`
              }
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <div className='my-18 absolute bg-amber-500 w-full h-5'></div>  
      
    </div>
    
  )
}

export default NavBar