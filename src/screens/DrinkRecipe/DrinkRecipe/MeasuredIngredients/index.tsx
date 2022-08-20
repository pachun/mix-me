import { Text } from "react-native"
import pluralize from "pluralize"

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
          {measuredIngredient.unit === "oz"
            ? `${measuredIngredient.unitAmount} oz ${measuredIngredient.ingredient}`
            : pluralize(
                measuredIngredient.unit,
                measuredIngredient.unitAmount,
                true,
              )}{" "}
          {measuredIngredient.alternates.length > 0
            ? ` (or ${measuredIngredient.alternates.join(", ")})`
            : ""}
        </Text>
      ))}
    </>
  )
}

export default MeasuredIngredients
