import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/9bgw_NfFP4UqlVntyiMGsOAsqPg=/720x720/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__05__03122240__11-Delicious-Cocktails-to-Try-on-Memorial-Day-Weekend-lady-in-blue-720x720-slideshow-86c4aeaa84134523bad7ca45b952cf4d.jpg"

const ladyInBlue: DrinkRecipe = {
  name: "Lady in Blue",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Creme de Violette",
      unit: "oz",
      unitAmount: 0.25,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Simple Syrup",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Orange Flower Water",
      unit: "Drop",
      unitAmount: 3,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Blue Curacao",
    },
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      ingredient: "Edible Flower Petal",
      amount: 5,
    },
  ],
  stepsToMake: [
    "Add %MI1, %MI2, %MI3, %MI4 and %MI5 to a shaker with ice",
    "Shake until well chilled",
    "Double strain into a coupe glass",
    "Pour a slip of %PI1 down the side of the glass so that it layers on the bottom",
    "Garnish with %GI1",
  ],
}

export default ladyInBlue
