import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.theplunge.com/wp-content/uploads/2020/01/old-pal-720x720-recipe.jpg"

const oldPal: DrinkRecipe = {
  name: "Old Pal",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Rye Whiskey",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Campari",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Dry Vermouth",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lemon",
      suffix: "Peel",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2 and %MI3 to a mixing glass. Add ice and stir until well-chilled",
    "Strain into a rocks glass over fresh ice.",
    "Garnish with a %GI1.",
  ],
}

export default oldPal
