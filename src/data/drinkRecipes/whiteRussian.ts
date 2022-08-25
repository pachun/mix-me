import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/Mt2ukX5YxBA0Yx02G9_Ku4j80sI=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__12__20073201__white-russian-720x720-article-cbe4b9a832c64f8da0bb09407caefa7f.jpg"

const whiteRussian: DrinkRecipe = {
  name: "White Russian",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Vodka",
      unit: "oz",
      unitAmount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Kahlúa",
      unit: "oz",
      unitAmount: 1.0,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
      {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Heavy Cream",
      alternates: [],
    },
  ],
  garnishIngredients: [],
  stepsToMake: [
    "Add %MI1 and %MI2 to a rocks glass filled with ice. ",
    "Top-off with %MI3 and stir. ",
  ],
}

export default whiteRussian
