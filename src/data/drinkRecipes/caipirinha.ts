import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://assets.epicurious.com/photos/579a2d8e437fcffe02f7230b/16:9/w_2000,h_1125,c_limit/caipirinha-072816.jpg"

const caipirinha: DrinkRecipe = {
  name: "Caipirinha",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Cachaça",
      unit: "oz",
      unitAmount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Sugar",
      unit: "tsp",
      unitAmount: 2.0,
      alternates: [],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Lime",
      amount: 1.0,
      alternates: [],
    },
  ],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lime",
      suffix: "Wheel",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Cut %NI1 into wedges.",
    "In a double rocks glass, muddle the %NI1 wedges and %MI2.",
    "Fill the glass with ice, add %MI1, and stir briefly.",
    "Garnish with a lime wheel.",
  ],
}

export default caipirinha
