import { Text } from "react-native"
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

interface MeasuredIngredientsProps {
  measuredIngredients: MeasuredDrinkRecipeIngredient[]
}

const MeasuredIngredients = ({
  measuredIngredients,
}: MeasuredIngredientsProps) => {
  return (
    <>
      {measuredIngredients.map((measuredIngredient, position) => {
        const displayedAmount = decimalToFraction(measuredIngredient.unitAmount)

        const ozLabel = `${displayedAmount} oz ${measuredIngredient.ingredient}`
        const otherLabel = `${pluralize(
          measuredIngredient.unit,
          measuredIngredient.unitAmount,
          true,
        )} ${measuredIngredient.ingredient}`

        return (
          <Text key={position}>
            {measuredIngredient.unit === "oz" ? ozLabel : otherLabel}
            {measuredIngredient.alternates.length > 0
              ? ` (or ${measuredIngredient.alternates.join(", ")})`
              : ""}
          </Text>
        )
      })}
    </>
  )
}

export default MeasuredIngredients
