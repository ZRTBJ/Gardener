import asphalt_paver from "./asphalt_paver.svg";
import brick_paver from "./brick_paver.svg";
import concrete_paver from "./concrete_paver.svg";
import curved_paver_asphalt from "./curved_paver_asphalt.svg";
import curved_paver_dirt from "./curved_paver_dirt.svg";
import curved_paver_grass from "./curved_paver_grass.svg";
import curved_paver_gravel from "./curved_paver_gravel.svg";
import curved_paver_stone from "./curved_paver_stone.svg";
import curved_paver_new from "./curved_paver_new.svg";
import dirt_path from "./dirt_path.svg";
import flagstone_paver from "./flagstone_paver.svg";
import grass from "./grass.svg";
import gravel_path from "./gravel_path.svg";
import mulchpaverfebruary from "./mulchpaverfebruary.svg";
import plastic_paver_black from "./plastic_paver_black.svg";
import plastic_paver_red from "./plastic_paver_red.svg";
import plastic_paver_white from "./plastic_paver_white.svg";
import soil from "./soil.svg";
import stone_paver from "./stone_paver.svg";
import stream from "./stream.svg";

const sources = {
  asphalt_paver,
  brick_paver,
  concrete_paver,
  curved_paver_asphalt,
  curved_paver_dirt,
  curved_paver_grass,
  curved_paver_gravel,
  curved_paver_stone,
  curved_paver_new,
  dirt_path,
  flagstone_paver,
  grass,
  gravel_path,
  mulchpaverfebruary,
  plastic_paver_black,
  plastic_paver_red,
  plastic_paver_white,
  soil,
  stone_paver,
  stream,
};

const getHerbImageSrc = (herbName) => {
  return sources[herbName.toLowerCase()];
};

export default getHerbImageSrc;
