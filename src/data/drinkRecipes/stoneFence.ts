import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/Ugepzm4y_HQIK3OB1TL3PU7p53c=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__09__14141931__stone-fence-720x720-article-e5bed116a2a7470c9db6b34d609896bc.jpg"

const stoneFence: DrinkRecipe = {
  name: "Stone Fence",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Rye Whiskey",
      unit: "oz",
      unitAmount: 2.0,
      alternates: ["Bourbon", "Rum", "Brandy"],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Angostura Bitters",
      unit: "Dash",
      unitAmount: 1.0,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Apple Cider",
      alternates: [],
    },
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Mint",
      suffix: "Sprig",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1 and %MI2 to a Collins glass filled with ice.",
    "Top-off glass with %PI1 and stir gently to combine.",
    "Garnish with a %GI1.",
  ],
}

export default stoneFence
