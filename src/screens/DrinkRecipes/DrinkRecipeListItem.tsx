import { useMemo } from "react"
import {
  Image,
  Platform,
  PlatformColor,
  StyleSheet,
  Text,
  View,
} from "react-native"

import type { DrinkRecipe } from "types/DrinkRecipe"
import type { Ingredient } from "types/Ingredient"

const intersection = <T,>(list1: T[], list2: T[]): T[] =>
  list1.filter(list1Item => list2.includes(list1Item))

const getDrinkRecipeIngredients = (drinkRecipe: DrinkRecipe): Ingredient[] => {
  return [
    ...drinkRecipe.measuredIngredients.map(
      measuredIngredient => measuredIngredient.ingredient,
    ),
    ...drinkRecipe.numberedIngredients.map(
      numberedIngredient => numberedIngredient.ingredient,
    ),
    ...drinkRecipe.portionlessIngredients.map(
      portionlessIngredient => portionlessIngredient.ingredient,
    ),
    ...drinkRecipe.garnishIngredients.map(
      garnishIngredient => garnishIngredient.ingredient,
    ),
  ]
}

interface DrinkRecipeListItemProps {
  drinkRecipe: DrinkRecipe
  searchedIngredients: Ingredient[]
}

const DrinkRecipeListItem = ({
  drinkRecipe,
  searchedIngredients,
}: DrinkRecipeListItemProps) => {
  const drinkRecipeIngredients = useMemo(
    () => getDrinkRecipeIngredients(drinkRecipe),
    [drinkRecipe],
  )

  const numberOfMissingIngredients = useMemo(
    () =>
      drinkRecipeIngredients.length -
      intersection(drinkRecipeIngredients, searchedIngredients).length,
    [drinkRecipeIngredients, searchedIngredients],
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
