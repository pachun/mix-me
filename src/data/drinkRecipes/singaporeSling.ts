import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://robbreport.com/wp-content/uploads/2022/08/GettyImages_singapore_sling.jpg"

const singaporeSling: DrinkRecipe = {
  name: "Singapore Sling",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Benedictine",
      unit: "oz",
      unitAmount: 0.25,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Grand Marnier",
      unit: "oz",
      unitAmount: 0.25,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Cherry Liqueur",
      unit: "oz",
      unitAmount: 0.25,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Pineapple Juice",
      unit: "oz",
      unitAmount: 1,
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
      ingredient: "Angostura Bitters",
      unit: "Dash",
      unitAmount: 1,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Chilled",
      ingredient: "Club Soda",
      alternates: [],
    },
  ],
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
    "Add %MI1, %MI2, %MI3, %MI4, %MI5, %MI6 and %MI7 to a shaker with ice",
    "Shake until well-chilled",
    "Fill a highball glass with fresh ice",
    "Strain shaker contents into the highball glass",
    "Top highball glass with %PI1",
    "Garnish with %GI1 and %GI2",
  ],
}

export default singaporeSling
