import { useState } from 'react';
import NavBar from './Modules/NavBar';
import Gallery from './Modules/Gallery';

function App() {
   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  return (
    <>
      <NavBar selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      <Gallery selectedYear={selectedYear} />
    </>
  )
}

export default App
