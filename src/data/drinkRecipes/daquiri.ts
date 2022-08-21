import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.acouplecooks.com/wp-content/uploads/2020/05/Between-the-Sheets-Cocktail-006.jpg"
const daquiri: DrinkRecipe = {
  name: "Daquiri",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Light Rum",
      unit: "oz",
      unitAmount: 2,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lime Juice",
      unit: "oz",
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Demerara Sugar Syrup",
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
      suffix: "Twist",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill cocktail shaker with ice",
    "Add %MI1, %MI2, and %MI3 to cocktail shaker. Shake until well-chilled",
    "Strain into a chilled coupe glass",
    "Garnish with a %GI1",
  ],
}

export default daquiri
