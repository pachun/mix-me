import { useMemo } from "react"
import { Text, View } from "react-native"
import pluralize from "pluralize"

import { DrinkRecipeIngredientType } from "types/DrinkRecipe"
import type {
  DrinkRecipe,
  MeasuredDrinkRecipeIngredient,
  NumberedDrinkRecipeIngredient,
  PreparedDrinkRecipeIngredient,
  GarnishDrinkRecipeIngredient,
} from "types/DrinkRecipe"

const formatMeasuredIngredient = (
  measuredIngredient: MeasuredDrinkRecipeIngredient,
) =>
  measuredIngredient.unit === "oz"
    ? `${measuredIngredient.unitAmount} oz ${measuredIngredient.ingredient}`
    : `${pluralize(
        measuredIngredient.unit,
        measuredIngredient.unitAmount,
        true,
      )} ${measuredIngredient.ingredient}`

const formatNumberedIngredient = (
  numberedIngredient: NumberedDrinkRecipeIngredient,
) => pluralize(numberedIngredient.ingredient, numberedIngredient.amount, true)

const formatPreparedIngredient = (
  preparedIngredient: PreparedDrinkRecipeIngredient,
) =>
  `${preparedIngredient.prefix ? `${preparedIngredient.prefix} ` : ""}${
    preparedIngredient.ingredient
  }${preparedIngredient.suffix ? ` ${preparedIngredient.suffix}` : ""}`

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
    case DrinkRecipeIngredientType.Prepared:
      return formatPreparedIngredient(garnishIngredient)
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
    const preparedIngredientSubstitutions = drinkRecipe.preparedIngredients.map(
      (preparedIngredient, position) => [
        `%PI${position + 1}`,
        formatPreparedIngredient(preparedIngredient),
      ],
    )

    return [
      ...measuredIngredientSubstitutions,
      ...numberedIngredientSubstitutions,
      ...preparedIngredientSubstitutions,
      ...(drinkRecipe.garnishIngredient
        ? [["%G", formatGarnishIngredient(drinkRecipe.garnishIngredient)]]
        : []),
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
