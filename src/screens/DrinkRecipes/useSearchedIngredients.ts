import { useMemo } from "react"

import intentionallyIncludes from "./intentionallyIncludes"
import { hasIntersection, union } from "helpers/arrayHelpers"

import ingredients from "data/ingredients"
import ingredientAliases from "data/ingredientAliases"
import ingredientAndIngredientAliasesPairs from "data/ingredientAndIngredientAliasesPairs"

import type { IngredientAlias } from "types/IngredientAlias"

const useSearchedIngredients = (searchedText: string) => {
  const ingredientAliasesIncludedInSearchedText = useMemo(
    () =>
      ingredientAliases.filter((ingredientAlias: IngredientAlias) =>
        intentionallyIncludes(searchedText, ingredientAlias),
      ),
    [searchedText],
  )

  const ingredientsAliasedInSearchedText = useMemo(
    () =>
      ingredientAndIngredientAliasesPairs
        .filter(([_ingredient, ingredientsAliases]) =>
          hasIntersection(
            ingredientsAliases,
            ingredientAliasesIncludedInSearchedText,
          ),
        )
        .map(([ingredient]) => ingredient),
    [ingredientAliasesIncludedInSearchedText],
  )

  const ingredientsIncludedInSearchedText = useMemo(
    () =>
      ingredients.filter(ingredient =>
        intentionallyIncludes(searchedText, ingredient),
      ),
    [searchedText],
  )

  const searchedIngredients = useMemo(
    () =>
      union(
        ingredientsIncludedInSearchedText,
        ingredientsAliasedInSearchedText,
      ),
    [ingredientsIncludedInSearchedText, ingredientsAliasedInSearchedText],
  )

  return searchedIngredients
}

export default useSearchedIngredients
