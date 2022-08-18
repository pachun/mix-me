import type { Ingredient } from "types/ingredient"
import type { IngredientAlias } from "types/ingredientAlias"

export type IngredientToIngredientAliases = Record<
  Ingredient,
  IngredientAlias[]
>
