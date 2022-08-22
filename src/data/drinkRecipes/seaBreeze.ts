import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/EOS5P-JTSFIqJir9upVRzLKqijQ=/720x720/smart/filters:no_upscale()/sea-breeze-720x720-recipe-e1e39750d0fe46eeb281de64c93110dd.jpg"

const seaBreeze: DrinkRecipe = {
  name: "Sea Breeze",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Vodka",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Cranberry Juice",
      unit: "oz",
      unitAmount: 3,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Grapefruit Juice",
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
      ingredient: "Lime",
      suffix: "Wheel",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill a highball glass with ice",
    "Stir %MI1, %MI2 and %MI3 into the highball glass",
    "Garnish with %GI1",
  ],
}

export default seaBreeze
