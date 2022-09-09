import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.theplunge.com/wp-content/uploads/2020/01/Whiskey-Smash.png"

const whiskeySmash: DrinkRecipe = {
  name: "Whiskey Smash",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Bourbon",
      unit: "oz",
      unitAmount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Simple Syrup",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Lemon",
      amount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Mint Leaf",
      amount: 5,
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
  ],
  stepsToMake: [
    "Cut the %NI1 into wedges.",
    "Muddle %NI1, %NI2, and %MI2 and %MI4 in a cocktail shaker.",
    "Add %MI1 and fill with ice; shake until well- chilled",
    "Strain into a rocks glass filled with crushed ice.",
    "Garnish with %GI1.",
  ],
}

export default whiskeySmash
