import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://i.pinimg.com/originals/88/ae/64/88ae64822214c80ef1fe89ec7da5b462.jpg"

const oldVermont: DrinkRecipe = {
  name: "Old Vermont",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 5.0,
      unit: "oz",
      ingredient: "Gin",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.5,
      unit: "oz",
      prefix: "Vermont",
      ingredient: "Maple Syrup Grade A",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.25,
      unit: "oz",
      ingredient: "Lemon Juice",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.25,
      unit: "oz",
      ingredient: "Orange Juice",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 2.0,
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
      suffix: "Rind",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3, %MI4 and %MI5 to a cocktail shaker.",
    "Add ice and shake until well-chilled.",
    "Strain into a martini glass.",
    "Garnish with an %GI1.",
  ],
}

export default oldVermont
