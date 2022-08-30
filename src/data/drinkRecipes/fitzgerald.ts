import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://i.pinimg.com/originals/11/77/ba/1177ba7a2331fd1d677b311280940080.jpg"

const fitzgerald: DrinkRecipe = {
  name: "Fitzgerald",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1.5,
      unit: "oz",
      ingredient: "London Dry Gin",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1,
      unit: "oz",
      ingredient: "Simple Syrup",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.75,
      unit: "oz",
      ingredient: "Lemon Juice",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 3,
      unit: "Dash",
      ingredient: "Angostura Bitters",
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lemon",
      suffix: "Twist",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3, and %MI4 into a cocktail shaker half-filled with ice.",
    "Shake vigorously until well-chilled",
    "Strain into a chilled coupe or cocktail glass.",
    "Garnish with a %GI1.",
  ],
}

export default fitzgerald
