import React from 'react';
import Lottie from "lottie-react";
import downloadNow from "../json/downloadNow.json"
import { saveAs } from 'file-saver'


const DownloadNow = () => {
    const downloadApp = () => {
        saveAs("https://firebasestorage.googleapis.com/v0/b/gamaru-mobile-app.appspot.com/o/base%20(2).apk?alt=media&token=dd9e1a0e-b9d5-4241-92c1-92a8d936df17", 'gamaru' +".pdf") // Put your image url here.
      }
    return (
        <div onClick={downloadApp} className='cursor-pointer fixed bottom-3 right-4 z-50'>
             <Lottie animationData={downloadNow} height={400} width={600} loop={true} />

            
        </div>
    );
}

export default DownloadNow;
