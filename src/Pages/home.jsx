import React from "react";
import DownloadNow from "../Componants/downloadNow";
import Lottie from "lottie-react";
import cash from "../json/cash.json";
import { saveAs } from 'file-saver'

const Home = () => {

  const downloadApp = () => {
    saveAs("https://firebasestorage.googleapis.com/v0/b/gamaru-mobile-app.appspot.com/o/gamaru.apk?alt=media&token=6fcfb114-3a05-49b5-a1a5-59ce04d01fbb", 'gamaru' +".apk") // Put your image url here.
  }
  const carouselItems = [
    <h1 className="text-4xl">Slide 1</h1>,
    <h1 className="text-4xl">Slide 2</h1>,
    <h1 className="text-4xl">Slide 3</h1>,
  ];
  return (
    <div name="home" className=" flex flex-col items-center h-full bg-slate-800 pb-10">
      <div className="flex flex-col items-center md:flex md:flex-row">
        <h1 className="pt-28 md:pt-40  text-gray-200 md:text-6xl text-3xl font-extrabold">
          Play Games and Win cash{" "}
        </h1>
        <div className="pt-0 md:pt-20 md:pl-3 h-24 w-24">
          <Lottie animationData={cash} height={20} width={20} loop={true} />
        </div>
      </div>

      <div className="w-full md:w-6/12 md:mt-24 mt-3">
        <p className="text-gray-200 text-lg px-3 md:px-0 md:text-2xl text-center">
          Are you hooked on online games? Have you considered earning via gaming
          or mobile play? Imagine getting rewarded for playing your favorite
          addictive games. Introducing GAMARU, the platform that brings this
          fantasy to life.
        </p>
      </div>
      <div className="mt-3 md:hidden block">
      <button
      onClick={downloadApp}
            type="button"
            class="text-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Download Gamaru Apk
          </button>

      </div>
     
      
      <div className="md:h-3/6 md:w-3/12 h-2/3 w-3/4 block md:hidden mt-4">
        <img height={100} src="/assets/bgmiP.png" alt="bgmi"></img>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center">
        <div className="md:h-3/6 md:w-3/12 hidden md:block">
          <img height={100} src="/assets/bgmiP.png" alt="bgmi"></img>
        </div>

        <div className="flex flex-col justify-end items-center md:h-54 md:w-5/12 md:mt-24 mt-4">
          <h1 className="text-yellow-400 text-2xl md:text-4xl font-bold">
            Your first step to become a gamer
          </h1>
          <div className="h-1"></div>
          <h1 className="text-gray-200 text-xl  md:text-4xl font-bold">
            Play Esports Turnament and win prizes
          </h1>
          <div className="md:h-24 h-3"></div>
          <button
          onClick={downloadApp}
            type="button"
            class="text-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Download Gamaru Apk
          </button>
        </div>

        <div className="h-3/6 w-3/12 hidden md:block">
          <img height={100} src="/assets/freeFire.png" alt="bgmi"></img>
        </div>
      </div>

      <DownloadNow></DownloadNow>
    </div>
  );
};



export default Home;
