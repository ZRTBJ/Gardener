import beehive from "./beehive.svg";
import bunny from "./bunny.svg";
import cat from "./cat.svg";
import chicken from "./chicken.svg";
import cow from "./cow.svg";
import dog from "./dog.svg";
import duck from "./duck.svg";
import goat from "./goat.svg";
import goose from "./goose.svg";
import horse from "./horse.svg";
import llama from "./llama.svg";
import pig from "./pig.svg";
import sheep from "./sheep.svg";

const sources = {
  beehive,
  bunny,
  cat,
  chicken,
  cow,
  dog,
  duck,
  goat,
  goose,
  horse,
  llama,
  pig,
  sheep,
};

const getAnimalImageSrc = (animalName) => {
  return sources[animalName.toLowerCase()];
};

export default getAnimalImageSrc;
