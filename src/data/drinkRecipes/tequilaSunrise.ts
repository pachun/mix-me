import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://alushlifemanual.com/wp-content/uploads/2021/03/Tequila-Sunrise-720x540.jpg"

const theLastWord: DrinkRecipe = {
  name: "Tequila Sunrise",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Blanco Tequila",
      unit: "oz",
      unitAmount: 2,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Orange Juice",
      unit: "oz",
      unitAmount: 4,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Grenadine",
      unit: "oz",
      unitAmount: 0.25,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Orange",
      suffix: "Slice",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Cherry",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill a chilled highball glass with ice",
    "Add the %MI1 and %MI2 to the highball glass",
    "Top with %MI3",
    "Wait for the %MI3 to sink to the bottom of the glass, creating a layered effect",
    "Garnish with %GI1 and %GI2",
  ],
}

export default theLastWord
