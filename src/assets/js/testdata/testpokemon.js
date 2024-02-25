import {
  sausage,
  apple,
  egg,
  herb,
  corn,
  soybean,
  honey,
  leek,
  milk,
  oil,
  tail,
  tomato,
  cacao,
  potato,
  mushroom,
  ginger,
  belue,
  bluk,
  cheri,
  chesto,
  durin,
  figy,
  grepa,
  leppa,
  lum,
  mago,
  oran,
  pamtre,
  pecha,
  persim,
  rawst,
  sitrus,
  wiki,
  yache,
} from "../../../assets/img";

export const testPokemon = [
  {
    entry: "001",
    name: "Bulbasaur",
    get image() {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.entry}.png`;
    },

    details: {
      sleepStyle: "Dozing",
      specialty: "Ingredients",
      mainSkill: "Ingredient Magnet S",
      berry: durin,
      ingredient1: honey,
      ingredient2: potato,
      ingredient3: tomato,
    },
  },
  {
    entry: "010",
    name: "Caterpie",
    get image() {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.entry}.png`;
    },
    details: {
      sleepStyle: "Dozing",
      specialty: "Berries",
      mainSkill: "Ingredient Magnet S",
      berry: lum,
      ingredient1: honey,
      ingredient2: tomato,
      ingredient3: soybean,
    },
  },
  {
    entry: "035",
    name: "Clefary",
    get image() {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.entry}.png`;
    },
    details: {
      sleepStyle: "Snoozing",
      specialty: "Berries",
      mainSkill: "Metronome",
      berry: pecha,
      ingredient1: apple,
      ingredient2: honey,
      ingredient3: soybean,
    },
  },
  {
    entry: "058",
    name: "Growlithe",
    get image() {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.entry}.png`;
    },
    details: {
      sleepStyle: "Snoozing",
      specialty: "Skills",
      mainSkill: "Extra Helpful S",
      berry: leppa,
      ingredient1: herb,
      ingredient2: sausage,
      ingredient3: milk,
    },
  },
  {
    entry: "158",
    name: "Totodile",
    get image() {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.entry}.png`;
    },
    details: {
      sleepStyle: "Slumbering",
      specialty: "Berries",
      mainSkill: "Charge Strength S - Var",
      berry: oran,
      ingredient1: sausage,
      ingredient2: oil,
    },
  },
  {
    entry: "759",
    name: "Stuffle",
    get image() {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.entry}.png`;
    },
    details: {
      sleepStyle: "Slumbering",
      specialty: "Ingredients",
      mainSkill: "Charge Strength S",
      berry: cheri,
      ingredient1: corn,
      ingredient2: sausage,
      ingredient3: egg,
    },
  },
];
