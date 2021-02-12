import { heroes } from "../data/data";

export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
