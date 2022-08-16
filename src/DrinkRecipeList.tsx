import { useMemo, useState } from "react"
import { FlatList, TextInput, TouchableOpacity } from "react-native"

import DrinkRecipeListItem from "DrinkRecipeListItem"
import drinkRecipes from "drinkRecipes"
import { DrinkRecipe } from "types/DrinkRecipe"

import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Screens } from "types/Screens"

const DrinkRecipeList = ({
  navigation,
}: NativeStackScreenProps<Screens, "Drink Recipe List">) => {
  const showDrinkRecipe = (drinkRecipe: DrinkRecipe) => () => {
    navigation.navigate("Drink Recipe", { drinkRecipe })
  }

  const [searchedIngredient, setSearchedIngredient] = useState("")

  const displayedDrinkRecipes = useMemo(() => {
    if (searchedIngredient === "") {
      return drinkRecipes
    } else {
      const drinkRecipesFilteredBySearchedIngredient = drinkRecipes.filter(
        (drinkRecipe) =>
          drinkRecipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchedIngredient.toLowerCase()),
          ),
      )

      return drinkRecipesFilteredBySearchedIngredient
    }
  }, [searchedIngredient])

  return (
    <>
      <TextInput
        placeholder="Search by Ingredient"
        onChangeText={setSearchedIngredient}
        value={searchedIngredient}
      />
      <FlatList
        data={displayedDrinkRecipes}
        renderItem={({ item: drinkRecipe }) => (
          <TouchableOpacity onPress={showDrinkRecipe(drinkRecipe)}>
            <DrinkRecipeListItem drinkRecipe={drinkRecipe} />
          </TouchableOpacity>
        )}
      />
    </>
  )
}

export default DrinkRecipeList
