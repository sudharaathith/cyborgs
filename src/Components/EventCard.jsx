import React from 'react';

const EventCard = ({ onClose, event }) => {
  const posterUrl = event.posterUrl || ''; 

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[70]">
      <div className="sm:h-3/4 sm:w-3/4  z-[80] max-w-4xl mx-auto bg-black rounded-lg shadow-lg p-6 flex relative border border-gradient-to-r from-blue-600 to-slate-200">

        {/* <div className="w-1/3">
          <img src={posterUrl} alt="Event Poster" className="w-full h-full object-cover rounded-lg" />
        </div> */}

        <div className="sm:w-2/3 px-6 mx-auto justify-center z-[70]">
          <h2 className="text-3xl font-bold text-slate-200 mb-4">{event.title}</h2>
          {/* <p className="text-slate-200 text-lg mb-4">{event.description}</p> */}
          <h3 className="text-xl font-semibold text-slate-200 mb-2">Event Details:</h3>
          <p className="text-slate-200 mb-2">{event.round1}</p>
          <p className="text-slate-200 mb-4">{event.round2}</p>

          {/* <h3 className="text-xl font-semibold text-slate-200 mb-2">Coordinators:</h3>
          <p className="text-slate-200 mb-2">Coordinator 1: {event.coordinator1}</p>
          <p className="text-slate-200 mb-2">Coordinator 2: {event.coordinator2}</p> */}

          <h3 className="text-xl font-semibold text-slate-200 mb-2">Contact:</h3>
          <p className="text-slate-200 mb-4">{event.contact}</p>

          <div className="flex">
            <button
              className="text-slate-200 text-lg mr-4   bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={onClose}
            >
              Close
            </button>
            <a
              className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700" 
              href='https://forms.gle/LCG48PTf4GSunTTw5'
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
