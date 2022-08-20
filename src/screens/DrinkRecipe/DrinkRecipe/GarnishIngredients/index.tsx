import { Text } from "react-native"
import MeasuredIngredients from "../MeasuredIngredients"
import NumberedIngredients from "../NumberedIngredients"
import PortionlessIngredients from "../PortionlessIngredients"

import { DrinkRecipeIngredientType } from "types/DrinkRecipe"
import type { GarnishDrinkRecipeIngredient } from "types/DrinkRecipe"

interface GarnishIngredientsProps {
  garnishIngredients: GarnishDrinkRecipeIngredient[]
}

const GarnishIngredients = ({
  garnishIngredients,
}: GarnishIngredientsProps) => {
  return (
    <>
      {garnishIngredients.map(garnishIngredient => {
        switch (garnishIngredient.type) {
          case DrinkRecipeIngredientType.Measured:
            return (
              <Text key={garnishIngredient.ingredient}>
                Garnish:{" "}
                <MeasuredIngredients
                  measuredIngredients={[garnishIngredient]}
                />
              </Text>
            )
            break
          case DrinkRecipeIngredientType.Numbered:
            return (
              <Text key={garnishIngredient.ingredient}>
                Garnish:{" "}
                <NumberedIngredients
                  numberedIngredients={[garnishIngredient]}
                />
              </Text>
            )
            break
          case DrinkRecipeIngredientType.Portionless:
            return (
              <Text key={garnishIngredient.ingredient}>
                Garnish:{" "}
                <PortionlessIngredients
                  portionlessIngredients={[garnishIngredient]}
                />
              </Text>
            )
            break
        }
      })}
    </>
  )
}

export default GarnishIngredients
