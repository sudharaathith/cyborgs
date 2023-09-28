import React from 'react'
import Card from '../Components/Card'
import Caroussel from '../Components/Caroussel'
import { v4 as uuidv4 } from "uuid";





function Event() {
  const slides = [
    {
      key: uuidv4(),
      content: <Card eventname="THE BUNKER DILEMMA"/>
    },
    {
      key: uuidv4(),
      content: <Card eventname="EVENT THERILA"/>
    },
    {
      key: uuidv4(),
      content: <Card eventname="EVENT THERILA"/>
    },
    {
      key: uuidv4(),
      content: <Card eventname="EVENT THERILA"/>
    },
    {
      key: uuidv4(),
      content: <Card eventname="EVENT THERILA"/>
    }
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
       height="1000px"
       width="100%"
       margin="0 auto"
       offset={2}
       showArrows={false}
      />
      </div>
     
  </div>

  )
}

export default Event