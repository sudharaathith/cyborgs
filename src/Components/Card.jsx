import React from 'react'
 


const Card = (props) => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
         <div>
            {props.children}
        </div>
    <div className="max-w-7xl mx-auto">
        <div className="relative group cursor-pointer">
            <div
                className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                className="relative px-7 py-6  bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 h-96 w-96">
            <div className="space-y-2">
                    <div className="h-72 w-72 flex justify-center mx-10 my-10">{props.img}</div>
                    <p className="text-orange-600 font-[zeniq] ml-20 w-full">{props.eventname}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
