import arisaemas from "./arisaemas.svg";
import aroids from "./aroids.svg";
import cacti from "./cacti.svg";
import cannabis from "./cannabis.svg";
import carnivorous from "./carnivorous.svg";
import eucalyptus from "./eucalyptus.svg";
import orchids from "./orchids.svg";
import succulents from "./succulents.svg";
import tall_feather_grass from "./tall_feather_grass.svg";

const sources = {
  arisaemas,
  aroids,
  cacti,
  cannabis,
  carnivorous,
  eucalyptus,
  orchids,
  succulents,
  tall_feather_grass,
};

const getExoticImageSrc = (exoticName) => {
  return sources[exoticName.toLowerCase()];
};

export default getExoticImageSrc;
