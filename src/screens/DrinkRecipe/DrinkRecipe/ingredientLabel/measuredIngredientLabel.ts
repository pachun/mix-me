import pluralize from "pluralize"

import type { MeasuredDrinkRecipeIngredient } from "types/DrinkRecipe"

const decimalToFraction = (amount: number) => {
  const decimalBit = amount % 1
  const integerBit = amount - decimalBit

  const decimalBitAsFraction = () => {
    if (decimalBit === 0.25) {
      return "1/4"
    } else if (decimalBit === 0.5) {
      return "1/2"
    } else if (decimalBit === 0.75) {
      return "3/4"
    } else if (decimalBit === 0.33) {
      return "1/3"
    } else if (decimalBit === 0.66) {
      return "2/3"
    }
    return ""
  }

  if (integerBit > 0 && decimalBit > 0) {
    return `${integerBit} ${decimalBitAsFraction()}`
  } else if (integerBit === 0) {
    return decimalBitAsFraction()
  } else if (decimalBit === 0) {
    return integerBit
  }
}

const measuredIngredientLabel = (
  measuredIngredient: MeasuredDrinkRecipeIngredient,
) => {
  const amount =
    measuredIngredient.unit === ("oz" || "tsp")
      ? `${decimalToFraction(measuredIngredient.unitAmount)} `
      : measuredIngredient.unitAmount + " "

  const units =
    measuredIngredient.unit === ("oz" || "tsp")
      ? `${measuredIngredient.unit} `
      : pluralize(measuredIngredient.unit, measuredIngredient.unitAmount) + " "

  const prefix = measuredIngredient.prefix
    ? measuredIngredient.prefix + " "
    : ""

  const ingredient = measuredIngredient.ingredient

  const alternates =
    measuredIngredient.alternates.length > 0
      ? ` (or ${measuredIngredient.alternates.join(", ")})`
      : ""

  return amount + units + prefix + ingredient + alternates
}

export default measuredIngredientLabel
