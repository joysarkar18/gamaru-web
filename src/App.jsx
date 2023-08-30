import { useState } from 'react'
import NavBar from './Componants/navBar'
import Home from './Pages/home'
import Home2 from './Pages/home2';


function App() {
  const [count, setCount] = useState(0)
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className='text-lg'>
        <NavBar nav={nav} setNav = {setNav}></NavBar>
        <Home></Home>
        <Home2></Home2>
        
      </div>
    </>
  )
}

export default App
