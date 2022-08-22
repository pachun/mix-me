import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://delightfulmomfood.com/wp-content/uploads/2021/12/moscow-mule-ginger-beer-2.jpg"

const moscowMule: DrinkRecipe = {
  name: "Moscow Mule",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 2,
      unit: "oz",
      ingredient: "Vodka",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.5,
      unit: "oz",
      ingredient: "Lime Juice",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 3,
      unit: "oz",
      prefix: "Chilled",
      ingredient: "Ginger Beer",
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
    "Fill a Moscow Mule mug (or highball glass) with ice",
    "Add %MI1 and %MI2",
    "Top with %MI3",
    "Garnish with a %GI1",
  ],
}

export default moscowMule
