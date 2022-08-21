import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://tipsybartender.com/wp-content/uploads/2018/02/ramos-gin-fizz.jpg?fit=crop&ar=1:1"

const ramosGinFizz: DrinkRecipe = {
  name: "Ramos Gin Fizz",
  imageUrl: fakeImageUrl,
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
      ingredient: "Simple Syrup",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Heavy Cream",
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
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Flower Water",
      unit: "Dash",
      unitAmount: 3,
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
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Club Soda",
      prefix: "Chilled",
      suffix: "(to top)",
      alternates: [],
    },
  ],
  garnishIngredients: [],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3, %MI4, %MI5 and %NI1 to a shaker",
    "Shake without ice for 10 seconds",
    "Add ice and shake for 15 seconds",
    "Strain into a Collins glass",
    "Pour a little bit of %PI1 back and forth between the mpty halves of the shaker tins to pick up any residue, then use that to top the drink",
  ],
}

export default ramosGinFizz
