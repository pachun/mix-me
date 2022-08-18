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

  const [searchedIngredientText, setSearchedIngredientText] = useState("")

  const displayedDrinkRecipes = useMemo(() => {
    const allDrinkRecipes = drinkRecipes

    if (searchedIngredientText.length === 0) {
      return allDrinkRecipes
    }

    const searchedIngredients = searchedIngredientText.split(",")

    const lowerCasedPartiallyTypedIngredient = searchedIngredients[
      searchedIngredients.length - 1
    ]
      .toLowerCase()
      .trim()
    const lowerCasedFullyTypedIngredients = searchedIngredients
      .slice(0, searchedIngredients.length - 1)
      .map((fullyTypedIngredient) => fullyTypedIngredient.toLowerCase().trim())

    return allDrinkRecipes.filter((drinkRecipe) => {
      const drinkRecipeIncludesAFullyTypedIngredient =
        drinkRecipe.ingredients.some((drinkRecipeIngredient) =>
          lowerCasedFullyTypedIngredients.includes(
            drinkRecipeIngredient.toLowerCase(),
          ),
        )
      const drinkRecipeIncludesAPartiallyTypedIngredient =
        Boolean(lowerCasedPartiallyTypedIngredient) &&
        drinkRecipe.ingredients.some((drinkRecipeIngredient) =>
          drinkRecipeIngredient
            .toLowerCase()
            .startsWith(lowerCasedPartiallyTypedIngredient),
        )

      return (
        drinkRecipeIncludesAFullyTypedIngredient ||
        drinkRecipeIncludesAPartiallyTypedIngredient
      )
    })
  }, [searchedIngredientText])

  return (
    <>
      <TextInput
        placeholder="Search by Ingredient"
        onChangeText={setSearchedIngredientText}
        value={searchedIngredientText}
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
