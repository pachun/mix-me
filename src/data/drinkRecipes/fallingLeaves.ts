import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/qW3XVp2Vg3mbI39KedblR1I01-s=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/falling-leaves-720x720-primary-872cacb5d4b845bb83ef150e8d5f8810.jpg"

const fallingLeaves: DrinkRecipe = {
  name: "Falling Leaves",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Dry Alsatian Riesling",
      unit: "oz",
      unitAmount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Pear Brandy",
      unit: "oz",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Orange Curaçao",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Honey Syrup",
      unit: "oz",
      unitAmount: 0.25,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Peychaud's Bitters",
      unit: "Dash",
      unitAmount: 5.0,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Star Anise Pod",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3 and %MI4 to a mixing glass with ice.",
    "Stir gently until well-chilled.",
    "Strain into a coupe glass.",
    "Garnish with a %GI1.",
  ],
}

export default fallingLeaves
