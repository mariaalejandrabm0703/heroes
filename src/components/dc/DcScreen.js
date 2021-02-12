import React from "react";
import { HeroList } from "../heros/HeroList";

export const DcScreen = () => {
  return (
    <div>
      <h1 className="animate__animated animate__lightSpeedInLeft">Dc Comics</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  );
};
