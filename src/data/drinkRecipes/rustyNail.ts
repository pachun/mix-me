import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/nyEtqr6SumdWU_L1kYVaLvhvLoE=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__04__12085746__rusty-nail-720x720-recipe-5cbb2c3e885b46fcabda7670bcfcf67c.jpg"

const rustyNail: DrinkRecipe = {
  name: "Rusty Nail",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Scotch",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Drambuie",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [],
  stepsToMake: [
    "Add the scotch and Drambuie into a mixing glass with ice and stir until well-chilled.",
    "Strain into a rocks glass over one large ice cube.",
  ],
}

export default rustyNail
