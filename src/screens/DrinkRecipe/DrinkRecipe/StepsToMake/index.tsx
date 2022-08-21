import { useMemo } from "react"
import { Text, View } from "react-native"

import ingredientLabel from "../ingredientLabel"

import type { DrinkRecipe } from "types/DrinkRecipe"

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
        ingredientLabel(measuredIngredient),
      ],
    )
    const numberedIngredientSubstitutions = drinkRecipe.numberedIngredients.map(
      (numberedIngredient, position) => [
        `%NI${position + 1}`,
        ingredientLabel(numberedIngredient),
      ],
    )
    const portionlessIngredientSubstitutions =
      drinkRecipe.portionlessIngredients.map(
        (portionlessIngredient, position) => [
          `%PI${position + 1}`,
          ingredientLabel(portionlessIngredient),
        ],
      )
    const garnishIngredientSubstitutions = drinkRecipe.garnishIngredients.map(
      (garnishIngredient, position) => [
        `%GI${position + 1}`,
        ingredientLabel(garnishIngredient),
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
