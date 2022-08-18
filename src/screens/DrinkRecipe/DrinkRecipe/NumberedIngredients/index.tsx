import { Text } from "react-native"
import pluralize from "pluralize"

import type { NumberedDrinkRecipeIngredient } from "types/DrinkRecipe"

interface NumberedIngredientsProps {
  numberedIngredients: NumberedDrinkRecipeIngredient[]
}

const NumberedIngredients = ({
  numberedIngredients,
}: NumberedIngredientsProps) => {
  return (
    <>
      {numberedIngredients.map((numberedIngredient, position) => (
        <Text key={position}>
          {pluralize(
            numberedIngredient.ingredient,
            numberedIngredient.amount,
            true,
          )}
        </Text>
      ))}
    </>
  )
}

export default NumberedIngredients
