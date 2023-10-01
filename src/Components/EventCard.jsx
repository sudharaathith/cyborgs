import React from 'react';

const EventCard = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-70">
        <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-slate-200 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
              </div>
              <div className="relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col space-y-4 h-110 w-96">
                <div className="h-96 w-96 justify">
                  <p className="text-slate-200 font-[zeniq] w-full">summa</p>
                  <button className="text-slate-200 mt-4" onClick={onClose}>
                    Close
                  </button>
                  <button className="text-slate-200 mt-4 mx-5">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default EventCard;
