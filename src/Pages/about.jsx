import React from "react";
import GlossyContainer from "../Componants/glossy";
import ImageCard from "../Componants/imageCard";
import Lottie from "lottie-react";
import join from "../json/join.json";
import arrow from "../json/rightArrow.json";
import play from "../json/play.json";
import earn from "../json/earn.json";

const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-900 to-black py-12 px-6 md:px-12"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-gray-200 text-3xl md:text-5xl font-extrabold mb-8 uppercase tracking-wider">
          Available Games & Contests
        </h1>

        <GlossyContainer>
          <div className="flex gap-10 md:gap-16 flex-col md:flex-row justify-center items-center">
            <ImageCard src="/assets/bgmiLogo.jpg" name="BGMI" />
            <ImageCard src="/assets/freeFire_game.png" name="FREE FIRE" />
            <ImageCard src="/assets/lodoLogo.png" name="LUDO" />
            <ImageCard src="/assets/carromLogok.png" name="CARROM" />
          </div>
        </GlossyContainer>

        <h1 className="text-gray-200 text-3xl md:text-5xl font-extrabold mb-8 mt-12 uppercase tracking-wider">
          How to?
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex flex-col items-center bg-gradient-to-t from-slate-700 via-slate-800 to-black p-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <Lottie
              animationData={join}
              height={20}
              width={20}
              loop={true}
              className="w-32 md:w-48"
            />
            <p className="text-gray-200 text-2xl font-extrabold mt-4">JOIN</p>
          </div>

          <div className="hidden md:block">
            <Lottie
              animationData={arrow}
              height={20}
              width={20}
              loop={true}
              className="w-20"
            />
          </div>

          <div className="flex flex-col items-center bg-gradient-to-t from-slate-700 via-slate-800 to-black p-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <Lottie
              animationData={play}
              height={20}
              width={20}
              loop={true}
              className="w-32 md:w-48"
            />
            <p className="text-gray-200 text-2xl font-extrabold mt-4">PLAY</p>
          </div>

          <div className="hidden md:block">
            <Lottie
              animationData={arrow}
              height={20}
              width={20}
              loop={true}
              className="w-20"
            />
          </div>

          <div className="flex flex-col items-center bg-gradient-to-t from-slate-700 via-slate-800 to-black p-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <Lottie
              animationData={earn}
              height={20}
              width={20}
              loop={true}
              className="w-32 md:w-48"
            />
            <p className="text-gray-200 text-2xl font-extrabold mt-4">EARN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
