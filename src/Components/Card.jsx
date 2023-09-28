import React from "react";

const Card = (props) => {
  return (
    <div class="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div>{props.children}</div>
      <div class="max-w-7xl mx-auto">
        <div class="relative group cursor-pointer">
          <div class="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative px-7 py-6  bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 h-60 w-60">
            <div class="space-y-2">
              <p class="text-orange-600 font-[zeniq]">{props.eventname}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
