import { Text } from "react-native"

import type { PreparedDrinkRecipeIngredient } from "types/DrinkRecipe"

interface PreparedIngredientsProps {
  preparedIngredients: PreparedDrinkRecipeIngredient[]
}

const PreparedIngredients = ({
  preparedIngredients,
}: PreparedIngredientsProps) => {
  return (
    <>
      {preparedIngredients.map((preparedIngredient, position) => (
        <Text key={position}>
          {preparedIngredient.prefix ? `${preparedIngredient.prefix} ` : ""}
          {preparedIngredient.ingredient}
          {preparedIngredient.suffix ? ` ${preparedIngredient.suffix}` : ""}
        </Text>
      ))}
    </>
  )
}

export default PreparedIngredients
