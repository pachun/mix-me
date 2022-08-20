import type { DrinkRecipe } from "types/DrinkRecipe"

import alexander from "./alexander"
import americano from "./americano"
import vesperMartini from "./vesperMartini"
import tomCollins from "./tomCollins"
import ladyInBlue from "./ladyInBlue"
import piscoSour from "./piscoSour"
import pimmsCup from "./pimmsCup"
import paloma from "./paloma"
import lemonDrop from "./lemonDrop"

const alphabetically = (drinkRecipe1: DrinkRecipe, drinkRecipe2: DrinkRecipe) =>
  drinkRecipe1.name > drinkRecipe2.name ? 1 : -1

const drinkRecipes: DrinkRecipe[] = [
  alexander,
  americano,
  vesperMartini,
  ladyInBlue,
  tomCollins,
  piscoSour,
  pimmsCup,
  paloma,
  lemonDrop,
].sort(alphabetically)

export default drinkRecipes
