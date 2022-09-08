import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/Qz3PDsAtBGzAnh732CKBTV_Zj5g=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/great-pumpkin-720x720-primary-4e5e2da7b3ed4e8e8b60b5b556ea2637.jpg"

const greatPumpkin: DrinkRecipe = {
  name: "Great Pumpkin",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Pumpkin Ale",
      unit: "oz",
      unitAmount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Apple Brandy",
      unit: "oz",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Rye Whiskey",
      unit: "oz",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Maple Syrup Grade B",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Egg",
      amount: 1,
      alternates: [],
    },
  ],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Grated",
      ingredient: "Nutmeg",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3, %MI4 and %NI1 to cocktail shaker and dry-shake (without ice) vigorously.",
    "Add ice and shake again until well-chilled.",
    "Strain into a chilled Fizz glass.",
    "Garnish with a dusting of %GI1.",
  ],
}

export default greatPumpkin
