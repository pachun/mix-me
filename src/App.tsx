import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import DrinkRecipeList from "DrinkRecipeList"
import DrinkRecipe from "DrinkRecipe"
import { Screens } from "types/Screens"

const Stack = createNativeStackNavigator<Screens>()
const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
}

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer theme={NavigationTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Drink Recipe List" component={DrinkRecipeList} />
          <Stack.Screen name="Drink Recipe" component={DrinkRecipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  </SafeAreaProvider>
)

export default App
