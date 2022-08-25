import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.cocktailbuilder.com/img/icons/icon1024x1024.png"

const nick: DrinkRecipe = {
  name: "Nick",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Tequila Reposado",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Amaretto Liqueur",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Simple Syrup",
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
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lime Juice",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lime",
      suffix: "Wedge",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3, %MI4 and %MI5 to a cocktail shaker filled with ice.",
    "Shake vigorously until very cold.",
    "Strain contents into cocktail glass.",
    "Garnish with %GI1",
  ],
}

export default nick
