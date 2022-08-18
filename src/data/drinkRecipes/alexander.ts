import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://cf.ltkcdn.net/cocktails/images/std/306704-800x533-alexander-cocktail.webp"

const alexander: DrinkRecipe = {
  name: "Alexander",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Dry Gin",
      unit: "oz",
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "White Creme de Cacao",
      unit: "oz",
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Single Cream",
      unit: "oz",
      unitAmount: 1,
      alternates: ["Half-and-Half"],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      amount: 1,
      ingredient: "Egg White",
    },
  ],
  preparedIngredients: [],
  garnishIngredient: {
    type: DrinkRecipeIngredientType.Prepared,
    prefix: "Grated",
    ingredient: "Nutmeg",
  },
  stepsToMake: [
    "Add %MI1, %MI2, %MI3 and %NI1 to a shaker with ice",
    "Shake until well-chilled",
    "Strain mix into a cup",
    "Pour mix back into shaker",
    "Dry shake (without ice)",
    "Fine strain into chilled coupe glass",
    "Garnish with light dusting of %G",
  ],
}

export default alexander
