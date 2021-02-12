import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHerosByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  // const heroes = getHeroesByPublisher(publisher);
  // se utiliza el memo para memorizar los
  //heroes sin tener que volver a consultarlos
  // solo obtener si el publisher cambia
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row justify-content-start animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <div className="col-6" key={hero.id}>
          <HeroCard key={hero.id} {...hero} />
        </div>
      ))}
    </div>
  );
};
