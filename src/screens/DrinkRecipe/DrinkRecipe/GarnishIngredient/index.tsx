import { Text } from "react-native"
import MeasuredIngredients from "../MeasuredIngredients"
import NumberedIngredients from "../NumberedIngredients"
import PreparedIngredients from "../PreparedIngredients"

import type { GarnishDrinkRecipeIngredient } from "types/DrinkRecipe"

interface GarnishIngredientProps {
  garnishIngredient?: GarnishDrinkRecipeIngredient
}

const GarnishIngredient = ({ garnishIngredient }: GarnishIngredientProps) => {
  if (garnishIngredient?.type === "Measured Ingredient") {
    return (
      <Text>
        Garnish:{" "}
        <MeasuredIngredients measuredIngredients={[garnishIngredient]} />
      </Text>
    )
  } else if (garnishIngredient?.type === "Numbered Ingredient") {
    return (
      <Text>
        Garnish:{" "}
        <NumberedIngredients numberedIngredients={[garnishIngredient]} />
      </Text>
    )
  } else if (garnishIngredient?.type === "Prepared Ingredient") {
    return (
      <Text>
        Garnish:{" "}
        <PreparedIngredients preparedIngredients={[garnishIngredient]} />
      </Text>
    )
  }

  return null
}

export default GarnishIngredient
