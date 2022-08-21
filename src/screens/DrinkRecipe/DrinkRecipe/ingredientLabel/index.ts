import { DrinkRecipeIngredientType } from "types/DrinkRecipe"
import type { DrinkRecipeIngredient } from "types/DrinkRecipe"

import measuredIngredientLabel from "./measuredIngredientLabel"
import numberedIngredientLabel from "./numberedIngredientLabel"
import portionlessIngredientLabel from "./portionlessIngredientLabel"

const ingredientLabel = (drinkRecipeIngredient: DrinkRecipeIngredient) => {
  switch (drinkRecipeIngredient.type) {
    case DrinkRecipeIngredientType.Measured:
      return measuredIngredientLabel(drinkRecipeIngredient)
      break
    case DrinkRecipeIngredientType.Numbered:
      return numberedIngredientLabel(drinkRecipeIngredient)
      break
    case DrinkRecipeIngredientType.Portionless:
      return portionlessIngredientLabel(drinkRecipeIngredient)
      break
  }
}

export default ingredientLabel
