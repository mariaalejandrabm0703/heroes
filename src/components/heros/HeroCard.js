import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card h-100" style={{ maxWidth: 540 }}>
      <div className="row g-2">
        <div className="col-md-6">
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="card-img animate__animated animate__pulse"
            alt={superhero}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title"> {superhero} </h5>
            <p className="card-text"> {alter_ego} </p>

            {alter_ego !== characters && (
              <p className="card-text text-truncate"> {characters} </p>
            )}

            <p className="card-text">
              <small className="text-muted"> {first_appearance} </small>
            </p>

            <Link to={`./hero/${id}`}>Más...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
