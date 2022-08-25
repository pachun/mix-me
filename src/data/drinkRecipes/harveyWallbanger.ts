import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://craftybartending.com/wp-content/uploads/2018/04/Harvey-Wallbanger-cocktail.jpg"

const harveyWallbanger: DrinkRecipe = {
  name: "Harvey Wallbanger",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Vodka",
      unit: "oz",
      unitAmount: 1.25,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Galliano L'Autentico Liqueur",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Orange Juice",
      unit: "oz",
      unitAmount: 3.0,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Orange",
      suffix: "Slice",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Maraschino Cherry",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill a tall glass with ice, then add the vodka and orange juice and stir.",  
    "Float the Galliano on top.",
    "Garnish with a skewered %GI1 and %GI2.",
  ],
}

export default harveyWallbanger
