import ingredientAliases from "data/ingredientAliases"
import IngredientToSearchAliases from "data/IngredientToSearchAliases"

const unique = (value: string, index: number, a: readonly string[]) =>
  a.indexOf(value) === index

describe("The Ingredient Alias List", () => {
  it("only contains unique values", () => {
    expect(ingredientAliases.length).toEqual(
      ingredientAliases.filter(unique).length,
    )
  })

  it("is in alphabetical order", () => {
    expect([...ingredientAliases].sort()).toEqual([...ingredientAliases])
  })

  it("has no unused values", () => {
    const ingredientAliasesInUse = Object.values(IngredientToSearchAliases)
      .flat()
      .filter(unique)

    expect(ingredientAliasesInUse.sort()).toEqual([...ingredientAliases].sort())
  })
})
