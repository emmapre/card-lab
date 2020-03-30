import React, { useState } from "react";
import "./styles.css";
import { Card } from "./Card";
import { ClickedCard } from "./ClickedCard";

export default function App() {
  const [clicked, setClicked] = useState(false);

  const handleOnClick = () => {
    setClicked(true);
  };

  return (
    <div className="App">
      <div>
        {!clicked && (
          <Card
            headline="Lemon"
            emoji="🍋"
            text="This is a really tasty fruit."
            buttonText="Order now"
            cardClass="lemon"
            onClick={handleOnClick}
          />
        )}
        {clicked && (
          <ClickedCard headline="Lemon" emoji="🍋" cardClass="lemon" />
        )}
      </div>
      {/* <div>
        <Card
          headline="Rocket"
          emoji="🚀"
          text="Join us in outer space."
          buttonText="Book a seat"
          cardClass="rocket"
          onClick={handleOnClick}
        />
        <ClickedCard headline="Rocket" emoji="🚀" cardClass="rocket" />
      </div>
      <div>
        <Card
          headline="Doggy"
          emoji="🐶"
          text="Hello, do you want to be friends?"
          buttonText="Adopt me"
          cardClass="puppy"
          onClick={handleOnClick}
        />
        <ClickedCard headline="Doggy" emoji="🐶" cardClass="puppy" />
      </div> */}
    </div>
  );
}

// 🚀🐶
