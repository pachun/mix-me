import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2022/03/03_22_Pisco_Sour_Tyler_Zielinski_1920x1280.jpg"

const piscoSour: DrinkRecipe = {
  name: "Pisco Sour",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Pisco",
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
      ingredient: "Simple Syrup",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      amount: 1,
      ingredient: "Egg White",
    },
  ],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Angostura Bitters",
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3 and %NI1 to a shaker",
    "Dry shake (without ice)",
    "Strain into a chilled Nick & Nora glass",
    "Garnish with 3 to 5 drops %GI1",
  ],
}

export default piscoSour
