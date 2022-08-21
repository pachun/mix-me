import { Image, Text, View } from "react-native"

import type { DrinkRecipe as DrinkRecipeType } from "types/DrinkRecipe"

import ingredientLabel from "./ingredientLabel"
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

    {[
      ...drinkRecipe.measuredIngredients,
      ...drinkRecipe.numberedIngredients,
      ...drinkRecipe.portionlessIngredients,
    ].map((ingredient, position) => (
      <Text key={position}>{ingredientLabel(ingredient)}</Text>
    ))}

    {drinkRecipe.garnishIngredients.map((garnishIngredient, position) => (
      <Text key={position}>Garnish: {ingredientLabel(garnishIngredient)}</Text>
    ))}

    <StepsToMake drinkRecipe={drinkRecipe} />
  </View>
)

export default DrinkRecipe
