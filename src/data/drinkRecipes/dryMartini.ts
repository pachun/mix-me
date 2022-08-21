import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://theoxfordmagazine.com/wp-content/uploads/the-sky-wave-dry-martini-recipe-1920x1080.jpg"

const dryMartini: DrinkRecipe = {
  name: "Dry Martini",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 2.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Dry Vermouth",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Orange Bitters",
      unit: "Dash",
      unitAmount: 1,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lemon",
      suffix: "Twist",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill mixing glass with ice",
    "Add %MI1, %MI2, and %MI3 to mixing glass. Stir until very cold",
    "Strain into a chilled cocktail glass",
    "Garnish with a %GI1",
  ],
}

export default dryMartini
