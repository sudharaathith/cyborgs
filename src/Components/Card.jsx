import React, { useState } from 'react';
import EventCard from './EventCard';

const Card = () => {
  const [isEventCardVisible, setEventCardVisibility] = useState(false);

  const openEventCard = () => {
    setEventCardVisibility(true);
  };

  const closeEventCard = () => {
    setEventCardVisibility(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto mb-20">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-slate-200 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
          </div>
          <div className="relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col space-y-4 h-110 w-96">
            <div className="h-80 w-80 flex justify-center" >
              <p className="text-slate-200 font-[zeniq]  w-full">summa</p>
              <button className="text-slate-200 mt-4" onClick={openEventCard}>View Details</button>
            </div>
          </div>
        </div>
      </div>
      {isEventCardVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 w-96 rounded-lg shadow-lg">
            <EventCard onClose={closeEventCard} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
