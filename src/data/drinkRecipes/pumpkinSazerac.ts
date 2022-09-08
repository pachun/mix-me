import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/DqG7AOxrUVMK5ZSR8JdKxoUhsgE=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pumpkin-sazerac-720x720-primary-62b0214f91904fdf962e9db2f06528ee.jpg"

const pumpkinSazerac: DrinkRecipe = {
  name: "Pumpkin Sazerac",
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
      ingredient: "Pumpkin Syrup",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Peychaud's Bitters",
      unit: "Dash",
      unitAmount: 3.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Absinthe",
      unit: "oz",
      unitAmount: 0.25,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lemon",
      suffix: "Peel",
      alternates: [],
    },
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lemon",
      suffix: "Twist",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Chill a rocks glass in the freezer for 15 minutes.",
    "Add %MI1, %MI2 and %MI3 to a mixing glass with ice and stir for 30 seconds.",
    "Remove the rocks glass from the freezer; add the %MI4 and swirl it around the inside evenly, then discard the excess.",
    "Strain the stirred mixture into the prepared glass.",
    "Twist a swath of %PI1 over the glass to express the oils onto the drink, then discard.",
    "Garnish with a %GI1.",
  ],
}

export default pumpkinSazerac
