import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.mainespirits.com/sites/default/files/styles/recipe_-_large_image_style/public/Mary%20Pickford%20Cocktail%20lores.jpg?itok=uLK6t9Kv"

const maryPickford: DrinkRecipe = {
  name: "Mary Pickford",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "White Rum",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Pineapple Juice",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Grenadine",
      unit: "tsp",
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Maraschino Liqueur",
      unit: "Drop",
      unitAmount: 6,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3 and %MI4 to a cocktail shaker with ice.",
    "Shake evenly until well-chilled",
    "Strain into a chilled cocktail glass",
  ],
}

export default maryPickford
