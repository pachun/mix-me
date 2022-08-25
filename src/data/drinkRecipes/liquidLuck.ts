import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.theflavorbender.com/wp-content/uploads/2017/12/Gold-Shimmery-Champagne-The-Flavor-Bender-Featured-Image-SQ-17-699x699.jpg"

const liquidLuck: DrinkRecipe = {
  name: "Liquid Luck",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Cardamom Simple Syrup",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Manzanilla Sherry",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
	{
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Green Chartreuse",
      unit: "tsp",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Edible Gold Glitter",
      unit: "tsp",
      unitAmount: 0.25,
      alternates: [],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      amount: 1,
      ingredient: "Sugar Cube",
      alternates: [],
    },
  ],
  portionlessIngredients: [
      {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Prosecco",
      suffix: ", chilled",
      alternates: [],
    },],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Small, Yellow",
      ingredient: "Starfruit",
      suffix: "Slice",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add sherry, simple syrup, chartreuse and edible glitter in cocktail shaker and dry-shake.",
    "Add three ice cubes to shaker, shake vigourously for 15 seconds, and strain into a trumpet flute.",
    "Top with Prosecco, leaving about 1.5 finger width space between liquid and top of glass.",
    "Gently drop sugar cube into glass.",
    "Garnish with %GI1 (optional)."
  ],
}

export default liquidLuck
