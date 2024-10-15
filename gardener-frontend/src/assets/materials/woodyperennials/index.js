import arbor_vitae from "./arbor_vitae.svg";
import azaleas from "./azaleas.svg";
import bamboo from "./bamboo.svg";
import barberry from "./barberry.svg";
import boxwood from "./boxwood.svg";
import camellia from "./camellia.svg";
import cana_lily from "./cana_lily.svg";
import cherry_trees from "./cherry_trees.svg";
import conifer from "./conifer.svg";
import crepe_myrtle from "./crepe_myrtle.svg";
import cypress_golden_mop from "./cypress_golden_mop.svg";
import dwarf_alberta_spruce from "./dwarf_alberta_spruce.svg";
import euonymus from "./euonymus.svg";
import ferns from "./ferns.svg";
import holly from "./holly.svg";
import hydrangea from "./hydrangea.svg";
import leafy_tree_new from "./leafy_tree_new.svg";
import lilac_tree from "./lilac_tree.svg";
import oleanders from "./oleanders.svg";
import peonies from "./peonies.svg";
import rhododendrons from "./rhododendrons.svg";
import skip_laurel from "./skip_laurel.svg";
import spiky_bush from "./spiky_bush.svg";
import standard_bush from "./standard_bush.svg";
import standard_tree from "./standard_tree.svg";
import thuja_tree from "./thuja_tree.svg";

const sources = {
  arbor_vitae,
  azaleas,
  bamboo,
  barberry,
  boxwood,
  camellia,
  cana_lily,
  cherry_trees,
  conifer,
  crepe_myrtle,
  cypress_golden_mop,
  dwarf_alberta_spruce,
  euonymus,
  ferns,
  holly,
  hydrangea,
  leafy_tree_new,
  lilac_tree,
  oleanders,
  peonies,
  rhododendrons,
  skip_laurel,
  spiky_bush,
  standard_bush,
  standard_tree,
  thuja_tree,
};

const getWoodyImageSrc = (woodName) => {
  return sources[woodName.toLowerCase()];
};

export default getWoodyImageSrc;
