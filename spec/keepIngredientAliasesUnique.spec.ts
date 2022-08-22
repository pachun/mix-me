import ingredientAliases from "data/ingredientAliases"

const unique = (value: string, index: number, a: readonly string[]) =>
  a.indexOf(value) === index

it("Ensures the ingredient alias list doesn't have duplicate entries because typescript can't do it for us", () => {
  expect(ingredientAliases.length).toEqual(
    ingredientAliases.filter(unique).length,
  )
})
