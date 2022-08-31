import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://stage-www.relish.com/image-resizer/fit=cover,f=auto,dpr=1,w=335/https://www.seriouseats.com/thmb/JbcMpOL3EKWvcY_64Xd4vtH5qfw=/458x458/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2011__10__20111007-PDT-ApplejackRabbit-f1eaa1d677ae4c218103faa820955a66.jpg"

const applejackRabbit: DrinkRecipe = {
  name: "Applejack Rabbit",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Applejack",
      unit: "oz",
      unitAmount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Orange Juice",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Maple Syrup",
      suffix: "Grade B",
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
    "Add %MI1, %MI2, %MI3 and %MI4 to cocktail shaker filled with ice. Shake until well-chilled",
    "Strain into a coupe glass.",
    "Garnish with %GI1.",
  ],
}

export default applejackRabbit
