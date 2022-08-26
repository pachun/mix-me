import ingredientAliases from "data/ingredientAliases"
import ingredientToIngredientAliases from "data/ingredientToIngredientAliases"
import { unique } from "helpers/arrayHelpers"

describe("The Ingredient Alias List", () => {
  it("only contains unique values", () => {
    expect(ingredientAliases.length).toEqual(
      [...ingredientAliases].filter(unique).length,
    )
  })

  it("is in alphabetical order", () => {
    expect([...ingredientAliases].sort()).toEqual([...ingredientAliases])
  })

  it("has no unused values", () => {
    const ingredientAliasesInUse = Object.values(ingredientToIngredientAliases)
      .flat()
      .filter(unique)

    expect(ingredientAliasesInUse.sort()).toEqual([...ingredientAliases].sort())
  })
})
