import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://winedharma.com/wine-dharma/uploads/2020/10/Screwdriver-cocktail-recipe-vodka-orange-drink-recipe-best-vodka-drinks.jpg"

const screwdriver: DrinkRecipe = {
  name: "Screwdriver",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Vodka",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Orange Juice",
      alternates: [],
    },
  ],
  garnishIngredients: [
  {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Orange",
      suffix: "Slice",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill a highball glass with ice, then add %MI1.",
    "Top with the orange juice.",
  ],
}

export default screwdriver
