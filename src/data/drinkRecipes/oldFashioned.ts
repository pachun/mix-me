import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/p24WIerjbABYLEL94S5N7B0QQro=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__08113350__bourbon-old-fashioned-720x720-recipe-ade6f7780c304999be3577e565c9bcdd.jpg"

const oldFashioned: DrinkRecipe = {
  name: "Old Fashioned",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 2,
      unit: "oz",
      ingredient: "Bourbon",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1,
      unit: "tsp",
      ingredient: "Water",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 1,
      unit: "tsp",
      ingredient: "Sugar",
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      unitAmount: 3,
      unit: "Dash",
      ingredient: "Angostura Bitters",
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
    "Add %MI4, and %MI3 to a rocks glass, then add %MI2.",
    "Stir until the sugar is nearly dissolved.",
    "Fill the glass with large ice cubes, add %MI1 and gently stir to combine.",
    "Express the oil of an %GI1 over the glass, then drop into the glass to garnish.",
  ],
}

export default oldFashioned
