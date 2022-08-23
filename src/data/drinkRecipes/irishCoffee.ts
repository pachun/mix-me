import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://images.absolutdrinks.com/drink-images/Raw/Absolut/dde5b617-048f-4af0-8c7f-0b2818407acb.jpg?imwidth=500"

const irishCoffee: DrinkRecipe = {
  name: "Irish Coffee",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1.5,
      unit: "oz",
      ingredient: "Irish Whiskey",
      alternates: [],
    },
    {
        type: DrinkRecipeIngredientType.Measured,
        unitAmount: 2,
        unit: "tsp",
        ingredient: "Brown Sugar",
        alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Hot Brewed",
      ingredient: "Coffee",
      alternates: [],
    },
  ],
  garnishIngredients: [
    {
        type: DrinkRecipeIngredientType.Portionless,
        prefix: "Unsweetened",
        ingredient: "Whipped Cream",
        alternates: [],
    },
  ],
  stepsToMake: [
    "Fill an Irish Coffee mug with hot water, let sit for 2 minutes, then discard the water.",
    "Add the %MI1 and %MI2 to the heated glass, fill with coffee, and stir.",
    "Top with an inch of %GI1.",
 ],
}

export default irishCoffee
