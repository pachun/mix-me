import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://i.pinimg.com/originals/ea/fb/ec/eafbec5d9e92fb0cad26167e7f57c14f.jpg"

const weddingBells: DrinkRecipe = {
  name: "Wedding Bells",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Dubonnet Rouge Grand Aperitif",
      unit: "oz",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Cherry Liqueur",
      unit: "tsp",
      unitAmount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Orange Juice",
      unit: "Tbsp",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Orange Bitters",
      unit: "Dash",
      unitAmount: 1.0,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lavender",
      suffix: "Sprigs",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Pour %MI1, %MI2, %MI3, %MI4 and %MI5 into a cocktail shaker half-filled with ice cubes.",
    "Shake until well-chilled",
    "Strain into a cocktail glass or champagne flute.",
    "Garnish with a couple %GI1 for a pretty aesthetic.",
  ],
}

export default weddingBells
