import { Image, Text, TouchableOpacity, View } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

import { Screens } from "types/Screens"

const DrinkRecipe = ({
  route,
  navigation,
}: NativeStackScreenProps<Screens, "Drink Recipe">) => {
  const drinkRecipe = route.params.drinkRecipe

  const goBackToDrinkListScreen = () => navigation.goBack()

  return (
    <View testID="Drink Recipe">
      <TouchableOpacity onPress={goBackToDrinkListScreen}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>{drinkRecipe.name}</Text>
      <Image
        accessibilityRole="image"
        source={{
          uri: drinkRecipe.imageUrl,
        }}
        style={{ width: 200, height: 200 }}
      />
      {[...drinkRecipe.ingredients].map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      {drinkRecipe.stepsToMake.map((stepToMake) => (
        <Text key={stepToMake}>{stepToMake}</Text>
      ))}
    </View>
  )
}

export default DrinkRecipe
