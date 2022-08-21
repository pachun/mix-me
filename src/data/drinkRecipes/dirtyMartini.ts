import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.lemontreedwelling.com/wp-content/uploads/2021/01/dirty-martini-featured-0952-720x720.jpg"

const dirtyMartini: DrinkRecipe = {
  name: "Dirty Martini",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 2.5,
      alternates: ["Vodka"],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Dry Vermouth",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Olive Brine",
      unit: "oz",
      unitAmount: 1,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Green Olive",
      amount: 3,
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill a mixing glass with ice",
    "Stir %MI1, %MI2 and %MI3 into the mixing glass until well-chilled",
    "Strain mixing glass into chilled cocktail glass",
    "Garnish with a skewer of %GI1",
  ],
}

export default dirtyMartini
