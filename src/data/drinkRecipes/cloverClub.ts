import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://savoredsips.com/wp-content/uploads/2020/03/clover-club-raspberry-cocktail-1-735x490.jpg"
const cloverClub: DrinkRecipe = {
  name: "Clover Club",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 2,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Raspberry Syrup",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Egg White",
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
      amount: 3,
      ingredient: "Raspberry",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill cocktail shaker with ice",
    "Add %MI1, %MI2, %MI3 and %MI4 to cocktail shaker. Shake vigorously until well-chilled",
    "Strain into chilled cocktail glass",
    "Garnish with %GI1",
  ],
}

export default cloverClub
