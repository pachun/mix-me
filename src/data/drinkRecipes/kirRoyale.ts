import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://i0.wp.com/whatagirleats.com/wp-content/uploads/2021/07/Kir-Hero-2-5.jpg"

const kirRoyale: DrinkRecipe = {
  name: "Kir Royale",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.5,
      unit: "oz",
      ingredient: "Creme de Cassis",
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Dry Champagne",
      alternates: [],
    },
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      amount: 2,
      ingredient: "Raspberry",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lemon",
      suffix: "Twist",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Pour the %MI1 into a Champagne flute.",
    "Top-off with the %PI1.",
    "Drop %GI1 into flute and garnish with %GI2.",
  ],
}

export default kirRoyale
