import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2022/03/Black_Russian_Cocktail_GettyImages-669105860_1920x1280.jpg"

const blackRussian: DrinkRecipe = {
  name: "Black Russian",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Vodka",
      unit: "oz",
      unitAmount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Kahlúa",
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
    "Strain into a rocks glass over fresh ice. ",
  ],
}

export default blackRussian
