import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.theplunge.com/wp-content/uploads/2020/01/Strawberry-Kiss.jpg"

const strawberryKiss: DrinkRecipe = {
  name: "Strawberry Kiss",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Vodka",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Simple Syrup",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Strawberry",
      amount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Numbered,
<<<<<<< HEAD
      ingredient: "Basil Leaf",
=======
      ingredient: "Basil",
      suffix: "Leaf",
>>>>>>> 173513ac60f34f202ca5d6ebe116363069c7e911
      amount: 6,
      alternates: [],
    },
  ],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Sparkling Wine",
      alternates: ["Prosecco", "Champagne"],
    },
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Small",
      ingredient: "Strawberry",
      alternates: ["Raspberry"],
    },
  ],
  stepsToMake: [
    "Muddle %NI1 in a cocktail shaker.",
    "Add %MI1, %MI2, and %MI3 to the shaker half-filled with ice.",
    "Shake until well-chilled",
    "Double strain into a chilled coupe or cocktail glass.",
    "Top off glass with %NI1",
    "Garnish with a %GI1.",
  ],
}

export default strawberryKiss
