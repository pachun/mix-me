import type { Ingredient } from "types/Ingredient"

import { hasIntersection } from "helpers/arrayHelpers"

const missingIngredients = (
  drinkRecipeIngredients: Ingredient[][],
  searchedIngredients: Ingredient[],
) => {
  return drinkRecipeIngredients.reduce(
    (missingIngredients, drinkRecipeIngredient) => {
      if (hasIntersection(drinkRecipeIngredient, searchedIngredients)) {
        return missingIngredients
      } else {
        return [...missingIngredients, drinkRecipeIngredient[0]]
      }
    },
    [],
  )
}

export default missingIngredients
