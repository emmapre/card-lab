import React from "react";

import "./card.css";

export const Card = props => {
  const { headline, emoji, text, buttonText, cardClass, onClick } = props;

  return (
    <article className={`card ${cardClass}`}>
      <div className="title-div">
        <h1>{headline}</h1>
        <span className="emoji">{emoji}</span>
      </div>
      <div className="text-div">
        <p>{text}</p>
        <button onClick={onClick}>{buttonText.toUpperCase()}</button>
      </div>
    </article>
  );
};
