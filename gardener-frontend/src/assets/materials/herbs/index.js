import agastache from "./agastache.svg";
import angelica from "./angelica.svg";
import anise from "./anise.svg";
import bachelors_buttons from "./bachelors_buttons.svg";
import basil from "./basil.svg";
import beebalm from "./beebalm.svg";
import borage from "./borage.svg";
import caraway from "./caraway.svg";
import catnip from "./catnip.svg";
import chervil from "./chervil.svg";
import chives from "./chives.svg";
import cilantro from "./cilantro.svg";
import cumin from "./cumin.svg";
import dill from "./dill.svg";
import echinacea from "./echinacea.svg";
import fenugreek from "./fenugreek.svg";
import hyssop from "./hyssop.svg";
import lemon_balm from "./lemon_balm.svg";
import lemon_mint from "./lemon_mint.svg";
import lemongrass from "./lemongrass.svg";
import licorice from "./licorice.svg";
import lovage from "./lovage.svg";
import marjoram from "./marjoram.svg";
import marshmallow from "./marshmallow.svg";
import mibuna_mustard_seeds from "./mibuna_mustard_seeds.svg";
import mint from "./mint.svg";
import mugwort from "./mugwort.svg";
import oregano from "./oregano.svg";
import parsley from "./parsley.svg";
import pennyroyal from "./pennyroyal.svg";
import peppermint from "./peppermint.svg";
import ragwort from "./ragwort.svg";
import rosemary from "./rosemary.svg";
import sage from "./sage.svg";
import salad_burnet from "./salad_burnet.svg";
import sorrel from "./sorrel.svg";
import spearmint from "./spearmint.svg";
import tarragon from "./tarragon.svg";
import thyme from "./thyme.svg";
import valerian from "./valerian.svg";

const sources = {
  agastache,
  angelica,
  anise,
  bachelors_buttons,
  basil,
  beebalm,
  borage,
  caraway,
  catnip,
  chervil,
  chives,
  cilantro,
  cumin,
  dill,
  echinacea,
  fenugreek,
  hyssop,
  lemon_balm,
  lemon_mint,
  lemongrass,
  licorice,
  lovage,
  marjoram,
  marshmallow,
  mibuna_mustard_seeds,
  mint,
  mugwort,
  oregano,
  parsley,
  pennyroyal,
  peppermint,
  ragwort,
  rosemary,
  sage,
  salad_burnet,
  sorrel,
  spearmint,
  tarragon,
  thyme,
  valerian,
};

const getHerbImageSrc = (herbName) => {
  return sources[herbName.toLowerCase()];
};

export default getHerbImageSrc;
