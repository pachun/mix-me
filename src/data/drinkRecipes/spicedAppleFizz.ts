import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/0Q9zUdEgdxqDdU9aqwhVbmcsz0Q=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/spiced-apple-fizz-720x720-primary-0bbfd940b7fb473284344b2ae591864a.jpg"

const spicedAppleFizz: DrinkRecipe = {
  name: "Spiced Apple Fizz",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Vodka",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Pear Brandy",
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
      ingredient: "Honey Syrup",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Hard Apple Cider",
      alternates: [],
    },
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Apple",
      suffix: "Fan",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Grated",
      ingredient: "Cinnamon",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3 and %MI4 to cocktail shaker filled with ice.",
    "Shake until well-chilled",
    "Strain into a highball glass over ice.",
    "Top-off glass with %PI1.",
    "Garnish with an %GI1 and dust with %GI2.",
  ],
}

export default spicedAppleFizz
