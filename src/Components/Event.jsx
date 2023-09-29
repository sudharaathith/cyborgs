import React from 'react'
import Card from './Card'
import Caroussel from './Caroussel'
import { v4 as uuidv4 } from "uuid";
import Image from './Image';

function Event() {
  const slides = [
    
    <Card eventname="THE BUNKER DILEMMA" img={<Image/>}/>,
    <Card eventname="CODE MYSTIQUE" img={<Image/>}/>,
    <Card eventname="PAPER PORTICO" img={<Image/>}/>,
    <Card eventname="CINEASTE" img={<Image/>}/>,
    <Card eventname="CYBORG LEAGUE" img={<Image/>}/>
  ];

  return (
    <div className="flex flex-col justify-items-center min-h-screen">
      {/*
      <Card eventname="THE BUNKER DILEMMA"/>
      <Card eventname="EVENT THERILA"/>
      <Card eventname="EVENT THERILA"/>
      <Card eventname="EVENT THERILA"/>
      <Card eventname="EVENT THERILA"/>*/}
      <div>
        <Caroussel
          slides={slides}
          height="500px"
          width="100%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
    </div>
  );
}

export default Event;
