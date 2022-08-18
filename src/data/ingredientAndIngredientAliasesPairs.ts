import ingredientToIngredientAliases from "data/ingredientToIngredientAliases"

import type { IngredientAndIngredientAliasesPair } from "types/IngredientAndIngredientAliasesPair"

// TODO: remove 'as'. It sucks.
const ingredientAndIngredientAliasesPairs = Object.entries(
  ingredientToIngredientAliases,
) as IngredientAndIngredientAliasesPair[]

export default ingredientAndIngredientAliasesPairs
