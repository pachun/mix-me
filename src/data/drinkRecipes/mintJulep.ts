import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/I4TMQxCzojbuBMu3znFVWb84ZgY=/735x0/mint-julep-720x720-primary-5e2063b906384479b345687201992bd0.jpg"

const mintJulep: DrinkRecipe = {
  name: "Mint Julep",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 2,
      unit: "oz",
      ingredient: "Bourbon",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.25,
      unit: "oz",
      ingredient: "Simple Syrup",
      alternates: [],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      amount: 8,
      ingredient: "Mint Leaf",
      alternates: [],
    },
  ],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Mint",
      suffix: "Sprig",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Angostura Bitters",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Lightly muddle %NI1 and %MI2 in a julep cup or rocks glass",
    "Add %MI1",
    "Pack the glass with crushed ice",
    "Stir until the glass is frosted on the outside",
    "Top with more crushed ice to form an ice dome",
    "Garnish with %GI1 and %GI2",
  ],
}

export default mintJulep
