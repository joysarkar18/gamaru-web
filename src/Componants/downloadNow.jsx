import React from 'react';
import Lottie from "lottie-react";
import downloadNow from "../json/downloadNow.json"
import { saveAs } from 'file-saver'


const DownloadNow = () => {
    const downloadApp = () => {
        saveAs("https://firebasestorage.googleapis.com/v0/b/gamaru-mobile-app.appspot.com/o/gamaru.apk?alt=media&token=6fcfb114-3a05-49b5-a1a5-59ce04d01fbb", 'gamaru' +".apk") // Put your image url here.
      }
    return (
        <div onClick={downloadApp} className='cursor-pointer fixed bottom-3 right-4 z-50'>
             <Lottie animationData={downloadNow} height={400} width={600} loop={true} />

            
        </div>
    );
}

export default DownloadNow;
