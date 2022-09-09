import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/gEsRZdHlTm7j2rVHC-_QkyxZUSw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/autumn-720x720-primary-357cede4ffa9487f93136f76b21d8591.jpg"

const autumn: DrinkRecipe = {
  name: "Autumn",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Applejack",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Amontillado Sherry",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Pear Brandy",
      unit: "oz",
      unitAmount: 0.25,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Maple Syrup Grade A",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Apple Bitters",
      unit: "Dash",
      unitAmount: 3.0,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Allspice",
      suffix: "Tincture",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Dehydrated",
      ingredient: "Pear",
      suffix: "Crisp",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Maple",
      suffix: "Leaf",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3, %MI4 and %MI5 into a mixing glass with ice.",
    "Stir until well-chilled.",
    "Strain into a rocks glass over a large ice cube.",
    "Spray with the %GI1, garnish with a %GI2, and serve on a burning %GI3 (optional).",
  ],
}

export default autumn
