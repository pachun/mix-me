import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://cdn.shopify.com/s/files/1/1216/2612/files/a_dark__n_stormy_drink.jpg?v=1625989180"

const darkAndStormy: DrinkRecipe = {
  name: "Dark 'N Stormy",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Dark Rum",
      unit: "oz",
      unitAmount: 2,
      alternates: ["Vodka"],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lime Juice",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      prefix: "Chilled",
      ingredient: "Ginger Beer",
      unit: "oz",
      unitAmount: 5,
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
    "Fill a tall glass with ice",
    "Add %MI1 and %MI2 to the glass",
    "Top with %MI3",
    "Garnish with %GI1",
  ],
}

export default darkAndStormy
