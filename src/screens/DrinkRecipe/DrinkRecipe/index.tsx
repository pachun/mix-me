import { Image, Text, View } from "react-native"

import type { DrinkRecipe as DrinkRecipeType } from "types/DrinkRecipe"

import MeasuredIngredients from "./MeasuredIngredients"
import NumberedIngredients from "./NumberedIngredients"
import PortionlessIngredients from "./PortionlessIngredients"
import GarnishIngredients from "./GarnishIngredients"
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
    <PortionlessIngredients
      portionlessIngredients={drinkRecipe.portionlessIngredients}
    />
    <GarnishIngredients garnishIngredients={drinkRecipe.garnishIngredients} />
    <StepsToMake drinkRecipe={drinkRecipe} />
  </View>
)

export default DrinkRecipe
