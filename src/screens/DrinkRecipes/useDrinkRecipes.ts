import { useMemo } from "react"

import allDrinkRecipes from "data/drinkRecipes"

import drinkRecipeIngredients from "helpers/drinkRecipeIngredients"
import missingIngredients from "helpers/missingIngredients"

import { hasIntersection } from "helpers/arrayHelpers"

import type { Ingredient } from "types/Ingredient"

const useDrinkRecipes = (searchedIngredients: Ingredient[]) => {
  const drinkRecipesIncludingASearchedIngredient = useMemo(
    () =>
      allDrinkRecipes.filter(drinkRecipe =>
        hasIntersection(
          drinkRecipeIngredients(drinkRecipe).flat(),
          searchedIngredients,
        ),
      ),
    [searchedIngredients],
  )

  const drinkRecipesIncludingASearchedIngredientOrderedByNumberOfMissingSearchedIngredients =
    useMemo(() => {
      return drinkRecipesIncludingASearchedIngredient.sort(
        (drinkRecipe1, drinkRecipe2) => {
          const numberOfIngredientsMissingInDrink1 = missingIngredients(
            drinkRecipeIngredients(drinkRecipe1),
            searchedIngredients,
          ).length
          const numberOfIngredientsMissingInDrink2 = missingIngredients(
            drinkRecipeIngredients(drinkRecipe2),
            searchedIngredients,
          ).length

          return numberOfIngredientsMissingInDrink1 >
            numberOfIngredientsMissingInDrink2
            ? 1
            : -1
        },
      )
    }, [drinkRecipesIncludingASearchedIngredient, searchedIngredients])

  const drinkRecipes = useMemo(() => {
    if (searchedIngredients.length === 0) {
      return allDrinkRecipes
    } else {
      return drinkRecipesIncludingASearchedIngredientOrderedByNumberOfMissingSearchedIngredients
    }
  }, [
    searchedIngredients,
    drinkRecipesIncludingASearchedIngredientOrderedByNumberOfMissingSearchedIngredients,
  ])

  return drinkRecipes
}

export default useDrinkRecipes
