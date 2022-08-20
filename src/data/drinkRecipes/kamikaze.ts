import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/LiNF6YFAmTYdps-F5TgA8V7UVLo=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__08__05121040__Kamikaze-720-720-recipe-7777fbacae9243e585eb990e48337913.jpg"

const kamikaze: DrinkRecipe = {
  name: "Kamikaze",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Vodka",
      unit: "oz",
      unitAmount: 2,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Orange Liqueur",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [],
  stepsToMake: [
    "Add %MI1, %MI2 and %MI3 to a shaker with ice",
    "Shake until well-chilled",
    "Strain into two shot glasses",
  ],
}

export default kamikaze
