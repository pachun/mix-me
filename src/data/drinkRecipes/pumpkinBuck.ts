import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/AiiScF_3Lk7T9UhtN1nJzKoFU20=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pumpkin-buck-720x720-primary-bf4b55c8a12b4039be883ec68b9108f5.jpg"

const pumpkinBuck: DrinkRecipe = {
  name: "Pumpkin Buck",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Applejack",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Pumpkin Purée",
      unit: "oz",
      unitAmount: 15.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Water",
      unit: "Quart",
      unitAmount: 3.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Maple Syrup Grade A",
      unit: "oz",
      unitAmount: 3.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Ginger",
      unit: "Cup",
      unitAmount: 0.5,
      alternates: [],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Lemon",
      amount: 6,
      alternates: [],
    },

    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Whole Cloves",
      amount: 4,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Star Anise Pod",
      amount: 3,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Cardamom Pod",
      amount: 4,
      alternates: [],
    },
  ],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Cinnamon",
      suffix: "Stick",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Split",
      ingredient: "Vanilla Bean",
      alternates: [],
    },
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Candied",
      ingredient: "Ginger",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Grated",
      ingredient: "Nutmeg",
      alternates: [],
    },
  ],
  stepsToMake: [
    "To make Pumpkin Soda:",
    "Zest all %NI1 and finely chop %MI5.",
    "Add zest, %MI2, %MI3, %MI4, and finely chopped %MI5 to a large saucepan.",
    "Heat pan on high and add %NI2, %NI3, %PI1 and %PI2 to saucepan.",
    "Bring to a low boil, then reduce heat to low.",
    "Simmer for 20 minutes, then remove from heat. Allow to cool, then strain out the solids.",
    "Run the mixture through a soda maker to carbonate and chill for 2 hours.",
    "    ",
    "Add the %MI1 to a highball glass and fill with ice.",
    "Top with Pumpkin Soda mix and stir gently to combine until chilled.",
    "Garnish with a skewered piece of %GI1 and dust with %GI2.",
  ],
}

export default pumpkinBuck
