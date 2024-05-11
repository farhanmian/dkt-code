import { frameMap } from "./images-frame-data";

export const getBmiBracket = (normalHeight, weight) => {
  const height = `${Math.round(normalHeight / 5) * 5}cm`;

  const bmiBrackets = {
    "150cm": [
      { min: 31.8, max: 44, bracket: "THIN" },
      { min: 44, max: 56, bracket: "NORMAL" },
      { min: 56, max: 200, bracket: "OVERWEIGHT" },
    ],
    "155cm": [
      { min: 31.8, max: 44, bracket: "THIN" },
      { min: 44, max: 56, bracket: "NORMAL" },
      { min: 56, max: 200, bracket: "OVERWEIGHT" },
    ],
    "160cm": [
      { min: 30, max: 48, bracket: "THIN" },
      { min: 49, max: 64, bracket: "NORMAL" },
      { min: 65, max: 200, bracket: "OVERWEIGHT" },
    ],
    "165cm": [
      { min: 30, max: 50, bracket: "THIN" },
      { min: 50, max: 70, bracket: "NORMAL" },
      { min: 70, max: 200, bracket: "OVERWEIGHT" },
    ],
    "170cm": [
      { min: 30, max: 53, bracket: "THIN" },
      { min: 54, max: 74, bracket: "NORMAL" },
      { min: 75, max: 200, bracket: "OVERWEIGHT" },
    ],
    "175cm": [
      { min: 30, max: 57, bracket: "THIN" },
      { min: 58, max: 77, bracket: "NORMAL" },
      { min: 78, max: 200, bracket: "OVERWEIGHT" },
    ],
    "180cm": [
      { min: 30, max: 60, bracket: "THIN" },
      { min: 61, max: 81, bracket: "NORMAL" },
      { min: 81, max: 200, bracket: "OVERWEIGHT" },
    ],
    "185cm": [
      { min: 30, max: 63, bracket: "THIN" },
      { min: 64, max: 86, bracket: "NORMAL" },
      { min: 87, max: 200, bracket: "OVERWEIGHT" },
    ],
    "190cm": [
      { min: 30, max: 67, bracket: "THIN" },
      { min: 67, max: 90, bracket: "NORMAL" },
      { min: 90, max: 200, bracket: "OVERWEIGHT" },
    ],
    "195cm": [
      { min: 30, max: 70, bracket: "THIN" },
      { min: 71, max: 95, bracket: "NORMAL" },
      { min: 95, max: 200, bracket: "OVERWEIGHT" },
    ],
  };

  const brackets = bmiBrackets[height];
  if (!brackets) {
    return "Height not found";
  }

  const bracket = brackets.find((b) => weight >= b.min && weight < b.max);
  return bracket ? bracket.bracket : "Weight not in any bracket";
};

const bodyTypes = {
  // ---------------THIN-----------------
  "THIN-MALE": [
    {
      name: "Eminciated men",
      image: "/img/eminciated-men.png",
    },
    {
      name: "Thin men",
      image: "/img/thin-men.png",
    },
    {
      name: "Older men",
      image: "/img/older-men.png",
    },
  ],
  "THIN-FEMALE": [
    {
      name: "Eminciated women",
      image: "/img/eminciated-women.png",
    },
    {
      name: "Lithe women",
      image: "/img/lithe-women.png",
    },
    {
      name: "Normal women",
      image: "/img/normal-women.png",
    },
  ],

  // ---------------NORMAL-----------------
  "NORMAL-MALE": [
    {
      name: "Heavy men",
      image: "/img/heavy-men.png",
    },
    {
      name: "Masculine Base",
      image: "/img/masculine-base.png",
    },
    {
      name: "Muscular men",
      image: "/img/muscular-men.png",
    },
  ],
  "NORMAL-FEMALE": [
    {
      name: "Fitness women",
      image: "/img/fitness-women.png",
    },
    {
      name: "Tone women",
      image: "/img/tone-women.png",
    },
    {
      name: "Voluptuous women",
      image: "/img/voluptuous-women.png",
    },
  ],

  // ----------------OVERWEIGHT----------------
  "OVERWEIGHT-MALE": [
    {
      name: "lithe men",
      image: "/img/lithe-men.png",
    },
    {
      name: "Portly Men",
      image: "/img/portly-men.png",
    },
    {
      name: "Mass Body men",
      image: "/img/mass-body-men.png",
    },
  ],
  "OVERWEIGHT-FEMALE": [
    {
      name: "Heavy women",
      image: "/img/heavy-women.png",
    },
    {
      name: "Pear Figure women",
      image: "/img/pear-figure-women.png",
    },
    {
      name: "Stocky women",
      image: "/img/stocky-women.png",
    },
    {
      name: "Muscular women",
      image: "/img/muscular-women.png",
    },
  ],
};

export const getBodyType = (gender, bmi) => {
  const key = `${bmi.toUpperCase()}-${gender.toUpperCase()}`;
  console.log("key:", key);
  const bodyType = bodyTypes[key];
  return bodyType;
};

export const getFrameNumber = (bodyType, formHeight) => {
  const heightNumber = +formHeight.replace("cm", "");
  const height = `${Math.round(heightNumber / 5) * 5}cm`;

  const heightMap = frameMap[height];
  if (!heightMap) {
    throw new Error("Height not found");
  }

  const frameNumber = heightMap[bodyType];
  if (!frameNumber) {
    throw new Error("Description not found for given height");
  }

  return frameNumber;
};
