import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://images.immediate.co.uk/production/volatile/sites/30/2013/11/pina-colada-c68aca7.jpg?resize=960,872?quality=90&resize=556,505"

const pinaColada: DrinkRecipe = {
  name: "Piña Colada",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 2,
      unit: "oz",
      ingredient: "Light Rum",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1.5,
      unit: "oz",
      ingredient: "Cream of Coconut",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1.5,
      unit: "oz",
      ingredient: "Pineapple Juice",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.5,
      unit: "oz",
      ingredient: "Lime Juice",
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Pineapple",
      suffix: "Wedge",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Pineapple",
      suffix: "Leaf",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3 and %MI4 to a shaker with ice",
    "Shake for 20 to 30 seconds",
    "Fill a hurricane glass with pebble ice",
    "Strain shaker contents into the hurricane glass",
    "Garnish with %GI1 and %GI2",
  ],
}

export default pinaColada
