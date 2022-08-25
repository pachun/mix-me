import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.culinaryhill.com/wp-content/uploads/2021/03/Gimlet-Culinary-Hill-1200x800-1.jpg"

const gimlet: DrinkRecipe = {
  name: "Gimlet",
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
      ingredient: "Simple Syrup",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lime Juice",
      unit: "oz",
      unitAmount: 0.75,
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
    "Add the %MI1, %MI2 and %MI3 into a shaker with ice and shake until well-chilled.",
    "Strain into a chilled cocktail glass.",
    "Garnish with a %GI1.",
  ],
}

export default gimlet
