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
      alternates: [],
    },
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lime",
      suffix: "Wheel",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Salt",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Optionally: Rub a lime wedge around the edge of a highball glass and dip the rim in %GI2",
    "Fill the highball glass with ice",
    "Add %MI1 and %MI2 to the glass",
    "Top with %PI1 and stir briefly to combine",
    "Garnish with %GI1",
  ],
}

export default paloma
