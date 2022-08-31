import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.theplunge.com/wp-content/uploads/2017/04/Salty-Dog-cocktail-cropped.png"

const saltyDog: DrinkRecipe = {
  name: "Salty Dog",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 1.5,
      alternates: ["Vodka"],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Grapefruit Juice",
      unit: "oz",
      unitAmount: 3.0,
      alternates: [],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Grapefruit",
      suffix: "Slice",
      amount: 1.0,
      alternates: [],
    },
  ],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Kosher",
      ingredient: "Salt",
      alternates: [],
    },
  ],
  garnishIngredients: [],
  stepsToMake: [
    "Rub %NI1 around the edge of of a rocks glass, then dip in %PI1 to coat rim.",
    "Add %MI1 over ice.",
    "Top-off glass with %MI2.",
  ],
}

export default saltyDog
