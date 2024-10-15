import lemon from "./lemon.svg";
import lime from "./lime.svg";
import mango from "./mango.svg";
import oranges from "./oranges.svg";
import papaya from "./papaya.svg";
import passiflora from "./passiflora.svg";
import passionfruit from "./passionfruit.svg";
import tropicals from "./tropicals.svg";

const sources = {
  lemon,
  lime,
  mango,
  oranges,
  papaya,
  passiflora,
  passionfruit,
  tropicals,
};

const getTropicalImageSrc = (tropicalName) => {
  return sources[tropicalName.toLowerCase()];
};

export default getTropicalImageSrc;
