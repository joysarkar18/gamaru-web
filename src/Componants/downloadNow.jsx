import React from "react";
import Lottie from "lottie-react";
import downloadNow from "../json/downloadNow.json";
import { saveAs } from "file-saver";

const DownloadNow = () => {
  const downloadApp = () => {
    saveAs(
      "https://firebasestorage.googleapis.com/v0/b/gamaru-mobile-app.appspot.com/o/gamaru.apk?alt=media&token=6fcfb114-3a05-49b5-a1a5-59ce04d01fbb",
      "gamaru.apk"
    );
  };

  return (
    <div
      onClick={downloadApp}
      className="cursor-pointer fixed bottom-4 right-6 z-50 transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      <div className="relative flex items-center justify-center group">
        <Lottie
          animationData={downloadNow}
          height={400}
          width={600}
          loop={true}
          className="rounded-full shadow-2xl transition-all duration-300 group-hover:shadow-teal-400/50 group-hover:rotate-12"
        />

        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 opacity-20 animate-ping group-hover:opacity-40"></div>

        <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default DownloadNow;
