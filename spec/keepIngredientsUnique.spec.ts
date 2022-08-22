import ingredients from "data/ingredients"

const unique = (value: string, index: number, a: readonly string[]) =>
  a.indexOf(value) === index

it("Ensures the ingredient list doesn't have duplicate entries because typescript can't do it for us", () => {
  expect(ingredients.length).toEqual(ingredients.filter(unique).length)
})
