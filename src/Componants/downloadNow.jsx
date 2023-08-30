import React from 'react';
import Lottie from "lottie-react";
import downloadNow from "../assets/downloadNow.json"

const DownloadNow = () => {
    return (
        <div className='fixed bottom-3 right-4 '>
             <Lottie animationData={downloadNow} height={400} width={600} loop={true} />

            
        </div>
    );
}

export default DownloadNow;
