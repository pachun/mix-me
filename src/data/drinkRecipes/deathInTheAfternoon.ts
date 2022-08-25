import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.acouplecooks.com/wp-content/uploads/2020/12/Death-in-the-afternoon-008s.jpg"

const deathInTheAfternoon: DrinkRecipe = {
  name: "Death In The Afternoon",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Absinthe",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Champagne",
      unit: "oz",
      unitAmount: 4.5,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [],
  stepsToMake: [
    "Pour the %MI1 into a coupe.",
    "Top slowly with the %MI2.",
  ],
}

export default deathInTheAfternoon
