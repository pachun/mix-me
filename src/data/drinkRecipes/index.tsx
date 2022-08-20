import type { DrinkRecipe } from "types/DrinkRecipe"

import alexander from "./alexander"
import americano from "./americano"
import vesperMartini from "./vesperMartini"
import tomCollins from "./tomCollins"
import ladyInBlue from "./ladyInBlue"
import piscoSour from "./piscoSour"

const alphabetically = (drinkRecipe1: DrinkRecipe, drinkRecipe2: DrinkRecipe) =>
  drinkRecipe1.name > drinkRecipe2.name ? 1 : -1

const drinkRecipes: DrinkRecipe[] = [
  alexander,
  americano,
  vesperMartini,
  ladyInBlue,
  tomCollins,
  piscoSour,
].sort(alphabetically)

export default drinkRecipes
