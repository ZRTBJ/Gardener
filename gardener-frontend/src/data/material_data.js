import getVegetableImageSrc from "../assets/materials/vegetables";

export const materialData = {
  vegetable: [
    {
      title: "Lettuce",
      type: "vegetable",
      imageSrc: "lettuce",
      width: 30,
      height: 30,
    },
    {
      title: "Carrot",
      type: "vegetable",
      imageSrc: "carrot",
      width: 30,
      height: 30,
    },
    {
      title: "Leek",
      type: "vegetable",
      imageSrc: "leek",
      width: 30,
      height: 30,
    },
    {
      title: "Beet",
      imageSrc: "beet",
      type: "vegetable",
      width: 30,
      height: 30,
    },
  ],
};

export const getImageSrc = (type, title) => {
  switch (type) {
    case "vegetable":
      // materialData.vegetable.forEach((item) => {
      //   if (item.title === title) return getVegetableImageSrc(item.imageSrc);
      // });
      return getVegetableImageSrc(title);
    // break;

    default:
      return getVegetableImageSrc(title);
    // break;
  }
};

export default materialData;
