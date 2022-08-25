import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.thespruceeats.com/thmb/Qkhbv8dNyB78jPninCByGjO6_ok=/1333x1000/smart/filters:no_upscale()/commodore-2-cocktail-recipe-760511-hero-01-57f06fe453f043e48758f737caa56a9a.jpg"

const commodore: DrinkRecipe = {
  name: "Commodore",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Rum",
      unit: "oz",
      unitAmount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
      unit: "Dash",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Raspberry Liqueur",
      unit: "Dash",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Grenadine",
      unit: "Dash",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Sugar",
      unit: "tsp",
      unitAmount: 0.5,
      alternates: [],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Egg White",
      amount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Lime",
      amount: 1.0,
      alternates: [],
    },
  ],
  portionlessIngredients: [],
  garnishIngredients: [],
  stepsToMake: [
    "Cut %NI2 into wedges.",
    "In a cocktail shaker, add %MI1, %NI1, %MI2, %MI3, %MI4 and %MI5.",
    "Dry-shake (without ice) well.",
    "Fill the shaker with ice and shake for 30 seconds.",
    "Strain into a chilled cocktail glass.",
  ],
}

export default commodore
