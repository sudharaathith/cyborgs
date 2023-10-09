import React, { useState } from "react";
import EventCard from "./EventCard";
import { delay, motion, stagger } from "framer-motion";
import TextChanger from "./TextChanger";
// import poster from '../Image/bunker.png'
// import poster1 from '../Image/paperportico.png'
// import poster2 from '../Image/cineaste.png'
// import poster3 from '../Image/codemystique.png'
// import poster4 from '../Image/cyborgsleague.png'

const events = [
  {
    id: 1,
    title: "Paper Portico",
    description: "Show your craftmanship and presentation abilities in 'Paper Portico' as you express your opinions on grossing topics.",
    round: () => (
      <div>
      Team Formation: <br />
    1. The team can have a maximum of 3 participants from B.Tech/B. E/ Diploma. <br />
    2. No participants can be part of more than one team. <br />
    3. It is not necessary that the participants forming a team should be from the same college. <br />
    <br />
    Basic instructions: <br />
    1.All topics related to recent trends and technologies are invited. <br />
    2.Mail your abstracts to cyborgs2k23@gmail.com on or before October 21. <br />
    3.The notification of acceptance of abstracts will be sent to you via mail <br />
    4. The selected teams have to bring a soft copy of the paper in a CD/USB Device and 2 hard copies of the paper at the time of presentation.<br />
    5.The decision of the judges and the event heads shall be treated as final. <br />
    6.No restrictions on presentation format <br />
    7.Copying from the internet is not encouraged. <br />
    8.Evaluation based on relevance, content, uniqueness, and application. <br />
    9.The abstract should not exceed 250 words and must be in word/pdf format<br />
    <br />
    Presentation rules: <br />
    1.The paper submitted will have to be presented during the event. <br />
    2.Hard copies of the same are to be submitted before presentation to Judges <br />
    3. The maximum duration of the presentation is 12 minutes <br />
    4. The participants will have to present their papers in MS PowerPoint (ppt) format only.
    </div>),

    round2: "Round 2: Live coding challenge on a real-world problem.",
    type: "Technical",
    posterUrl:'/Posters/paperportico-min.png',
  },
  {
    id: 2,
    title: "The Bunker Dilemma",
    description: "Your life is on the line. You are provided with a chance to negotiate for your survival. Solve 'The bunker dilemma' and be the last person standing.",
    round:  () => (
      <div>'CYBORGS 2K23: Survival Challenge - The Bunker Dilemma' immerses participants in a heart-pounding scenario where a nuclear threat looms.<br /><br />
      Round 1: <br />20 contestants must vie for just 10 bunker spots by artfully persuading organizers of their unique qualifications, whether they excel in engineering, medicine, leadership, or problem-solving. <br /><br />Round 2<br /> introduces psychological trials, further pushing contestants to their limits. This event is an electrifying blend of strategic thinking, persuasive communication, and emotional resilience. To secure a coveted spot in the bunker, participants must not only demonstrate their practical prowess but also prove their mettle under intense psychological pressure, making it an unforgettable and thrilling experience."</div>),
    type: "Non-Technical",
    posterUrl: '/Posters/bunker.png',
  },
  {
    id: 3,
    title: "Code Mystique",
    description: "A Tech Fest without a coding event? Do not worry,coding enthusiasts. 'Code Mystique' is here to put your technical skills to test as you race against time.",
    round: () => (
      <div>Code Mystique - CYBORGS 2K23 offers a technical group event with two exciting rounds.<br /><br />
      Round 1 - PuzzleFest:<br />
      1.Each team will consist of three members.<br />
      2.Teams will be provided with three different puzzles to solve.<br />
      3.Work together to solve the puzzles.<br />
      4.There will be a set time limit for each round.<br />
      5.The top five teams with the fastest puzzle-solving times will advance to the next round.<br />
      Round 2 - CodeMystique:<br /><br />
      1.A total of 5 teams will be shortlisted from the first round.<br />
      2.Initially, a question will be presented to all teams simultaneously. The team that correctly answers first will be awarded the first clue.<br />
      3.Each clue provided will be in the form of pseudocode. Solving the pseudocode will lead you to the answer, which in turn contains the clue to the next pseudocode. <br />
      4.The final clue in the chain will lead your team to a challenging problem hosted on platforms like HackerRank or CodeChef. Your team must work together to write code and pass all the test case<br /></div>),
    round2: "Round 2: 'Pseudo hunt,'' narrows it down to 5 teams. They answer questions to receive pseudocode clues, leading to the next step in a chain. The final clue guides teams to a coding challenge on platforms like HackerRank or CodeChef",
    type: "Technical",
    posterUrl: '/Posters/codemystique-min.png',
  },
  {
    id: 4,
    title: "Cybrogs-League",
    description: "Attention all gamers. AFK for a long time? Jump into action with our Gaming event 'Cyborgs-League' and show them who is the boss.",
    round: () => (
      <div>Cyborgs League - Two Games Will be conducted and Participants will be able to choose between them<br />
      <br />
      GAME 1:Rocket League<br />
      BASIC INSTRUCTIONS:<br />
      1.The tournament format adapts to the number of participants  with the potential for 2v2 matches for larger groups.<br />
      2.Each match has a 5 to 7-minute time limit, ensuring quick and intense gameplay.<br />
      3.While laptops and controllers are provided, participants are welcome to bring their own equipment.<br />
      <br />
      EVENT FORMATION:<br />
      Round 1- Teams compete in eliminator rounds until only two remain.  <br />
      Round 2 - features a best-of-three format, where a team must win two out of three matches to emerge as the victor, while the other team takes the runner-up position. It's an opportunity for Rocket League enthusiasts to demonstrate their prowess and claim the title at CYBORGS 2K23.<br />
      <br />
      GAME 2:FIFA<br />
      BASIC INSTRUCTIONS:<br />
      1.Fifa will be conducted with Limited Slots with 36 Players.<br />
      2.Matches will be a solo 1v1 .Teams can be present but will have to play individual and possibly against each other.<br />
      3.Each match will be around 8 to 10 mins.Laptops and controller will be provided. If the participants are willing to bring their own laptops or controllers, well and gud.<br />
      4.Prize will be awarded on team basis.If Players from the same team reach the finals then the first prize will be awarded to that team and the 3rd player’s team will receive the 2nd Prize.<br />
      <br />
      EVENT FORMATION:<br />
      Round 1-This will be a knockout round.36 Players will go head to head in 1v1 matches.18 Players will advance to the next round.<br />
      Round 2-Remaining  18 Players will go head to head in 1v1.Not only do they have to win the match but the objective would be score much goals as possible.The Goals of the winners of these matches will be calculated and Top 2 Leading Goal scorers will be advance to the final <br />
      Round 3-It will be a final 1V1 match where winner takes all the glory and reward.</div>),
    round2: "Round 2:features a best-of-three format, where a team must win two out of three matches to emerge as the victor, while the other team takes the runner-up position. ",
    type: "Non-Technical",
    posterUrl: '/Posters/cyborgsleague-min.png',
  },
  {
    id: 5,
    title: "Cineaste",
    description: "Cinema is Art.Cinema Is Passion.Cinema Is Life.Calling all cinephiles to 'Cineaste', an audition where we review your film knowledge.",
    round: () => (
      <div>Team Rules :
        <br />
      1.Contestants need to form a team of minimum 2 members and a maximum of 3.<br />
      2.All the participants must bring ID cards along with them.<br />
      3.Contestants will have to use their theatrical knowledge and showcase their abilities through a series of various questions under different categories.<br />
      <br />
      Basic instructions:<br />
      1.Multiple rounds of challenging questions, including audio and visual rounds.<br />
      2.Participants should not indulge in any cheating activity and if found so, they will be disqualified. <br />
      3.There is time limit for each question to answer.<br />
      4.The decisions of judges will be final.<br />
      5.All the Rounds will be conducted on 21 st october 2023.<br />
      <br />
      Event Instuctions:<br />
      ROUND 1 :  Teams will have to connect the clues displayed to them in    the form of pictures and find the respective film.<br />
      ROUND 2:  It consist of 2 phases, i: dumb charades ii: find the movie using  the given audio.<br />
      ROUND 3: Find the film using the given frames.<br />
      ROUND 4: Revealed during the day of event.</div>),
    round2: "Round 2: . It's an exciting opportunity for movie enthusiasts to demonstrate their passion and expertise.",
    type: "Non-Technical",
    posterUrl: '/Posters/cineaste-min.png',
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
          <TextChanger textArray={['EVENTS','EVENT','Events']} duration={1000} />
        </motion.h1>
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-40 lg:grid-cols-3 gap-16">
          {nonTechnicalEvents.map((event, id) => (
            <motion.div
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
              <img src={event.posterUrl} className=" absolute opacity-70 top-0 left-0 w-full h-full rounded-lg" />
              <motion.div variants={arrow} transition={{type:"spring", stiffness:99, damping:17}} className=" absolute top-0 left-0 w-full h-full flex flex-col bg-black/60 backdrop-blur-sm ">
              <p className="font-[UnderStation] text-blue-300 text-2xl text-center mt-11">
                {event.title}
              </p>
              <p className="text-slate-200 text-lg text-center mt-8 mb-4 font-[Stylish-Regular] p-3">
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
        <div className="grid justify-items-center mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 max-sm:gap-16">
          {technicalEvents.map((event, id) => (
            <motion.div
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
              <img src={event.posterUrl} className=" absolute opacity-70 top-0 left-0 w-full h-full rounded-lg" />
              <motion.div variants={arrow} transition={{type:"spring", stiffness:99, damping:17}} className=" absolute top-0 left-0 w-full h-full flex flex-col bg-black/60 backdrop-blur-sm ">
              <p className="font-[UnderStation] text-blue-300 text-2xl text-center mt-11">
                {event.title}
              </p>
              <p className="text-slate-200 font-[Stylish-Regular] text-lg text-center mt-8 mb-4 p-3">
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
          <div className=" p-8 w-full md:w-96 rounded-lg shadow-lg">
            <EventCard onClose={closeEventCard} event={selectedEvent} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
