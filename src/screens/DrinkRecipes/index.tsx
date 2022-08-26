import { useMemo, useState } from "react"
import { FlatList, TextInput, TouchableOpacity } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

import DrinkRecipeListItem from "./DrinkRecipeListItem"

import intentionallyIncludes from "./intentionallyIncludes"
import { hasIntersection, intersection, union } from "helpers/arrayHelpers"

import drinkRecipes from "data/drinkRecipes"
import ingredients from "data/ingredients"
import ingredientAliases from "data/ingredientAliases"
import ingredientAndIngredientAliasesPairs from "data/ingredientAndIngredientAliasesPairs"

import type { Navigation } from "types/Navigation"
import type { DrinkRecipe } from "types/DrinkRecipe"
import type { IngredientAlias } from "types/IngredientAlias"
import type { Ingredient } from "types/Ingredient"

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

  const orderedSearchResults = useMemo(() => {
    return drinkRecipesIncludingASearchedIngredient.sort(
      (drinkRecipe1, drinkRecipe2) => {
        const drinkRecipe1Ingredients = drinkRecipeIngredients(drinkRecipe1)
        const drinkRecipe2Ingredients = drinkRecipeIngredients(drinkRecipe2)
        const searchedIngredientsInDrinkRecipe1 = intersection(
          drinkRecipe1Ingredients,
          searchedIngredients,
        )
        const searchedIngredientsInDrinkRecipe2 = intersection(
          drinkRecipe2Ingredients,
          searchedIngredients,
        )
        const numberOfIngredientsMissingFromDrinkRecipe1 =
          drinkRecipe1Ingredients.length -
          searchedIngredientsInDrinkRecipe1.length
        const numberOfIngredientsMissingFromDrinkRecipe2 =
          drinkRecipe2Ingredients.length -
          searchedIngredientsInDrinkRecipe2.length

        return numberOfIngredientsMissingFromDrinkRecipe1 >
          numberOfIngredientsMissingFromDrinkRecipe2
          ? 1
          : -1
      },
    )
  }, [drinkRecipesIncludingASearchedIngredient, searchedIngredients])

  const displayedDrinkRecipes = useMemo(
    () =>
      searchedIngredients.length === 0 ? drinkRecipes : orderedSearchResults,
    [searchedIngredients, orderedSearchResults],
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
