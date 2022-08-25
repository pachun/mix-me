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

  const alternates =
    portionlessingredient.substitutes.length > 0
      ? " (or " + portionlessingredient.substitutes.join(", ") + ")"
      : ""

  return prefix + ingredient + suffix + alternates
}

export default portionlessIngredientLabel
