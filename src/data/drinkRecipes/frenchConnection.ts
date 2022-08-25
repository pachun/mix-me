import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://kitchengeekery.com/wp-content/uploads/2021/02/french-connection-cocktail-400x270.jpg"

const frenchConnection: DrinkRecipe = {
  name: "French Connection",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Cognac",
      unit: "oz",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Amaretto Liqueur",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [],
  stepsToMake: [
    "Fill a rocks glass with ice.",
    "Add the %MI1 and %MI2, stirring briefly to combine.",
  ],
}

export default frenchConnection
