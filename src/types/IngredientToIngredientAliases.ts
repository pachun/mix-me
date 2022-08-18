import type { Ingredient } from "types/Ingredient"
import type { IngredientAlias } from "types/IngredientAlias"

export type IngredientToIngredientAliases = Record<
  Ingredient,
  IngredientAlias[]
>
