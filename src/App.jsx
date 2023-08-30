import { useState } from 'react'
import NavBar from './Componants/navBar'

function App() {
  const [count, setCount] = useState(0)
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className='text-lg'>
        <NavBar nav={nav} setNav = {setNav}></NavBar>
      </div>
    </>
  )
}

export default App
