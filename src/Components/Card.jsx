import React, { useState } from "react";
import EventCard from "./EventCard";
import { delay, motion, stagger } from "framer-motion";
import TextChanger from "./TextChanger";
import poster from '../Image/bunker.png'

const events = [
  {
    id: 1,
    title: "Code Decode",
    description: "Join us for an exciting coding challenge!",
    round1: "Round 1: Written test on algorithms and data structures.",
    round2: "Round 2: Live coding challenge on a real-world problem.",
    type: "Technical",
    posterUrl: {poster},
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

const arrow = {
  initial: { opacity:0, borderTopLeftRadius:"100%", },
  animate: { opacity:1, borderTopLeftRadius: "0%", },
}

const Card = () => {
  const [isEventCardVisible, setEventCardVisibility] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [focus, setFoucus] = useState(null);

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
      <div className="  mb-20">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="font-bold text-slate-200 font-[UnderStation]  text-2xl sm:text-3xl text-center mb-16"
        >
          <TextChanger textArray={['TECHNICAL EVENTS','TECHNICAL EVENT','Technical Events']} duration={1000} />
        </motion.h1>
        <div className=" grid grid-cols mt-40 mx-auto gap-16 sm:gap-auto sm:grid-cols-2 justify-items-center">
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
              viewport={{ once: true, amount:.4 }}
              key={event.id}
              className="relative group w-72"
            >
            
              <motion.div initial="initial" whileHover="animate" animate={focus===event.id?"animate":"initial"} className="relative border rounded-lg overflow-hidden px-4 py-6 bg-transparent  bg-opacity-5 ring-1 leading-none flex flex-col h-96 "
              onHoverEnd={()=>{setFoucus(null)}}
              onClick={()=>{setFoucus(event.id)}}
              >
                {/* <div className="h-40 w-40 mx-auto mb-2">
                  <img src={event.posterUrl} alt={event.title} className="w-full h-full object-cover rounded-lg" />
                </div> */}
                <img src={poster} className=" absolute opacity-70 top-0 left-0 w-full h-full rounded-lg" />
                <motion.div variants={arrow} transition={{type:"spring", stiffness:99, damping:17}} className=" absolute top-0 left-0 w-full h-full flex flex-col bg-black/60 backdrop-blur-sm ">
                <p className="font-[UnderStation] text-blue-300 text-2xl text-center mt-11">
                  {event.title}
                </p>
                <p className="text-slate-200 text-lg text-center mt-8 mb-4">
                  {event.description}
                </p>
                <button
                  className="relative overflow-hidden mb-6 font-[UnderStation] text-white bg-gradient-to-r  p-3 rounded-lg self-center mt-auto text-lg"
                  onClick={() => openEventCard(event)}
                >
                  <span className="animate-pulse">View Details</span>
                </button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0}}
          className="font-bold text-slate-200 font-[UnderStation] text-2xl sm:text-3xl text-center mb-16 mt-40"
        >
          <TextChanger textArray={['NON-TECHNICAL EVENTS', 'NON TECHNICAL EVENTS', 'NON-TECHNICAL EVENT', 'NON TECHNICAL EVENT']} duration={1000}  />
        </motion.h2>
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-40 lg:grid-cols-3 gap-16 justify-center">
          {nonTechnicalEvents.map((event, id) => (
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
            viewport={{ once: true, amount:.4 }}
            key={event.id}
            className="relative group w-72"
          >
          
            <motion.div initial="initial" whileHover="animate" animate={focus===event.id?"animate":"initial"} className="relative border rounded-lg overflow-hidden px-4 py-6 bg-transparent  bg-opacity-5 ring-1 leading-none flex flex-col h-96 "
            onHoverEnd={()=>{setFoucus(null)}}
            onClick={()=>{setFoucus(event.id)}}
            >
              {/* <div className="h-40 w-40 mx-auto mb-2">
                <img src={event.posterUrl} alt={event.title} className="w-full h-full object-cover rounded-lg" />
              </div> */}
              <img src={poster} className=" absolute opacity-70 top-0 left-0 w-full h-full rounded-lg" />
              <motion.div variants={arrow} transition={{type:"spring", stiffness:99, damping:17}} className=" absolute top-0 left-0 w-full h-full flex flex-col bg-black/60 backdrop-blur-sm ">
              <p className="font-[UnderStation] text-blue-300 text-2xl text-center mt-11">
                {event.title}
              </p>
              <p className="text-slate-200 text-lg text-center mt-8 mb-4">
                {event.description}
              </p>
              <button
                className="relative overflow-hidden mb-6 font-[UnderStation] text-white bg-gradient-to-r  p-3 rounded-lg self-center mt-auto text-lg"
                onClick={() => openEventCard(event)}
              >
                <span className="animate-pulse">View Details</span>
              </button>
              </motion.div>
            </motion.div>
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
