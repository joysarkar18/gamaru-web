import React from "react";


const ImageCard = (props) => {
  return (
    <div class=" cursor-pointer hover:scale-110 duration-500 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div class="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          class="rounded-t-lg"
          src={props.src}
          alt={props.name}
        />
      </div>
      <div class="p-1">
        <p class="font-extrabold text-lg text-neutral-600 dark:text-neutral-200">
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
