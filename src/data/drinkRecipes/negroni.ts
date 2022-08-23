import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.tasteofhome.com/wp-content/uploads/2019/04/Negroni-shutterstock_1084630808.jpg?fit=700,1024"

const negroni: DrinkRecipe = {
  name: "Negroni",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1,
      unit: "oz",
      ingredient: "Gin",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1,
      unit: "oz",
      ingredient: "Campari",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1,
      unit: "oz",
      ingredient: "Sweet Vermouth",
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Orange",
      suffix: "Peel",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2 and %MI3 to a mixing glass filled with ice.",
    "Stir until well-chilled",
    "Strain into a rocks glass filled with large ice cubes",
    "Garnish with an %GI1",
  ],
}

export default negroni
