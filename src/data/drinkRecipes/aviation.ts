import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://sipsfromscripts.com/wp-content/uploads/2020/08/Aviation-Cocktail-Recipe-SipsFromScripts.webp"
const aviation: DrinkRecipe = {
  name: "Aviation",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 2,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Maraschino Liqueur",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Creme de Violette",
      unit: "oz",
      unitAmount: 0.25,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Brandied Cherry",
      suffix: "",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill cocktail shaker half-full with ice",
    "Add %MI1, %MI2, %MI3 and %MI4 to shaker. Shake until well-chilled",
    "Strain into a cocktail glass",
    "Garnish with a %GI1",
  ],
}

export default aviation
