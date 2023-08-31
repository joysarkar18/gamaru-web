import React from "react";
import GlossyContainer from "../Componants/glossy";
import ImageCard from "../Componants/imageCard";
import Lottie from "lottie-react";
import join from "../assets/join.json";
import arrow from "../assets/rightArrow.json";
import play from "../assets/play.json";
import earn from "../assets/earn.json";

const About = () => {
  return (
    <div>
      <div className="h-full bg-slate-800 flex flex-col items-center">
        <h1 className="text-gray-200 text-2xl md:text-4xl font-extrabold mb-4">
          Available Games & Contests
        </h1>

        <GlossyContainer>
          <div className="flex gap-10 md:gap-16 md:flex-row flex-col">
            <ImageCard src="src/assets/bgmiLogo.jpg" name="BGMI"></ImageCard>
            <ImageCard
              src="src/assets/freeFire_game.png"
              name="FREE FIRE"
            ></ImageCard>
            <ImageCard src="src/assets/lodoLogo.png" name="LUDO"></ImageCard>
            <ImageCard
              src="src/assets/carromLogok.png"
              name="CARROM"
            ></ImageCard>
          </div>
        </GlossyContainer>

        <h1 className="text-gray-200 text-2xl md:text-4xl font-extrabold mb-4 mt-8">
          How to?
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="h-full w-56 md:h-full md:w-72 bg-slate-800 ">
          <Lottie animationData={join} height={20} width={20} loop={true} />
        
            <p className="text-gray-200 text-2xl text-center font-extrabold">JOIN</p>
          
         
          </div>

          <div className="md:h-60 md:w-60 hidden md:block">
          <Lottie animationData={arrow} height={20} width={20} loop={true} />
          </div>

          <div className="h-full w-44 md:h-60 md:w-60">
          <Lottie animationData={play} height={20} width={20} loop={true} />
          <p className="text-gray-200 text-2xl text-center font-extrabold mt-2">PLAY</p>
          </div>

          <div className="md:h-60 md:w-60 hidden md:block">
          <Lottie animationData={arrow} height={20} width={20} loop={true} />
          </div>

          <div className="h-full w-44 md:h-60 md:w-60">
          <Lottie animationData={earn} height={20} width={20} loop={true} />
          <p className="text-gray-200 text-2xl text-center font-extrabold mt-2">EARN</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
