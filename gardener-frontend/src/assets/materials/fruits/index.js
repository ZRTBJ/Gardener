import apple from "./apple.svg";
import apricot from "./apricot.svg";
import aronia from "./aronia.svg";
import avacado from "./avacado.svg";
import black_currants from "./black_currants.svg";
import blackberries from "./blackberries.svg";
import blueberries from "./blueberries.svg";
import cantaloupe from "./cantaloupe.svg";
import elderberry from "./elderberry.svg";
import figs from "./figs.svg";
import fruit_cherry_tree from "./fruit_cherry_tree.svg";
import grapefruit from "./grapefruit.svg";
import grapes from "./grapes.svg";
import guava from "./guava.svg";
import honeyberry from "./honeyberry.svg";
import jujube from "./jujube.svg";
import juliet_cherry from "./juliet_cherry.svg";
import kiwi from "./kiwi.svg";
import kumquat from "./kumquat.svg";
import loquat from "./loquat.svg";
import mayhaw from "./mayhaw.svg";
import medlar from "./medlar.svg";
import mulberry from "./mulberry.svg";
import nectarine from "./nectarine.svg";
import olive from "./olive.svg";
import paw_paw from "./paw_paw.svg";
import peaches from "./peaches.svg";
import pears from "./pears.svg";
import persimmon from "./persimmon.svg";
import plums from "./plums.svg";
import pluot from "./pluot.svg";
import pomegranate from "./pomegranate.svg";
import quince from "./quince.svg";
import raspberries from "./raspberries.svg";
import strawberries from "./strawberries.svg";
import watermelon from "./watermelon.svg";

const sources = {
  apple,
  apricot,
  aronia,
  avacado,
  black_currants,
  blackberries,
  blueberries,
  cantaloupe,
  elderberry,
  figs,
  fruit_cherry_tree,
  grapefruit,
  grapes,
  guava,
  honeyberry,
  jujube,
  juliet_cherry,
  kiwi,
  kumquat,
  loquat,
  mayhaw,
  medlar,
  mulberry,
  nectarine,
  olive,
  paw_paw,
  peaches,
  pears,
  persimmon,
  plums,
  pluot,
  pomegranate,
  quince,
  raspberries,
  strawberries,
  watermelon,
};

const getFruitImageSrc = (herbsName) => {
  return sources[herbsName.toLowerCase()];
};

export default getFruitImageSrc;
