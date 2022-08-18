import { Text } from "react-native"

import type { MeasuredDrinkRecipeIngredient } from "types/DrinkRecipe"

interface MeasuredIngredientsProps {
  measuredIngredients: MeasuredDrinkRecipeIngredient[]
}

const MeasuredIngredients = ({
  measuredIngredients,
}: MeasuredIngredientsProps) => {
  return (
    <>
      {measuredIngredients.map((measuredIngredient, position) => (
        <Text key={position}>
          {measuredIngredient.unitAmount} {measuredIngredient.unit}{" "}
          {measuredIngredient.ingredient}
          {measuredIngredient.alternates.length > 0
            ? ` (or ${measuredIngredient.alternates.join(", ")})`
            : ""}
        </Text>
      ))}
    </>
  )
}

export default MeasuredIngredients
