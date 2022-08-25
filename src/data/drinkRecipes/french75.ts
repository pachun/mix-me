import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/boozy-bubbly-lemon-french-75-cocktail-royalty-free-image-1581952839.jpg?crop=0.668xw:1.00xh;0.214xw,0&resize=480:*"

const french75: DrinkRecipe = {
  name: "French 75",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Champagne",
      unit: "oz",
      unitAmount: 3.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 1.0,
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
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lemon",
      suffix: "Twist",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add the %MI1, %MI2 and %MI3 to a shaker with ice and shake until well-chilled.",
    "Strain into a flute glass.",
    "Top with %PI1.",
    "Garnish with a %GI1.",
  ],
}

export default french75
