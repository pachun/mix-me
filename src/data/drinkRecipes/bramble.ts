import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bramble-baa53ba.jpg"

const bramble: DrinkRecipe = {
  name: "Bramble",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 2,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
      unit: "oz",
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Simple Syrup",
      unit: "tsp",
      unitAmount: 2,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Creme de Mure",
      unit: "tsp",
      unitAmount: 0.5,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lemon",
      suffix: "Half-Wheel",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Blackberry",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2 and %MI3 to a shaker with ice",
    "Shake until well-chilled",
    "Fill an old fashioned glass with crushed ice",
    "Fine strain shaker into the old fashioned glass",
    "Slowly pour the %MI4 over the top of the drink",
    "Garnish with %GI1 and %GI2",
  ],
}

export default bramble
