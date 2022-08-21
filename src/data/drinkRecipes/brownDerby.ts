import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/BFcXbtDUgLwKIt98Da_UZDyq6gI=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/brown-derby-720x720-primary-b706bf8f3c2047ef982fdc2a064d437a.jpg"
const brownDerby: DrinkRecipe = {
  name: "Brown Derby",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Bourbon",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Grapefruit Juice",
      unit: "oz",
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Honey Syrup",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Grapefruit",
      suffix: "Twist",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill cocktail shaker with ice",
    "Add %MI1, %MI2, and %MI3 to cocktail shaker. Shake until well-chilled",
    "Strain into a cocktail glass",
    "Garnish with a %GI1",
  ],
}

export default brownDerby
