import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://cocktail-society.com/wp-content/uploads/2021/10/Planters-Punch.jpg"

const plantersPunch: DrinkRecipe = {
  name: "Planter's Punch",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 3,
      unit: "oz",
      ingredient: "Dark Rum",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1,
      unit: "oz",
      ingredient: "Simple Syrup",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1,
      unit: "tsp",
      ingredient: "Grenadine",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.75,
      unit: "oz",
      ingredient: "Lime Juice",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 3,
      unit: "Dash",
      ingredient: "Angostura Bitters",
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Club Soda",
      suffix: ", chilled",
      alternates: [],
    },
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Mint",
      suffix: "Sprig",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3, %MI4 and %MI5 into a cocktail shaker with ice.",
    "Shake until well-chilled.",
    "Strain into a Collins glass over crushed ice.",
    "Top-off with club soda.",
    "Garnish with a %GI1.",
  ],
}

export default plantersPunch
