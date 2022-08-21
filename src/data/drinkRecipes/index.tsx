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
import kamikaze from "./kamikaze"
import dirtyMartini from "./dirtyMartini"
import darkAndStormy from "./darkAndStormy"
import ramosGinFizz from "./ramosGinFizz"
import bramble from "./bramble"
import b52 from "./b52"

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
  kamikaze,
  dirtyMartini,
  darkAndStormy,
  ramosGinFizz,
  bramble,
  b52,
].sort(alphabetically)

export default drinkRecipes
