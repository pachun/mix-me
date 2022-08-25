import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://img.myloview.com/posters/refreshing-boozy-golden-dream-cocktail-700-255458247.jpg"

const goldenDream: DrinkRecipe = {
  name: "Golden Dream",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Galliano L'Autentico Liqueur",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Orange Liqueur",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Orange Juice",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Heavy Cream",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [],
  stepsToMake: [
    "Add all ingredients to a shaker with ice and shake until well-chilled.",
    "Strain into a chilled cocktail glass.",
  ],
}

export default goldenDream
