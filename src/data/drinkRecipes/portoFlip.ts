import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/Qroq2PpZ5c__7_z9G7w0-NotnNQ=/720x720/smart/filters:no_upscale()/porto-flip-720x720-primary-1cd2de9da74648889edb1bdeea49e1a5.jpg"

const portoFlip: DrinkRecipe = {
  name: "Porto Flip",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1,
      unit: "oz",
      ingredient: "Cognac",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1.75,
      unit: "oz",
      ingredient: "Ruby Port",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1,
      unit: "oz",
      ingredient: "Heavy Cream",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1.5,
      unit: "tsp",
      prefix: "Extra-Fine",
      ingredient: "Sugar",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1,
      unit: "Barspoon",
      ingredient: "Yellow Chartreuse",
      alternates: [],
      },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      amount: 1,
      prefix: "Whole",
      ingredient: "Egg",
      alternates: [],
    },
  ],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Grated",
      ingredient: "Nutmeg",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3, %MI4 and %NI1 into a cocktail shaker and vigorously dry-shake (without ice).",
    "Open the shaker and add ice, then shake again until well-chilled",
    "Strain into a chilled cocktail glass.",
    "Add the %MI5.",
    "Garnish with a light dusting of %GI1.",
 ],
}

export default portoFlip
