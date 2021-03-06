import React from "react";
import { HeroList } from "../heros/HeroList";

export const MarvelScreen = () => {
  return (
    <div>
      <h1 className="animate__animated animate__lightSpeedInLeft">
        Marvel Comics
      </h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
