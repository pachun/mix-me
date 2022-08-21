import type { PortionlessDrinkRecipeIngredient } from "types/DrinkRecipe"

const portionlessIngredientLabel = (
  portionlessIngredient: PortionlessDrinkRecipeIngredient,
) => {
  const prefix = portionlessIngredient.prefix
    ? portionlessIngredient.prefix + " "
    : ""

  const ingredient = portionlessIngredient.ingredient

  const suffix = portionlessIngredient.suffix
    ? " " + portionlessIngredient.suffix
    : ""

  return prefix + ingredient + suffix
}

export default portionlessIngredientLabel
