import ingredients from "data/ingredients"

const unique = (value: string, index: number, a: readonly string[]) =>
  a.indexOf(value) === index

describe("The Ingredient List", () => {
  it("only contains unique values", () => {
    expect(ingredients.length).toEqual(ingredients.filter(unique).length)
  })

  it("is in alphabetical order", () => {
    expect([...ingredients].sort()).toEqual([...ingredients])
  })
})
