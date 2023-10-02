import React, { useState } from 'react';

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center relative overflow-hidden ${isFlipped ? 'flipped' : ''}`}>
      <div> (
          // Front of the card
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
              </div>
              <div className="relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col space-y-4 h-110 w-96">
                <div className="h-80 w-80 flex justify-center">{props.img}</div>
                <p className="text-orange-600 font-[zeniq] ml-20 w-full">{props.eventname}</p>
                <button onClick={flipCard} className="text-orange-600 mt-4 mx-auto">View Details</button>
              </div>
            </div>
          </div>
        )
      </div>
    </div>
  );
};

export default Card;
