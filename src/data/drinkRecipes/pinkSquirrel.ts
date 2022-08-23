import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.thespruceeats.com/thmb/-HpddZB71venvVFekZEcz7bb_gU=/580x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pink-squirrel-cocktail-recipe-759770-steps-05-f856db90663d4531a411b23b1010eebd.jpg"

const pinkSquirrel: DrinkRecipe = {
  name: "Pink Squirrel",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Creme de Noyaux",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "White Creme de Cacao",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Heavy Cream",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Grated",
      ingredient: "Nutmeg",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3 to a shaker filled with ice.",
    "Shake vigorously until well-chilled.",
    "Strain contents of shaker into a coupe or cocktail glass",
    "Garnish with %GI1",
  ],
}

export default pinkSquirrel
