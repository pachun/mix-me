import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.deliciousmagazine.co.uk/wp-content/uploads/2014/01/Mojito-768x960.jpg"

const mojito: DrinkRecipe = {
  name: "Mojito",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 2,
      unit: "oz",
      ingredient: "White Rum",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.5,
      unit: "oz",
      ingredient: "Simple Syrup",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.75,
      unit: "oz",
      ingredient: "Lime Juice",
      alternates: [],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      amount: 3,
      ingredient: "Mint Leaf",
      alternates: [],
    },
  ],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Club Soda",
      alternates: [],
    },
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Mint",
      suffix: "Sprig",
      alternates: [],
    },
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

export default mojito
