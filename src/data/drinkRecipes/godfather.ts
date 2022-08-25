import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://cdn1.foodviva.com/static-content/food-images/whisky-recipes/godfather-drink/godfather-drink.jpg"

const godfather: DrinkRecipe = {
  name: "Godfather",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Blended Scotch",
      unit: "oz",
      unitAmount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Amaretto Liqueur",
      unit: "oz",
      unitAmount: 0.25,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [],
  stepsToMake: [
    "Fill a mixing glass 2/3 full of ice.",
    "Add %MI1 and %MI2, stirring until well-chilled.",
    "Strain into a rocks glass over fresh ice.",
  ],
}

export default godfather
