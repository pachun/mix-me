import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import DrinkRecipes from "screens/DrinkRecipes"
import DrinkRecipe from "screens/DrinkRecipe"

import type { Navigation } from "types/Navigation"

const Stack = createNativeStackNavigator<Navigation>()

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
          <Stack.Screen name="Drink Recipes" component={DrinkRecipes} />
          <Stack.Screen name="Drink Recipe" component={DrinkRecipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  </SafeAreaProvider>
)

export default App
