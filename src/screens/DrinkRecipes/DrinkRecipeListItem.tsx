import { Image, StyleSheet, Text, View } from "react-native"

import type { DrinkRecipe } from "types/DrinkRecipe"

interface DrinkRecipeListItemProps {
  drinkRecipe: DrinkRecipe
}

const DrinkRecipeListItem = ({ drinkRecipe }: DrinkRecipeListItemProps) => (
  <View style={styles.container}>
    <Text>{drinkRecipe.name}</Text>
    <Image
      source={{ uri: drinkRecipe.imageUrl }}
      style={{ width: 100, height: 100 }}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
})

export default DrinkRecipeListItem
