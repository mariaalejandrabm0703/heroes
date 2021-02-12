import React, { useState } from "react";
import { HeroCard } from "../heros/HeroCard";
import { heroes } from "../../data/data";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = () => {
  const hero = heroes;

  const [input, setinput] = useState("");
  const [hero2, sethero2] = useState([]);

  const handleChange = (event) => {
    setinput(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    sethero2(getHeroesByName(input));
    setinput("");
  };

  return (
    <div>
      <h1 className="animate__animated animate__lightSpeedInLeft">
        Search Screen
      </h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4> Search Form </h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={input}
              placeholder="Find your hero"
              className="form-control"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="btn mt-1 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4> Results </h4>
          <hr />
          {hero2.length > 0
            ? hero2.map((hero) => (
                <div className="mt-2" key={hero.id}>
                  <HeroCard key={hero.id} {...hero} />
                </div>
              ))
            : hero.map((hero) => (
                <div className="mt-2" key={hero.id}>
                  <HeroCard key={hero.id} {...hero} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
