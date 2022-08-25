import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/RkNbpPaBQTpQcQt-0Gcg4HT_T_4=/720x720/smart/filters:no_upscale()/white-lady-720x720-primary-49f8bd47524f4d52be295835a95c51cd.jpg"

const whiteLady: DrinkRecipe = {
  name: "White Lady",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 0.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Triple Sec",
      unit: "oz",
      unitAmount: 0.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
      unit: "oz",
      unitAmount: 0.0,
      alternates: [],
    },
  ],
  numberedIngredients: [    {
      type: DrinkRecipeIngredientType.Numbered,
      amount: 1,
      ingredient: "Egg White",
      alternates: [],
    },
  ],
  portionlessIngredients: [],
  garnishIngredients: [],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3, and %NI1 into a shaker and dry-shake (without ice) vigorously.",
    "Add ice and shake again until well-chilled. ",
    "Strain into a chilled cocktail glass.",
  ],
}

export default whiteLady
