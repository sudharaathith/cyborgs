import React, { useState } from "react";
import EventCard from "./EventCard";
import { delay, motion, stagger } from "framer-motion";
import TextChanger from "./TextChanger";

const events = [
  {
    id: 1,
    title: "Code Decode",
    description: "Join us for an exciting coding challenge!",
    round1: "Round 1: Written test on algorithms and data structures.",
    round2: "Round 2: Live coding challenge on a real-world problem.",
    type: "Technical",
    posterUrl: "src/Image/Logo512.png",
  },
  {
    id: 2,
    title: "Bunker Dilemma",
    description: "Explore the mysteries of the abandoned bunker.",
    round1: "Round 1: Guided tour of the bunker and history lesson.",
    round2: "Round 2: Solve puzzles to uncover the bunker's secrets.",
    type: "Technical",
  },
  {
    id: 3,
    title: "Cyborgs",
    description: "Learn about the future of AI and cyborg technology.",
    round1: "Round 1: AI and cyborg technology seminar.",
    round2: "Round 2: Hands-on workshop on building AI models.",
    type: "Non-Technical",
  },
  {
    id: 4,
    title: "Art Exhibition",
    description: "Experience a showcase of artistic talents.",
    round1: "Round 1: AI and cyborg technology seminar.",
    round2: "Round 2: Hands-on workshop on building AI models.",
    type: "Non-Technical",
  },
  {
    id: 5,
    title: "Music Concert",
    description: "Enjoy a night of live music performances.",
    round1: "Round 1: AI and cyborg technology seminar.",
    round2: "Round 2: Hands-on workshop on building AI models.",
    type: "Non-Technical",
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

  const technicalEvents = events.filter((event) => event.type === "Technical");
  const nonTechnicalEvents = events.filter(
    (event) => event.type === "Non-Technical"
  );

  return (
    <div className="min-h-screen mt-40 flex flex-col justify-center relative overflow-hidden z-[70]">
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
      <div className="max-w-7xl mx-auto mb-20 p-4">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="font-bold text-slate-200 font-[UnderStation]  text-3xl text-center mb-16"
        >
          <TextChanger textArray={['TECHNICAL EVENTS']} duration={1000} />
        </motion.h1>
        <div className="mx-auto grid grid-cols mt-40 sm:grid-cols-2 md:mx-52 gap-16 justify-center">
          {technicalEvents.map((event, id) => (
            <motion.div
              drag
              dragConstraints={{
                top: -0,
                left: -0,
                right: 0,
                bottom: 0,
              }}
              initial={{ y: -100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 + id * 0.2 },
              }}
              viewport={{ once: true }}
              key={event.id}
              className="relative group"
            >
              <div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 transform scale-105"
                style={{
                  animation: "gradientBorder 4s linear infinite",
                  borderRadius: "20px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(90deg, #3182CE, #93C5FD, #3182CE)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(90deg, #3182CE, #93C5FD)")
                }
              />
              <div className="relative px-4 py-6 bg-black bg-opacity-70 ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col h-96 ">
                {/* <div className="h-40 w-40 mx-auto mb-2">
                  <img src={event.posterUrl} alt={event.title} className="w-full h-full object-cover rounded-lg" />
                </div> */}
                <p className="font-[UnderStation] text-glow-red text-2xl text-center mb-4">
                  {event.title}
                </p>
                <p className="text-slate-200 text-lg text-center mt-8 mb-4">
                  {event.description}
                </p>
                <button
                  className="relative overflow-hidden font-[UnderStation] text-white bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 hover:from-purple-400 hover:via-purple-500 hover:to-purple-600 p-3 rounded-lg self-center mt-auto text-lg"
                  onClick={() => openEventCard(event)}
                >
                  <span className="animate-pulse">View Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="font-bold text-slate-200 font-[UnderStation] text-3xl text-center mb-16 mt-40"
        >
          <TextChanger textArray={['NON-TECHNICAL EVENTS']} duration={1000} delay={1500} />
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-40 lg:grid-cols-3 gap-16 justify-center">
          {nonTechnicalEvents.map((event, id) => (
            <motion.div
              drag
              dragConstraints={{
                top: -0,
                left: -0,
                right: 0,
                bottom: 0,
              }}
              viewport={{ once: true }}
              key={event.id}
              initial={{ y: -100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3 + id * 0.2 },
              }}
              className="relative group"
            >
              <div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 transform scale-105"
                style={{
                  animation: "gradientBorder 4s linear infinite",
                  borderRadius: "20px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(90deg, #3182CE, #93C5FD, #3182CE)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background =
                    "linear-gradient(90deg, #3182CE, #93C5FD)")
                }
              />
              <div className="relative px-4 py-6 bg-black bg-opacity-70 ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col h-96">
                {/* <div className="h-40 w-40 mx-auto mb-2">
                  <img src={event.posterUrl} alt={event.title} className="w-full h-full object-cover rounded-lg" />
                </div> */}
                <p className="font-[UnderStation] text-glow-red text-2xl text-center mb-4">
                  {event.title}
                </p>
                <p className="text-cyan-200 text-center text-lg mb-4 mt-8">
                  {event.description}
                </p>
                <button
                  className="relative overflow-hidden text-white bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 hover:from-purple-400 hover:via-purple-500 hover:to-purple-600 p-3 rounded-lg self-center mt-auto font-[UnderStation] text-lg"
                  onClick={() => openEventCard(event)}
                >
                  <span className="animate-pulse">View Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {isEventCardVisible && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center z-[80]">
          <div className="bg-white p-8 w-full md:w-96 rounded-lg shadow-lg">
            <EventCard onClose={closeEventCard} event={selectedEvent} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
