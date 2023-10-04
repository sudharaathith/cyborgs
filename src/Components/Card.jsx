import React, { useState } from "react";
import EventCard from "./EventCard";
import { delay, motion, stagger } from "framer-motion";
import TextChanger from "./TextChanger";
import poster from '../Image/bunker.png'

const events = [
  {
    id: 1,
    title: "Paper Portico",
    description: "Show your craftmanship and presentation abilities in 'Paper Portico' as you express your opinions on grossing topics.",
    round1: "Round 1: Written test on algorithms and data structures.",
    round2: "Round 2: Live coding challenge on a real-world problem.",
    type: "Technical",
    posterUrl: {poster},
  },
  {
    id: 2,
    title: "The Bunker Dilemma",
    description: "Your life is on the line. You are provided with a chance to negotiate for your survival. Solve 'The bunker dilemma' and be the last person standing.",
    round2: "Round 2:introduces psychological trials, further pushing contestants to their limits",
    type: "Non-Technical",
  },
  {
    id: 3,
    title: "Code Mystique",
    description: "A Tech Fest without a coding event? Do not worry,coding enthusiasts. 'Code Mystique' is here to put your technical skills to test as you race against time.",
    round1: "Round 1: 'SHOT-TWISTER,' teams of 2-4 members compete by delivering tongue twisters with water in their mouths, aiming for clarity to earn points.",
    round2: "Round 2: 'Pseudo hunt,'' narrows it down to 5 teams. They answer questions to receive pseudocode clues, leading to the next step in a chain. The final clue guides teams to a coding challenge on platforms like HackerRank or CodeChef",
    type: "Technical",
  },
  {
    id: 4,
    title: "Cybrogs-League",
    description: "Attention all gamers. AFK for a long time? Jump into action with our Gaming event 'Cyborgs-League' and show them who is the boss.",
    round1: "Round 1:  teams compete in eliminator rounds until only two remain. ",
    round2: "Round 2:features a best-of-three format, where a team must win two out of three matches to emerge as the victor, while the other team takes the runner-up position. ",
    type: "Non-Technical",
  },
  {
    id: 5,
    title: "Cineaste",
    description: "Cinema is Art.Cinema Is Passion.Cinema Is Life.Calling all cinephiles to 'Cineaste', an audition where we review your film knowledge.",
    round1: "Round 1: It's an exciting opportunity for movie enthusiasts to demonstrate their passion and expertise.",
    round2: "Round 2: . It's an exciting opportunity for movie enthusiasts to demonstrate their passion and expertise.",
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
