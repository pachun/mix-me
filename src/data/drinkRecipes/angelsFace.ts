import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/Nvc1nUKiALoRXhtY_hoTxD0bW40=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/angels-face-720x720-primary-974a2f0bde394508b149e95fe272122f.jpg"
const angelsFace: DrinkRecipe = {
  name: "Angel's Face",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "London Dry Gin",
      unit: "oz",
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Applejack",
      unit: "oz",
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Apricot Liqueur",
      unit: "oz",
      unitAmount: 1,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Orange",
      suffix: "Peel",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Fill mixing glass with ice",
    "Add %MI1, %MI2, and %MI3 to mixing glass. Shake until well-chilled",
    "Strain into a cocktail glass",
    "Garnish with an %GI1",
  ],
}

export default angelsFace
