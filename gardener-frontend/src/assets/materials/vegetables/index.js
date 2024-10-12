import beet from "./beet.svg";
import carrot from "./carrot.svg";
import garlic from "./garlic.svg";
import leek from "./leek.svg";
import lettuce from "./lettuce.svg";
import onion from "./onion.svg";
import radish from "./radish.svg";
import shovel from "./shovel.svg";
import spinach from "./spinach.svg";
import strawberry from "./strawberry.svg";
import peas from "./peas.svg";
import tomato from "./tomato.svg";

const sources = {
  beet,
  carrot,
  garlic,
  leek,
  lettuce,
  onion,
  radish,
  shovel,
  spinach,
  strawberry,
  peas,
  tomato,
};

const getVegetableImageSrc = (plantName) => {
  return sources[plantName.toLowerCase()];
};

export default getVegetableImageSrc;
