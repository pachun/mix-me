import intentionallyIncludes from "screens/DrinkRecipes/intentionallyIncludes"

describe("Searching for recipes by ingredient", () => {
  it("does not show recipes requiring 'gin' when 'ginger ale' is searched", () => {
    const tests = [
      {
        searching: "gin",
        intentionallyIncludes: "Gin",
        shouldBe: true,
      },
      {
        searching: "gin ",
        intentionallyIncludes: "Gin",
        shouldBe: true,
      },
      {
        searching: "gin ale",
        intentionallyIncludes: "Gin",
        shouldBe: true,
      },
      {
        searching: "gin,ale",
        intentionallyIncludes: "Gin",
        shouldBe: true,
      },
      {
        searching: "ginger ale",
        intentionallyIncludes: "Gin",
        shouldBe: false,
      },
      {
        searching: "hey gin hello",
        intentionallyIncludes: "Gin",
        shouldBe: true,
      },
      {
        searching: "hey,gin,hello",
        intentionallyIncludes: "Gin",
        shouldBe: true,
      },
      {
        searching: "hey ginger ale",
        intentionallyIncludes: "Gin",
        shouldBe: false,
      },
      {
        searching: "ale gin",
        intentionallyIncludes: "Gin",
        shouldBe: true,
      },
      {
        searching: "alegin",
        intentionallyIncludes: "Gin",
        shouldBe: false,
      },
      {
        searching: " gin",
        intentionallyIncludes: "Gin",
        shouldBe: true,
      },
    ]

    tests.forEach(test => {
      const functionResult = intentionallyIncludes(
        test.searching,
        test.intentionallyIncludes,
      )

      expect(functionResult).toEqual(test.shouldBe)
    })
  })
})
