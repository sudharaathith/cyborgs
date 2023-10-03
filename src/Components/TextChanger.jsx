import React, { useState, useEffect, useRef } from "react";
import baffle from "baffle";

const TextChanger = ({ textArray, duration, className, delay=5000 }) => {
  const ref = useRef();
  let r = Math.floor(Math.random() * (textArray.length));

  useEffect(() => {
    let b = baffle(ref.current, {
      characters:"█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░> "
    });
    
    // Take care of some other stuff.
    function transition(result) {
      // Swap in new text and reveal over 1500ms.
      b.text((currentText) => result).reveal(duration);
    }

    const t = setInterval(() => {
      let t = Math.floor(Math.random() * (textArray.length));
      if(r === t){
        if(r === textArray.length - 1){
          t--;
        }
        else{
          t++;
        }
      }
      r = t;
      console.log(r)
      transition(textArray[r]);
    }, delay);
    return () => {
      clearInterval(t);
    };
  }, []);
  return (
    <div ref={ref} className={className}>
      {textArray[0]}
    </div>
  );
};

export default TextChanger;
