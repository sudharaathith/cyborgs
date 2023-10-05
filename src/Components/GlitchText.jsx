import React from 'react';

const GlitchText = () => {
  return (
    <div className="bg-black font-sans italic">
      <div className="container absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="glitch text-glitch">
          <span data-text="ELISABÉTH">ELISABÉTH</span>
        </div>
        <div className="glow text-glow">ELISABÉTH</div>
        <p className="subtitle text-subtitle">IMPRACTICAL DEVELOPER</p>
      </div>
      <div className="scanlines overflow-hidden mix-blend-difference">
        <div className="scanlines-content"></div>
      </div>
    </div>
  );
};

export default GlitchText;
