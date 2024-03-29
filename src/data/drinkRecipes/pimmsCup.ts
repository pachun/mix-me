import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/f-0Rfs4hNG2P-Y7mZLZmUO8yYcg=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__10__29142721__pimms-cup-720x720-recipe-e0c8e82adb6249a898be85f4136f3643.jpg"

const pimmsCup: DrinkRecipe = {
  name: "Pimm's Cup",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Pimm's No.1",
      unit: "oz",
      unitAmount: 2,
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
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Ginger Ale",
      alternates: [],
    },
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Cucumber",
      suffix: "Slice",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Mint",
      suffix: "Sprig",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Strawberry",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lemon",
      suffix: "Wheel",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Orange",
      suffix: "Wheel",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill a highball glass with ice",
    "Add %MI1 and %MI2 to the glass",
    "Top with %PI1 and stir briefly to combine",
    "Garnish with %GI1, %GI2 and %GI3",
    "Optionally garnish with %GI4 and %GI5",
  ],
}

export default pimmsCup
