import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://cf.ltkcdn.net/cocktails/images/orig/270855-1600x1066-stinger-cocktail-recipes.jpg"

const stinger: DrinkRecipe = {
  name: "Stinger",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Cognac",
      unit: "oz",
      unitAmount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "White Creme de Menthe",
      unit: "oz",
      unitAmount: 1.0,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [],
  stepsToMake: [
    "Add %MI1 and %MI2 into a mixing glass with ice and stir until well-chilled.",
    "Strain into a rocks glass over crushed ice.",
  ],
}

export default stinger
