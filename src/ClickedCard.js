import React from "react";
import 'clickedCard.css'

export const ClickedCard = props => {
  const { headline, emoji } = props;

  return (
    <article className="clicked-card lemon">
      <div className="top-div">
        <h1>{headline}</h1>
      </div>
      <div className="bottom-div">
        <span className="emoji-clicked">{emoji}</span>
      </div>
    </article>
  );
};
