import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://images.getrecipekit.com/20220506081045-a_glass_of_horse-e2-80-99s_neck-5b1-5d.jpg?aspect_ratio=16:9&quality=90&auto_optimize=medium"

const horsesNeck: DrinkRecipe = {
  name: "Horses Neck",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Bourbon",
      unit: "oz",
      unitAmount: 0.0,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Ginger Ale",
      alternates: [],
    },
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lemon",
      suffix: "Peel",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add the whiskey into a Collins glass over ice.",  
    "Top with ginger ale.",
    "Garnish with a long strip of lemon peel.",
  ],
}

export default horsesNeck
