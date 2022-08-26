import { useMemo } from "react"
import {
  Image,
  Platform,
  PlatformColor,
  StyleSheet,
  Text,
  View,
} from "react-native"

import drinkRecipeIngredients from "helpers/drinkRecipeIngredients"
import missingIngredients from "helpers/missingIngredients"

import type { DrinkRecipe } from "types/DrinkRecipe"
import type { Ingredient } from "types/Ingredient"

interface DrinkRecipeListItemProps {
  drinkRecipe: DrinkRecipe
  searchedIngredients: Ingredient[]
}

const DrinkRecipeListItem = ({
  drinkRecipe,
  searchedIngredients,
}: DrinkRecipeListItemProps) => {
  const numberOfMissingIngredients = useMemo(
    () =>
      missingIngredients(
        drinkRecipeIngredients(drinkRecipe),
        searchedIngredients,
      ).length,
    [drinkRecipe, searchedIngredients],
  )

  const drinkRecipeIsASearchResult = useMemo(
    () => searchedIngredients.length > 0,
    [searchedIngredients],
  )

  const searchResultIsMissingIngredients = useMemo(
    () => drinkRecipeIsASearchResult && numberOfMissingIngredients > 0,
    [drinkRecipeIsASearchResult, numberOfMissingIngredients],
  )

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.leftTopPadding} />
        <View style={styles.drinkNameContainer}>
          <Text>{drinkRecipe.name}</Text>
        </View>
        <View style={styles.numberOfMissingIngredientsContainer}>
          {searchResultIsMissingIngredients && (
            <Text style={styles.numberOfMissingIngredientsLabel}>
              Missing {numberOfMissingIngredients} Ingredients
            </Text>
          )}
        </View>
      </View>
      <Image
        source={{ uri: drinkRecipe.imageUrl }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftTopPadding: {
    flex: 1,
  },
  drinkNameContainer: { flex: 1, justifyContent: "center" },
  numberOfMissingIngredientsContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  numberOfMissingIngredientsLabel: {
    color: Platform.OS === "ios" ? PlatformColor("secondaryLabel") : "gray",
  },
})

export default DrinkRecipeListItem
