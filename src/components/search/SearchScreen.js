import React, { useState } from "react";
import queryString from "query-string";
import { HeroCard } from "../heros/HeroCard";
import { heroes } from "../../data/data";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { useLocation } from "react-router-dom";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const hero = heroes;
  const [input, setinput] = useState(q);
  const [hero2, sethero2] = useState(() => getHeroesByName(input));

  const handleChange = (event) => {
    setinput(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    sethero2([]);
    sethero2(getHeroesByName(input));
    history.push(`?q=${input}`);
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
          {hero2.length > 0 && q !== ""
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
