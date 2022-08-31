import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://images.absolutdrinks.com/drink-images/Raw/Absolut/eb823f87-279f-4ce9-ab1d-24ce4dd3f749.jpg?imwidth=500"

const oldPotato: DrinkRecipe = {
  name: "Old Potato",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Irish Whiskey",
      unit: "oz",
      unitAmount: 2,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Applejack",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Dry Vermouth",
      unit: "oz",
      unitAmount: 5,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Apple",
      suffix: "Slice",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill a mixing glass with ice cubes.",
    "Add %MI1, %MI2 and %MI3 to the glass.",
    "Stir quickly until chilled and strain into a cocktail glass.",
    "Garnish with %GI1.",
  ],
}

export default oldPotato
