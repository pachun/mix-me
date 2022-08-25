import ingredients from "data/ingredients"
import drinkRecipes from "data/drinkRecipes"

const unique = (value: string, index: number, a: readonly string[]) =>
  a.indexOf(value) === index

describe("The Ingredient List", () => {
  it("only contains unique values", () => {
    expect(ingredients.length).toEqual(ingredients.filter(unique).length)
  })

  it("is in alphabetical order", () => {
    expect([...ingredients].sort()).toEqual([...ingredients])
  })

  it("has no unused values", () => {
    const ingredientsInUse = drinkRecipes
      .flatMap(drinkRecipe => [
        ...drinkRecipe.measuredIngredients.flatMap(measuredIngredient => [
          measuredIngredient.ingredient,
          ...measuredingredient.substitutes,
        ]),
        ...drinkRecipe.numberedIngredients.flatMap(numberedIngredient => [
          numberedIngredient.ingredient,
          ...numberedingredient.substitutes,
        ]),
        ...drinkRecipe.portionlessIngredients.flatMap(portionlessIngredient => [
          portionlessIngredient.ingredient,
          ...portionlessingredient.substitutes,
        ]),
        ...drinkRecipe.garnishIngredients.flatMap(garnishIngredient => [
          garnishIngredient.ingredient,
          ...garnishingredient.substitutes,
        ]),
      ])
      .filter(unique)

    expect(ingredientsInUse.sort()).toEqual([...ingredients].sort())
  })
})
