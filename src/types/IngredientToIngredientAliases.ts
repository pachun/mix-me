import type { Ingredient } from "types/Ingredient"
import type { IngredientAlias } from "types/IngredientAlias"

export type IngredientToSearchAliases = Record<
  Ingredient,
  IngredientAlias[]
>
