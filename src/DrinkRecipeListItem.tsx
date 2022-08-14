import { Image, StyleSheet, Text, View } from "react-native"
import { DrinkRecipe as DrinkRecipeType } from "types/DrinkRecipe"

interface DrinkListItemProps {
  drinkRecipe: DrinkRecipeType
}

const DrinkListItem = ({ drinkRecipe }: DrinkListItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{drinkRecipe.name}</Text>
      <Image
        accessibilityRole="image"
        style={{ width: 50, height: 50 }}
        source={{ uri: drinkRecipe.imageUrl }}
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
})

export default DrinkListItem
