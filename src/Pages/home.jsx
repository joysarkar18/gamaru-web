import React, { useEffect, useState, useRef } from "react";
import DownloadNow from "../Componants/downloadNow";
import Lottie from "lottie-react";
import cash from "../json/cash.json";
import { saveAs } from "file-saver";
import { motion } from "framer-motion"; // For advanced animations

const Home = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollTop = useRef(0);

  const downloadApp = () => {
    saveAs(
      "https://firebasestorage.googleapis.com/v0/b/gamaru-mobile-app.appspot.com/o/gamaru.apk?alt=media&token=6fcfb114-3a05-49b5-a1a5-59ce04d01fbb",
      "gamaru.apk"
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      name="home"
      className="relative flex flex-col items-center h-full bg-gradient-to-b from-black to-slate-800 pb-10 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 opacity-40 w-[400px] h-[400px] rounded-full animate-spin-slow absolute top-10 left-[-100px] blur-3xl"></div>
        <div className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-600 opacity-50 w-[300px] h-[300px] rounded-full animate-spin-reverse-slow absolute top-[400px] right-[-150px] blur-2xl"></div>
      </div>

      <motion.div
        className="flex flex-col items-center md:flex-row z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="pt-28 md:pt-40 text-gray-200 md:text-6xl text-3xl font-extrabold transition-transform duration-500 hover:scale-110 hover:text-purple-400">
          Play Games and Win Cash{" "}
        </h1>
        <div className="pt-0 md:pt-20 md:pl-3 h-24 w-24 animate-bounce-slow">
          <Lottie animationData={cash} height={20} width={20} loop={true} />
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-6/12 md:mt-24 mt-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-gray-200 text-lg px-3 md:px-0 md:text-2xl text-center transition-opacity duration-1000 hover:opacity-80">
          Are you hooked on online games? Have you considered earning via gaming
          or mobile play? Imagine getting rewarded for playing your favorite
          addictive games. Introducing GAMARU, the platform that brings this
          fantasy to life.
        </p>
      </motion.div>

      <motion.div
        className="mt-3 md:hidden block z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <button
          onClick={downloadApp}
          type="button"
          className="text-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 transition-transform duration-300 hover:scale-110 animate-pulse"
        >
          Download Gamaru Apk
        </button>
      </motion.div>

      <motion.div
        className={`md:h-3/6 md:w-3/12 h-2/3 w-3/4 block md:hidden mt-4 z-10 transition-opacity duration-700 ${
          scrollDirection === "down" ? "opacity-0" : "opacity-100"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          height={100}
          src="/assets/bgmiP.png"
          alt="bgmi"
          className="transition-transform duration-500 hover:scale-105"
        />
      </motion.div>

      <div className="flex flex-col md:flex-row items-start justify-center z-10">
        <motion.div
          className={`md:h-3/6 md:w-3/12 hidden md:block transition-opacity duration-700 ${
            scrollDirection === "down" ? "opacity-0" : "opacity-100"
          }`}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            height={100}
            src="/assets/bgmiP.png"
            alt="bgmi"
            className="transition-transform duration-500 hover:scale-110"
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-end items-center md:h-54 md:w-5/12 md:mt-24 mt-4 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-yellow-400 text-2xl md:text-4xl font-bold">
            Your first step to become a gamer
          </h1>
          <div className="h-1"></div>
          <h1 className="text-gray-200 text-xl md:text-4xl font-bold transition-transform duration-700 hover:scale-110">
            Play Esports Tournament and win prizes
          </h1>
          <div className="md:h-24 h-3"></div>
          <button
            onClick={downloadApp}
            type="button"
            className="text-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 transition-transform duration-300 hover:scale-110 animate-pulse"
          >
            Download Gamaru Apk
          </button>
        </motion.div>

        <motion.div
          className={`h-3/6 w-3/12 hidden md:block transition-opacity duration-700 ${
            scrollDirection === "down" ? "opacity-0" : "opacity-100"
          }`}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            height={100}
            src="/assets/freeFire.png"
            alt="freeFire"
            className="transition-transform duration-500 hover:scale-110"
          />
        </motion.div>
      </div>

      <DownloadNow />
    </div>
  );
};

export default Home;
