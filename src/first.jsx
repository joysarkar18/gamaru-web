import React from 'react';
import { useState } from 'react'
import NavBar from './Componants/navBar'
import Home from './Pages/home'
import About from './Pages/about';
import TermConditions from './Pages/termConditions';
import Features from './Pages/features';
import PrivacyPolicy from './Pages/privacyPolicy';

const First = () => {
    const [count, setCount] = useState(0)
    const [nav, setNav] = useState(false);
    return (
        <div>
            <NavBar nav={nav} setNav = {setNav}></NavBar>
            <Home></Home>
            <About></About>
            <TermConditions></TermConditions>
            <PrivacyPolicy></PrivacyPolicy>
            <Features></Features>
            
        </div>
    );
}

export default First;
