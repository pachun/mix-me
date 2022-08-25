import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl = ""

const pinkPanther: DrinkRecipe = {
  name: "Pink Panther",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Bourbon",
      unit: "oz",
      unitAmount: 3.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Grenadine",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Egg White",
      amount: 1,
      alternates: [],
    },
  ],
  portionlessIngredients: [],
  garnishIngredients: [],
  stepsToMake: [
    "Add %NI1 to cocktail shaker, fill halfway with ice, then add %MI1, %MI2 and %MI3.",
    "Shake vigorously for 5 seconds.",
    "Strain contents into chilled coupe glass.",
  ],
}

export default pinkPanther
