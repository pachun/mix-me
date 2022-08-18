import { Text, TouchableOpacity, View } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

import DrinkRecipeComponent from "./DrinkRecipe"

import type { Navigation } from "types/Navigation"

const DrinkRecipe = ({
  navigation,
  route,
}: NativeStackScreenProps<Navigation, "Drink Recipe">) => {
  const drinkRecipe = route.params.drinkRecipe

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <DrinkRecipeComponent drinkRecipe={drinkRecipe} />
    </View>
  )
}

export default DrinkRecipe
