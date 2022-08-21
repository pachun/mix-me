import pluralize from "pluralize"

import type { NumberedDrinkRecipeIngredient } from "types/DrinkRecipe"

const listedPluralizedAlternates = (
  numberedIngredient: NumberedDrinkRecipeIngredient,
) =>
  numberedIngredient.alternates
    .map(alternate => pluralize(alternate, numberedIngredient.amount))
    .join(", ")

const numberedIngredientLabel = (
  numberedIngredient: NumberedDrinkRecipeIngredient,
) => {
  const amount =
    numberedIngredient.amount > 1 ? `${numberedIngredient.amount} ` : ""

  const prefix = numberedIngredient.prefix
    ? `${numberedIngredient.prefix} `
    : ""

  const pluralizedIngredient = pluralize(
    numberedIngredient.ingredient,
    numberedIngredient.amount,
  )

  const alternates =
    numberedIngredient.alternates.length > 0
      ? ` (or ${listedPluralizedAlternates(numberedIngredient)})`
      : ""

  return amount + prefix + pluralizedIngredient + alternates
}

export default numberedIngredientLabel
