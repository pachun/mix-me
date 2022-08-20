import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://d33wubrfki0l68.cloudfront.net/b0b13f9d7323dc2191355cb2a1b66aa1f5aa6875/d25f8/images/uploads/2021_07_24_paloma_cocktail_2.jpg"

const paloma: DrinkRecipe = {
  name: "Paloma",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Tequila",
      unit: "oz",
      unitAmount: 2,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lime Juice",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Chilled",
      ingredient: "Grapefruit Soda",
    },
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lime",
      suffix: "Wheel",
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Salt",
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3 and %NI1 to a shaker with ice",
    "Shake until well-chilled",
    "Strain mix into a cup",
    "Pour mix back into shaker",
    "Dry shake (without ice)",
    "Fine strain into chilled coupe glass",
    "Garnish with light dusting of %GI1",
  ],
}

export default paloma
