import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.acouplecooks.com/wp-content/uploads/2020/05/Martinez-Cocktail-022.jpg"

const martinez: DrinkRecipe = {
  name: "Martinez",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1.5,
      unit: "oz",
      ingredient: "Gin",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1.5,
      unit: "oz",
      ingredient: "Sweet Vermouth",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.25,
      unit: "oz",
      ingredient: "Maraschino Liqueur",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 2,
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
      ingredient: "Orange",
      suffix: "Twist",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3 and %MI4 to a mixing glass with ice",
    "Stir until well-chilled",
    "Strain into a chilled coupe glass",
    "Garnish with %GI1",
  ],
}

export default martinez
