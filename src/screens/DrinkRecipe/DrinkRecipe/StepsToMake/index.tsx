import { useMemo } from "react"
import { Text, View } from "react-native"
import pluralize from "pluralize"

import { DrinkRecipeIngredientType } from "types/DrinkRecipe"
import type {
  DrinkRecipe,
  MeasuredDrinkRecipeIngredient,
  NumberedDrinkRecipeIngredient,
  PortionlessDrinkRecipeIngredient,
  GarnishDrinkRecipeIngredient,
} from "types/DrinkRecipe"

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

const formatMeasuredIngredient = (
  measuredIngredient: MeasuredDrinkRecipeIngredient,
) =>
  measuredIngredient.unit === "oz"
    ? `${decimalToFraction(measuredIngredient.unitAmount)} oz ${
        measuredIngredient.ingredient
      }`
    : `${pluralize(
        measuredIngredient.unit,
        measuredIngredient.unitAmount,
        true,
      )} ${measuredIngredient.ingredient}`

const formatNumberedIngredient = (
  numberedIngredient: NumberedDrinkRecipeIngredient,
) =>
  pluralize(
    numberedIngredient.ingredient,
    numberedIngredient.amount,
    numberedIngredient.amount > 1,
  )

const formatPortionlessIngredient = (
  portionlessIngredient: PortionlessDrinkRecipeIngredient,
) =>
  `${portionlessIngredient.prefix ? `${portionlessIngredient.prefix} ` : ""}${
    portionlessIngredient.ingredient
  }${portionlessIngredient.suffix ? ` ${portionlessIngredient.suffix}` : ""}`

const formatGarnishIngredient = (
  garnishIngredient: GarnishDrinkRecipeIngredient,
) => {
  switch (garnishIngredient.type) {
    case DrinkRecipeIngredientType.Measured:
      return formatMeasuredIngredient(garnishIngredient)
      break
    case DrinkRecipeIngredientType.Numbered:
      return formatNumberedIngredient(garnishIngredient)
      break
    case DrinkRecipeIngredientType.Portionless:
      return formatPortionlessIngredient(garnishIngredient)
      break
  }
}

const formatStepToMake = (
  stepToMake: string,
  ingredientSubstitutions: string[][],
): string => {
  return ingredientSubstitutions.reduce(
    (stepToMake, ingredientSubstitution) => {
      return stepToMake.replace(
        ingredientSubstitution[0],
        ingredientSubstitution[1].toLowerCase(),
      )
    },
    stepToMake,
  )
}

interface StepsToMakeProps {
  drinkRecipe: DrinkRecipe
}

const StepsToMake = ({ drinkRecipe }: StepsToMakeProps) => {
  const ingredientSubstitutions: string[][] = useMemo(() => {
    const measuredIngredientSubstitutions = drinkRecipe.measuredIngredients.map(
      (measuredIngredient, position) => [
        `%MI${position + 1}`,
        formatMeasuredIngredient(measuredIngredient),
      ],
    )
    const numberedIngredientSubstitutions = drinkRecipe.numberedIngredients.map(
      (numberedIngredient, position) => [
        `%NI${position + 1}`,
        formatNumberedIngredient(numberedIngredient),
      ],
    )
    const portionlessIngredientSubstitutions =
      drinkRecipe.portionlessIngredients.map(
        (portionlessIngredient, position) => [
          `%PI${position + 1}`,
          formatPortionlessIngredient(portionlessIngredient),
        ],
      )
    const garnishIngredientSubstitutions = drinkRecipe.garnishIngredients.map(
      (garnishIngredient, position) => [
        `%GI${position + 1}`,
        formatGarnishIngredient(garnishIngredient),
      ],
    )

    return [
      ...measuredIngredientSubstitutions,
      ...numberedIngredientSubstitutions,
      ...portionlessIngredientSubstitutions,
      ...garnishIngredientSubstitutions,
    ]
  }, [drinkRecipe])

  return (
    <View>
      {drinkRecipe.stepsToMake.map((stepToMake, position) => {
        return (
          <Text key={position}>
            {formatStepToMake(stepToMake, ingredientSubstitutions)}
          </Text>
        )
      })}
    </View>
  )
}

export default StepsToMake
