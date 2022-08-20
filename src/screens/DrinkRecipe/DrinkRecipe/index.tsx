import { Image, Text, View } from "react-native"

import type { DrinkRecipe as DrinkRecipeType } from "types/DrinkRecipe"

import MeasuredIngredients from "./MeasuredIngredients"
import NumberedIngredients from "./NumberedIngredients"
import PreparedIngredients from "./PreparedIngredients"
import GarnishIngredient from "./GarnishIngredient"
import StepsToMake from "./StepsToMake"

interface DrinkRecipeProps {
  drinkRecipe: DrinkRecipeType
}

const DrinkRecipe = ({ drinkRecipe }: DrinkRecipeProps) => (
  <View>
    <Text>{drinkRecipe.name}</Text>
    <Image
      source={{ uri: drinkRecipe.imageUrl }}
      style={{ width: 200, height: 200 }}
    />
    <MeasuredIngredients
      measuredIngredients={drinkRecipe.measuredIngredients}
    />
    <NumberedIngredients
      numberedIngredients={drinkRecipe.numberedIngredients}
    />
    <PreparedIngredients
      preparedIngredients={drinkRecipe.preparedIngredients}
    />
    <GarnishIngredient garnishIngredient={drinkRecipe.garnishIngredient} />
    <StepsToMake drinkRecipe={drinkRecipe} />
  </View>
)

export default DrinkRecipe
