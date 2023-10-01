import React, { useState } from 'react';
import EventCard from './EventCard';

const events = [
  {
    id: 1,
    title: 'Code Decode',
    description: 'Join us for an exciting coding challenge!',
    round1: 'Round 1: Written test on algorithms and data structures.',
    round2: 'Round 2: Live coding challenge on a real-world problem.',
    type: 'Technical',
  },
  {
    id: 2,
    title: 'Bunker Dilemma',
    description: 'Explore the mysteries of the abandoned bunker.',
    round1: 'Round 1: Guided tour of the bunker and history lesson.',
    round2: 'Round 2: Solve puzzles to uncover the bunker\'s secrets.',
    type: 'Technical',
  },
  {
    id: 3,
    title: 'Cyborgs',
    description: 'Learn about the future of AI and cyborg technology.',
    round1: 'Round 1: AI and cyborg technology seminar.',
    round2: 'Round 2: Hands-on workshop on building AI models.',
    type: 'Technical',
  },
  {
    id: 4,
    title: 'Art Exhibition',
    description: 'Experience a showcase of artistic talents.',
    round1: 'Round 1: AI and cyborg technology seminar.',
    round2: 'Round 2: Hands-on workshop on building AI models.',
    type: 'Non-Technical',
  },
  {
    id: 5,
    title: 'Music Concert',
    description: 'Enjoy a night of live music performances.',
    round1: 'Round 1: AI and cyborg technology seminar.',
    round2: 'Round 2: Hands-on workshop on building AI models.',
    type: 'Non-Technical',
  },
];

const Card = () => {
  const [isEventCardVisible, setEventCardVisibility] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openEventCard = (event) => {
    setSelectedEvent(event);
    setEventCardVisibility(true);
  };

  const closeEventCard = () => {
    setSelectedEvent(null);
    setEventCardVisibility(false);
  };

  const technicalEvents = events.filter((event) => event.type === 'Technical');
  const nonTechnicalEvents = events.filter((event) => event.type === 'Non-Technical');

  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <style>
        {`
          @keyframes gradientBorder {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-xl font-semibold text-slate-200 mb-4">TECHNICAL EVENTS</h2>
        <div className="grid grid-cols-3 gap-14">
          {technicalEvents.map((event) => (
            <div key={event.id} className="relative group">
              <div
                className="absolute -inset-1 rounded-lg "
                style={{
                  backgroundImage: 'linear-gradient(90deg, #3182CE, #93C5FD)',
                  backgroundSize: '400% 100%',
                  animation: 'gradientBorder 4s linear infinite',
                  borderRadius: '20px',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #3182CE, #93C5FD, #3182CE)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #3182CE, #93C5FD)'}
              />
              <div className="relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col space-y-4 h-110 w-96">
                <div className="h-80 w-80 flex justify-center">
                  <p className="text-slate-200 font-[zeniq] w-full">{event.title}</p>
                  <p className="text-slate-200 w-full">{event.description}</p>
                  <button className="text-slate-200 mt-4" onClick={() => openEventCard(event)}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="text-xl font-semibold text-slate-200 mb-4 mt-8">NON-TECHNICAL EVENTS</h2>
        <div className="grid grid-cols-3 gap-14">
          {nonTechnicalEvents.map((event) => (
            <div key={event.id} className="relative group">
              <div
                className="absolute -inset-1 rounded-lg "
                style={{
                  backgroundImage: 'linear-gradient(90deg, #3182CE, #93C5FD)',
                  backgroundSize: '400% 100%',
                  animation: 'gradientBorder 4s linear infinite',
                  borderRadius: '20px',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #3182CE, #93C5FD, #3182CE)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(90deg, #3182CE, #93C5FD)'}
              />
              <div className="relative px-7 py-6 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col space-y-4 h-110 w-96">
                <div className="h-80 w-80 flex justify-center">
                  <p className="text-slate-200 font-[zeniq] w-full">{event.title}</p>
                  <p className="text-slate-200 w-full">{event.description}</p>
                  <button className="text-slate-200 mt-4" onClick={() => openEventCard(event)}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isEventCardVisible && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 w-96 rounded-lg shadow-lg">
           
            <EventCard onClose={closeEventCard} event={selectedEvent} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
