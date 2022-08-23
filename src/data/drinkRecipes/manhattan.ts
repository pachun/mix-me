import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.acouplecooks.com/wp-content/uploads/2020/03/Manhattan-Cocktail-080.jpg"

const manhattan: DrinkRecipe = {
  name: "Manhattan",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Rye Whiskey",
      unit: "oz",
      unitAmount: 2,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Sweet Vermouth",
      unit: "oz",
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Angostura Bitters",
      unit: "Dash",
      unitAmount: 2,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Orange Bitters",
      unit: "Dash",
      unitAmount: 1,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Brandied Cherry",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3 and %MI4 to a mixing glass with ice",
    "Stir until well chilled",
    "Strain into a chilled Nick & Nora or coupe glass",
    "Garnish with %GI1",
  ],
}

export default manhattan
