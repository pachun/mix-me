import { useMemo, useState } from "react"
import { FlatList, TextInput, TouchableOpacity } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

import DrinkRecipeListItem from "./DrinkRecipeListItem"

import intentionallyIncludes from "./intentionallyIncludes"

import drinkRecipes from "data/drinkRecipes"
import ingredients from "data/ingredients"
import ingredientAliases from "data/ingredientAliases"
import ingredientAndIngredientAliasesPairs from "data/ingredientAndIngredientAliasesPairs"

import type { Navigation } from "types/Navigation"
import type { DrinkRecipe } from "types/DrinkRecipe"
import type { IngredientAlias } from "types/IngredientAlias"
import type { Ingredient } from "types/Ingredient"

const intersection = <T,>(list1: T[], list2: T[]): T[] =>
  list1.filter(list1Item => list2.includes(list1Item))

const hasIntersection = <T,>(list1: T[], list2: T[]): boolean =>
  intersection(list1, list2).length > 0

const union = <T,>(list1: T[], list2: T[]): T[] => [
  ...new Set([...list1, ...list2]),
]

const drinkRecipeIngredients = (drinkRecipe: DrinkRecipe): Ingredient[] => [
  ...drinkRecipe.measuredIngredients.flatMap(measuredIngredient => [
    measuredIngredient.ingredient,
    ...measuredIngredient.alternates,
  ]),
  ...drinkRecipe.numberedIngredients.flatMap(numberedIngredient => [
    numberedIngredient.ingredient,
    ...numberedIngredient.alternates,
  ]),
  ...drinkRecipe.portionlessIngredients.flatMap(portionlessIngredient => [
    portionlessIngredient.ingredient,
    ...portionlessIngredient.alternates,
  ]),
  ...drinkRecipe.garnishIngredients.flatMap(garnishIngredient => [
    garnishIngredient.ingredient,
    ...garnishIngredient.alternates,
  ]),
]

const DrinkRecipes = ({
  navigation,
}: NativeStackScreenProps<Navigation, "Drink Recipes">) => {
  const showDrinkRecipe = (drinkRecipe: DrinkRecipe) => () => {
    navigation.navigate("Drink Recipe", { drinkRecipe })
  }

  const [searchedText, setSearchedText] = useState("")

  const ingredientAliasesIncludedInSearchedText = useMemo(
    () =>
      ingredientAliases.filter((ingredientAlias: IngredientAlias) =>
        intentionallyIncludes(searchedText, ingredientAlias),
      ),
    [searchedText],
  )

  const ingredientsAliasedInSearchedText = useMemo(
    () =>
      ingredientAndIngredientAliasesPairs
        .filter(([, ingredientAliases]) =>
          hasIntersection(
            ingredientAliases,
            ingredientAliasesIncludedInSearchedText,
          ),
        )
        .map(([ingredient]) => ingredient),
    [ingredientAliasesIncludedInSearchedText],
  )

  const ingredientsIncludedInSearchedText = useMemo(
    () =>
      ingredients.filter(ingredient =>
        intentionallyIncludes(searchedText, ingredient),
      ),
    [searchedText],
  )

  const searchedIngredients = useMemo(
    () =>
      union(
        ingredientsIncludedInSearchedText,
        ingredientsAliasedInSearchedText,
      ),
    [ingredientsIncludedInSearchedText, ingredientsAliasedInSearchedText],
  )

  const drinkRecipesIncludingASearchedIngredient = useMemo(
    () =>
      drinkRecipes.filter(drinkRecipe =>
        hasIntersection(
          drinkRecipeIngredients(drinkRecipe),
          searchedIngredients,
        ),
      ),
    [searchedIngredients],
  )

  const displayedDrinkRecipes = useMemo(
    () =>
      searchedText.length === 0
        ? drinkRecipes
        : drinkRecipesIncludingASearchedIngredient,
    [searchedText, drinkRecipesIncludingASearchedIngredient],
  )

  return (
    <>
      <TextInput
        placeholder="Search by Ingredient"
        value={searchedText}
        onChangeText={setSearchedText}
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

export default DrinkRecipes
