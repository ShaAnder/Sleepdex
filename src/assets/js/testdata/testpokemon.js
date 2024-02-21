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
      berry: "Durin",
      ingredients: ["Honey", "Tomato", "Potato"],
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
      berry: "Lum",
      ingredients: ["Honey, Tomato, Soybeans"],
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
      berry: "Pecha",
      ingredients: ["Apple", "Honey", "Soybeans"],
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
      berry: "Leppa",
      ingredients: ["Herb", "Sausage", "Milk"],
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
      berry: "Oran",
      ingredients: ["Sausage", "Oil"],
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
      berry: "Cheri",
      ingredients: ["Corn", "Sausage", "Egg"],
    },
  },
];
