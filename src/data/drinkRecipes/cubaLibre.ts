import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cuba-libre-drink-placed-on-rustic-table-royalty-free-image-1581775698.jpg"

const cubaLibre: DrinkRecipe = {
  name: "Cuba Libre",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Rum",
      unit: "oz",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Coca-Cola",
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
      ingredient: "Lime",
      suffix: "Wedge",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill a highball glass with ice, then add %MI1 and %MI2.",
    "Garnish with a %GI1.",
    "Squeeze the lime into your drink, if desired.",
  ],
}

export default cubaLibre
