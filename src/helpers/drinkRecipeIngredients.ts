import type { DrinkRecipe } from "types/DrinkRecipe"
import type { Ingredient } from "types/Ingredient"

const drinkRecipeIngredients = (drinkRecipe: DrinkRecipe): Ingredient[][] => {
  const measuredIngredientsAndTheirAlternates =
    drinkRecipe.measuredIngredients.map(measuredIngredient => [
      measuredIngredient.ingredient,
      ...measuredIngredient.alternates,
    ])

  const numberedIngredientsAndTheirAlternates =
    drinkRecipe.numberedIngredients.map(numberedIngredient => [
      numberedIngredient.ingredient,
      ...numberedIngredient.alternates,
    ])

  const portionlessIngredientsAndTheirAlternates =
    drinkRecipe.portionlessIngredients.map(portionlessIngredient => [
      portionlessIngredient.ingredient,
      ...portionlessIngredient.alternates,
    ])

  const garnishIngredientsAndTheirAlternates =
    drinkRecipe.garnishIngredients.map(garnishIngredient => [
      garnishIngredient.ingredient,
      ...garnishIngredient.alternates,
    ])

  return [
    ...measuredIngredientsAndTheirAlternates,
    ...numberedIngredientsAndTheirAlternates,
    ...portionlessIngredientsAndTheirAlternates,
    ...garnishIngredientsAndTheirAlternates,
  ]
}

export default drinkRecipeIngredients
