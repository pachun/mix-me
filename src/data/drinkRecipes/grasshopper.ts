import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/CRXajbaGbKIDo-nc2CGIw2N1xF0=/735x0/grasshopper-720x720-article-effdd8c4222b415c948816047bd59b1a.jpg"

const grasshopper: DrinkRecipe = {
  name: "Grasshopper",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Creme de Menthe",
      unit: "oz",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Creme de Cacao",
      unit: "oz",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Heavy Cream",
      unit: "oz",
      unitAmount: 2.0,
      alternates: [],
    },
  ],
  numberedIngredients: [],
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
    "Add the %MI1, %MI2 and %MI3 into a shaker with ice,",
    "Shake vigorously until well-chilled.",
    "Strain into a chilled cocktail glass.",
    "Garnish with %GI1 over the top of the drink.",
  ],
}

export default grasshopper
