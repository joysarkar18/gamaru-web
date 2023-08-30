import React from 'react';
import DownloadNow from '../Componants/downloadNow';
import Lottie from "lottie-react";
import cash from "../assets/cash.json"



const Home = () => {
    const carouselItems = [
        <h1 className="text-4xl">Slide 1</h1>,
        <h1 className="text-4xl">Slide 2</h1>,
        <h1 className="text-4xl">Slide 3</h1>,
      ];
    return (
        <div className=' flex flex-col items-center h-screen bg-slate-800' >

          <div className='flex flex-col items-center md:flex md:flex-row'>
          <h1 className='pt-40  text-gray-200 md:text-5xl text-3xl font-extrabold'>Play Games and Win cash  </h1>
          <div className='pt-5 md:pt-20 md:pl-3 h-24 w-24'>
          <Lottie animationData={cash} height={20} width={20} loop={true} />
          </div>
          
          
            </div>


            
            
            <DownloadNow></DownloadNow>
            
        </div>
    );
}

export default Home;
