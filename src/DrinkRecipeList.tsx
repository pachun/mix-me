import { FlatList, TouchableOpacity } from "react-native"

import DrinkRecipeListItem from "DrinkRecipeListItem"
import { ginAndTonicRecipe, pinkPantherRecipe } from "recipes"
import { DrinkRecipe } from "types/DrinkRecipe"

import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Screens } from "types/Screens"

const DrinkRecipeList = ({
  navigation,
}: NativeStackScreenProps<Screens, "Drink Recipe List">) => {
  const showDrinkRecipe = (drinkRecipe: DrinkRecipe) => () => {
    navigation.navigate("Drink Recipe", { drinkRecipe })
  }

  return (
    <FlatList
      data={[ginAndTonicRecipe, pinkPantherRecipe]}
      renderItem={({ item: drinkRecipe }) => (
        <TouchableOpacity onPress={showDrinkRecipe(drinkRecipe)}>
          <DrinkRecipeListItem drinkRecipe={drinkRecipe} />
        </TouchableOpacity>
      )}
    />
  )
}

export default DrinkRecipeList
