import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://food-fanatic-res.cloudinary.com/iu/s--AQcZASMu--/c_thumb,f_auto,g_auto,h_1333,q_auto,w_1333/v1596119508/mimosa-cocktail-photo"

const mimosa: DrinkRecipe = {
  name: "Mimosa",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 2,
      unit: "oz",
      ingredient: "Orange Juice",
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Chilled",
      ingredient: "Champagne",
      alternates: ["Sparkling Wine"],
    },
  ],
  garnishIngredients: [],
  stepsToMake: ["Pour the %MI1 into a champagne flute", "Top with %PI1"],
}

export default mimosa
