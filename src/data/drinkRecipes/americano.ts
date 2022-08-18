import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/x16XCHX_VS0bXEstWcdAsxYqejs=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__05__18075612__americano-720x720-article-50171f19cc644b05b8df563e06a647fd.jpg"

const americano: DrinkRecipe = {
  name: "Americano",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Campari",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Sweet Vermouth",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  preparedIngredients: [
    {
      type: DrinkRecipeIngredientType.Prepared,
      ingredient: "Soda Water",
      prefix: "Chilled",
    },
  ],
  garnishIngredient: {
    type: DrinkRecipeIngredientType.Prepared,
    ingredient: "Orange",
    suffix: "Twist",
  },
  stepsToMake: [
    "Fill highball glass with ice",
    "Add %MI1 and %MI2 to highball glass",
    "Gently stir %PI1 into highball glass",
    "Garnish with %G",
  ],
}

export default americano
