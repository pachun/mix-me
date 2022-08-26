import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const ImageUrl =
  "https://cdn-cnhig.nitrocdn.com/jHVWKNNIZyvKPhXOgQojhBkVLbeXdHcJ/assets/static/optimized/rev-a4481aa/wp-content/uploads/2015/12/white-lady-serious-eats.jpg"

const whiteLady: DrinkRecipe = {
  name: "White Lady",
  imageUrl: ImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 2,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Triple Sec",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
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
      alternates: [],
    },
  ],
  portionlessIngredients: [],
  garnishIngredients: [],
  stepsToMake: [
    "Add the gin, orange liqueur, lemon juice and egg white into a shaker and dry-shake (without ice) vigorously.",
    "Add ice and shake again until well-chilled.",
    "Strain into a chilled cocktail glass.",
  ],
}

export default whiteLady
