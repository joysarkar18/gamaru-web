import React from "react";

const ImageCard = (props) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition-transform duration-500 max-w-[18rem] rounded-lg bg-white/30 backdrop-blur-lg shadow-lg hover:shadow-2xl dark:bg-neutral-800/40 p-2">
      <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
        <img
          className="rounded-lg transition-transform duration-500 hover:scale-110"
          src={props.src}
          alt={props.name}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-4 text-center">
        <p className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-2">
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
