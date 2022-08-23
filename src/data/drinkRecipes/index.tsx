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
import theLastWord from "./theLastWord"
import angelsFace from "./angelsFace"
import aviation from "./aviation"
import betweenTheSheets from "./betweenTheSheets"
import brownDerby from "./brownDerby"
import cloverClub from "./cloverClub"
import daquiri from "./daquiri"
import dryMartini from "./dryMartini"
import tequilaSunrise from "./tequilaSunrise"
import singaporeSling from "./singaporeSling"
import sexOnTheBeach from "./sexOnTheBeach"
import seaBreeze from "./seaBreeze"
import pinaColada from "./pinaColada"
import moscowMule from "./moscowMule"
import mojito from "./mojito"
import mintJulep from "./mintJulep"
import martinez from "./martinez"
import mimosa from "./mimosa"
import margarita from "./margarita"
import maiTai from "./maiTai"
import longIslandIcedTea from "./longIslandIcedTea"
import manhattan from "./manhattan"
import ginFizz from "./ginFizz"
import maryPickford from "./maryPickford"
import negroni from "./negroni"
import oldFashioned from "./oldFashioned"
import plantersPunch from "./plantersPunch"
import portoFlip from "./portoFlip"
import fitzgerald from "./fitzgerald"
import kirRoyale from "./kirRoyale"
import irishCoffee from "./irishCoffee"

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
  theLastWord,
  angelsFace,
  aviation,
  betweenTheSheets,
  brownDerby,
  cloverClub,
  daquiri,
  dryMartini,
  tequilaSunrise,
  singaporeSling,
  sexOnTheBeach,
  seaBreeze,
  pinaColada,
  moscowMule,
  mojito,
  mintJulep,
  martinez,
  mimosa,
  margarita,
  maiTai,
  longIslandIcedTea,
  manhattan,
  ginFizz,
  maryPickford,
  negroni,
  oldFashioned,
  plantersPunch,
  portoFlip,
  fitzgerald,
  kirRoyale,
  irishCoffee,
].sort(alphabetically)

export default drinkRecipes
