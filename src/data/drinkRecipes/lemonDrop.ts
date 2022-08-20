import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://theadventurebite.com/wp-content/uploads/2019/02/Lemon-Drop-Cocktail-02-640x427.jpg"

const lemonDrop: DrinkRecipe = {
  name: "Lemon Drop",
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
      ingredient: "Triple Sec",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
      unit: "oz",
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Simple Syrup",
      unit: "oz",
      unitAmount: 1,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Sugar",
    },
  ],
  stepsToMake: [
    "Coat the rim of a cocktail glass with %GI1",
    "Add the %MI1, %MI2, %MI3 and %MI4 to a shaker with ice",
    "Shake until well-chilled",
    "Strain shaker contents into cocktail glass",
  ],
}

export default lemonDrop
