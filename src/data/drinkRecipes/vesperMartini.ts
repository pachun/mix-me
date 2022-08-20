import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.saveur.com/uploads/2020/04/13/QPD2XSLP7FFRRKPVWLCZPZND2I.jpg?auto=webp&width=1440&height=1080"

const vesperMartini: DrinkRecipe = {
  name: "Vesper Martini",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 3,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Vodka",
      unit: "oz",
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lillet Blanc Aperitif",
      unit: "oz",
      unitAmount: 0.5,
      alternates: ["Half-and-Half"],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lemon",
      suffix: "Twist",
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2 and %MI3 to a mixing glass",
    "Stir with ice until well-chilled",
    "Strain into a chilled cocktail glass",
    "Express the oils from a %GI1 over the drink",
    "Rub the %GI1 along the rim of the glass",
    "Drop the %GI1 into the cocktail",
  ],
}

export default vesperMartini
