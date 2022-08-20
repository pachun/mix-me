import { Text } from "react-native"

import type { PortionlessDrinkRecipeIngredient } from "types/DrinkRecipe"

interface PortionlessIngredientsProps {
  portionlessIngredients: PortionlessDrinkRecipeIngredient[]
}

const PortionlessIngredients = ({
  portionlessIngredients,
}: PortionlessIngredientsProps) => {
  return (
    <>
      {portionlessIngredients.map((portionlessIngredient, position) => (
        <Text key={position}>
          {portionlessIngredient.prefix
            ? `${portionlessIngredient.prefix} `
            : ""}
          {portionlessIngredient.ingredient}
          {portionlessIngredient.suffix
            ? ` ${portionlessIngredient.suffix}`
            : ""}
        </Text>
      ))}
    </>
  )
}

export default PortionlessIngredients
