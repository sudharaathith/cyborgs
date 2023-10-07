import React from 'react';

const EventCard = ({ onClose, event }) => {
  const posterUrl = event.posterUrl || ''; 

  return (
    <div className="event_card fixed inset-0 flex items-center justify-center">
      <div className="event_inner mx-auto rounded-lg shadow-lg  flex relative ">

        {/* <div className="w-1/3">
          <img src={posterUrl} alt="Event Poster" className="w-full h-full object-cover rounded-lg" />
        </div> */}

        <div className="event  mx-auto justify-center relative  ">
          <h2 className="text-3xl font-[rough]  text-blue-300 mb-4">{event.title}</h2>
          {/* <p className="text-slate-200 text-lg mb-4">{event.description}</p> */}
          <h3 className="text-xl text-slate-200 mb-2 font-[rough] ">Event Details:</h3>
          <p className="space text-slate-100 mb-2 text-lg 1">{event.round()}</p>
          {/* <p className="text-slate-200 mb-4">{event.round2}</p> */}

          {/* <h3 className="text-xl font-semibold text-slate-200 mb-2">Coordinators:</h3>
          <p className="text-slate-200 mb-2">Coordinator 1: {event.coordinator1}</p>
          <p className="text-slate-200 mb-2">Coordinator 2: {event.coordinator2}</p> */}

          <h3 className="text-xl  text-slate-200 mb-2 font-[rough] ">Contact:</h3>
          <p className="text-slate-100 mb-4">{event.contact}</p>

          <div className="flex">
            <button
              className="text-slate-200 text-lg text-bold mr-4   bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={onClose}
            >
              Close
            </button>
            <a
              className="text-white bg-blue-600 px-4 py-2 rounded-lg  hover:bg-blue-700 text-bold" 
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
// import React from 'react'
// import styled from 'styled-components'

// const EventCard = ({onClose, event}) => {
//   return (
//     <Main>  
//       dfgfdgfsdgfds
//     </Main>
//   )
// }

// export default EventCard

// const Main = styled.div`
//   position: absolute;
//   top: 0;
//   width: 80vw;
//   height: 70vh;
//   background-color: rgba(171, 47, 47, 0.7);
// `;
