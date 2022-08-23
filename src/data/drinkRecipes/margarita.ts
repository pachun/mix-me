import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2019%2F07%2Fhow-make-perfect-margarita-ft-blog0719.jpg"

const margarita: DrinkRecipe = {
  name: "Margarita",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 2,
      unit: "oz",
      ingredient: "Blanco Tequila",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.5,
      unit: "oz",
      ingredient: "Agave Syrup",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 0.5,
      unit: "oz",
      ingredient: "Orange Liqueur",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1,
      unit: "oz",
      ingredient: "Lime Juice",
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lime",
      suffix: "Wheel",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: "Kosher",
      ingredient: "Salt",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Rub %GI1 around the edge of a rocks glass and dip in %GI2",
    "Add %MI1, %MI2, %MI3 and %MI4 to a cocktail shaker with ice",
    "Shake until well-chilled",
    "Strain into a glass over ice",
    "Garnish with %GI1",
  ],
}

export default margarita
