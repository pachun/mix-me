import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/4m10hhFFUocKsj2syDnkWXFppqY=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2016__12__05144234__B52-shot-720sq-a7c7feadc9bb46098c21ae11442ccc64.jpg"

const b52: DrinkRecipe = {
  name: "B 52",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Coffee Liqueur",
      unit: "oz",
      unitAmount: 0.33,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Baileys Irish Cream Liqueur",
      unit: "oz",
      unitAmount: 0.33,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Grand Marnier Liqueur",
      unit: "oz",
      unitAmount: 0.33,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [],
  stepsToMake: [
    "Pour %MI1 into a shot glass",
    "Slowly layer %MI2 on top of the shot glass",
    "Slowly layer %MI3 on top of the shot glass",
  ],
}

export default b52
