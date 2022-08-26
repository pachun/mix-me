import { useState } from "react"
import { FlatList, TextInput, TouchableOpacity } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

import DrinkRecipeListItem from "./DrinkRecipeListItem"

import useSearchedIngredients from "./useSearchedIngredients"
import useDrinkRecipes from "./useDrinkRecipes"

import type { Navigation } from "types/Navigation"
import type { DrinkRecipe } from "types/DrinkRecipe"

const DrinkRecipes = ({
  navigation,
}: NativeStackScreenProps<Navigation, "Drink Recipes">) => {
  const showDrinkRecipe = (drinkRecipe: DrinkRecipe) => () =>
    navigation.navigate("Drink Recipe", { drinkRecipe })

  const [searchedText, setSearchedText] = useState("")

  const searchedIngredients = useSearchedIngredients(searchedText)

  const drinkRecipes = useDrinkRecipes(searchedIngredients)

  return (
    <>
      <TextInput
        placeholder="Search by Ingredient"
        value={searchedText}
        onChangeText={setSearchedText}
      />
      <FlatList
        data={drinkRecipes}
        renderItem={({ item: drinkRecipe }) => (
          <TouchableOpacity onPress={showDrinkRecipe(drinkRecipe)}>
            <DrinkRecipeListItem
              drinkRecipe={drinkRecipe}
              searchedIngredients={searchedIngredients}
            />
          </TouchableOpacity>
        )}
      />
    </>
  )
}

export default DrinkRecipes
