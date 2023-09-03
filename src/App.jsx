

import { Routes, Route } from 'react-router-dom';
import First from './first';
import PrivacyPolicy from './Pages/privacyPolicy';



function App() {
 

  return (
    <>
    
    <Routes>
        <Route path="/" element={<First />}> 
        </Route>
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Routes>    
      
    </>
  )
}

export default App
