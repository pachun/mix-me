import IngredientToSearchAliases from "data/IngredientToSearchAliases"

import type { IngredientAndIngredientAliasesPair } from "types/IngredientAndIngredientAliasesPair"

// TODO: remove 'as'. It sucks.
const ingredientAndIngredientAliasesPairs = Object.entries(
  IngredientToSearchAliases,
) as IngredientAndIngredientAliasesPair[]

export default ingredientAndIngredientAliasesPairs
