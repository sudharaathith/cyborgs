import { Carousel } from 'react-responsive-carousel';
import { config } from "react-spring";
import React from "react";
import { useState, useEffect } from "react";

const Caroussel = (props) => {
  const table = props.slides.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [slides] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel>
        {props.slides}
      </Carousel>
    </div>
  );
};

export default Caroussel;
