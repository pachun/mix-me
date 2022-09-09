import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/d55CVnecxObgXa7lwGzVuNRMMlA=/720x480/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2016__01__08134359__Burns-Night-negroni-smoke-720x480-inline-0ef107041e9f48fb98d37390a690b567.jpg"

const princessMarysPride: DrinkRecipe = {
  name: "Princess Mary's Pride",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Apple Brandy",
      unit: "oz",
      unitAmount: 2.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Dubonnet Rouge Grand Aperitif",
      unit: "oz",
      unitAmount: 1.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Dry Vermouth",
      unit: "oz",
      unitAmount: 0.0,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Orange",
      suffix: "Twist",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add the %MI1, %MI2, %MI3 and %MI4 to a mixing glass with ice.",
    "Stir until well - chilled.",
    "Strain into a cocktail glass.",
    "Garnish with an %GI1.",
  ],
}

export default princessMarysPride
