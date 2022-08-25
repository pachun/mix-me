import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  ""

const kissTheGirl: DrinkRecipe = {
  name: "Kiss the Girl",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gold Rum",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Amaretto Liqueur",
      unit: "oz",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Pineapple Schnapps",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
	{
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Peach Schnapps",
      unit: "oz",
      unitAmount: 0.25,
      alternates: [],
    },
	{
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lime Juice",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
	{
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
      unit: "oz",
      unitAmount: 0.25,
      alternates: [],
    },
	{
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Pomegrante Juice",
      unit: "oz",
      unitAmount: 0.25,
      alternates: [],
    },
  ],
  numberedIngredients: [
    {      
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Egg White",
      amount: 1,
      alternates: [],
	},
  ],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unit: "Cup",
      unitAmount: .25,
      ingredient: "Granulated Sugar",
      alternates: [],
    },
	{
      type: DrinkRecipeIngredientType.Measured,
      unit: "tsp",
      unitAmount: .25,
      ingredient: "Edible Gold Glitter",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Stir sugar and edible glitter together.",
    "Run lime wedge around the entire rim of a chilled cocktail glass.",
    "Dip glass in gold-sugar mix to evenly coat rim.",
    "Fill a cocktail shaker half-full with cracked ice.",
    "Add %MI1, %MI2, %MI3, %MI4, %MI5, %MI6, %MI7, and %NI8 to cocktail shaker.",
    "Shake vigorously until well-chilled.",
    "Double strain into cocktail glass, avoiding disturbing garnished rim.",
    "Garnish with lime wedge if desired.",
  ],
}

export default kissTheGirl
