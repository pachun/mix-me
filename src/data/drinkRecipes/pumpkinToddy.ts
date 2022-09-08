import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/XV6aleQiZVcrWHuTXWEPns3O3oc=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__10__17131325__pumpkin-toddy-720x720-article-1-7def7903dbd3477ebe01e7331169247a.jpg"

const pumpkinToddy: DrinkRecipe = {
  name: "Pumpkin Toddy",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Apple Brandy",
      unit: "oz",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Rye Whiskey",
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
      ingredient: "Maple Syrup Grade B",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Pumpkin Purée",
      unit: "tsp",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Angostura Bitters",
      unit: "Dash",
      unitAmount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Boiling Water",
      unit: "oz",
      unitAmount: 5.0,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Grated",
      ingredient: "Cinnamon",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Combine %MI1, %MI2, %MI3, %MI4, %MI5 and %MI6 in a preheated mug, then stir to combine.",
    "Top off with %MI7 and stir.",
    "Garnish with %GI1.",
  ],
}

export default pumpkinToddy
