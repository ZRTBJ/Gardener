import beet from "./beet.svg";
import carrot from "./carrot.svg";
import garlic from "./garlic.svg";
import leek from "./leek.svg";
import lettuce from "./lettuce.svg";
import onion from "./onion.svg";
import radish from "./radish.svg";
import spinach from "./spinach.svg";
import peas from "./peas.svg";
import tomato from "./tomato.svg";
import artichoke from "./artichoke.svg";
import arugula from "./arugula.svg";
import asparagus from "./asparagus.svg";
import beans from "./beans.svg";
import bokchoy from "./bok_choy_new.svg";
import broccoli from "./broccoli.svg";
import brussels from "./brussels_sprouts.svg";
import cabbage from "./cabbage.svg";
import cardoon from "./cardoon.svg";
import cauliflower from "./cauliflower.svg";
import celeriac from "./Celeriac.svg";
import celery from "./celery.svg";
import collard from "./collard_greens.svg";
import mustard from "./mustard_greens.svg";
import corn from "./corn.svg";
import cress from "./cress.svg";
import cucamelon from "./Cucamelon.svg";
import cucumber from "./cucumber.svg";
import edamame from "./edamame.svg";
import eggplant from "./eggplant.svg";
import endive from "./endive.svg";
import fennel from "./fennel.svg";
import gourds from "./gourds.svg";
import jalapeno from "./jalapeno_peppers.svg";
import kale from "./kale.svg";
import kohlrabi from "./kohlrabi.svg";
import mache from "./mache.svg";
import melons from "./melons.svg";
import mizuna from "./mizuna_greens.svg";
import mushroom from "./mushrooms.svg";
import okra from "./okra.svg";
import orach from "./orach.svg";
import parsnip from "./parsnip.svg";
import peppers from "./peppers.svg";
import potato from "./potato.svg";
import pumpkin from "./pumpkin.svg";
import purslane from "./purslane.svg";
import quinoa from "./quinoa.svg";
import radicchio from "./radicchio.svg";
import rhubarb from "./rhubarb.svg";
import salsify from "./salsify.svg";
import scallions from "./scallions.svg";
import soybeans from "./soybeans.svg";
import squash from "./squash.svg";
import sweetpotato from "./sweet_potato.svg";
import swisschard from "./swiss_chard.svg";
import tatsoi from "./tatsoi.svg";
import tomatillo from "./Tomatillo.svg";
import turnip from "./turnip.svg";
import zucchini from "./zucchini.svg";
import rutabaga from "./rutabaga.svg";

const sources = {
  beet,
  carrot,
  garlic,
  squash,
  leek,
  onion,
  radish,
  spinach,
  peas,
  tomato,
  artichoke,
  arugula,
  asparagus,
  beans,
  bokchoy,
  broccoli,
  brussels,
  cabbage,
  cardoon,
  cauliflower,
  celeriac,
  celery,
  collard,
  corn,
  cress,
  cucamelon,
  cucumber,
  edamame,
  eggplant,
  endive,
  fennel,
  mustard,
  garlic,
  gourds,
  jalapeno,
  kale,
  kohlrabi,
  leek,
  lettuce,
  mache,
  melons,
  mizuna,
  mushroom,
  okra,
  onion,
  orach,
  parsnip,
  peas,
  peppers,
  potato,
  pumpkin,
  purslane,
  quinoa,
  radicchio,
  radish,
  rhubarb,
  rutabaga,
  salsify,
  scallions,
  soybeans,
  spinach,
  sweetpotato,
  swisschard,
  tatsoi,
  tomatillo,
  tomato,
  turnip,
  zucchini,
};

const getVegetableImageSrc = (plantName) => {
  return sources[plantName.toLowerCase()];
};

export default getVegetableImageSrc;
