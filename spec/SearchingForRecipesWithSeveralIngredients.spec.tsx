import { fireEvent, render } from "@testing-library/react-native"
import App from "App"
import { DrinkRecipe } from "types/DrinkRecipe"

const fakeDrinkRecipes: DrinkRecipe[] = [
  {
    name: "Drink 1",
    imageUrl: "",
    ingredients: ["Lime", "Vermouth"],
    stepsToMake: [],
  },
  {
    name: "Drink 2",
    imageUrl: "",
    ingredients: ["Lemon", "Vodka"],
    stepsToMake: [],
  },
  {
    name: "Drink 3",
    imageUrl: "",
    ingredients: ["Gin", "Tonic"],
    stepsToMake: [],
  },
  {
    name: "Drink 4",
    imageUrl: "",
    ingredients: ["Whiskey", "Coke"],
    stepsToMake: [],
  },
  {
    name: "Drink 5",
    imageUrl: "",
    ingredients: ["Lemon Juice", "Bitters"],
    stepsToMake: [],
  },
]

jest.mock("drinkRecipes", () => fakeDrinkRecipes)

describe("Searching for recipes with several ingredients", () => {
  it("hides recipes that do not match the search", async () => {
    const app = render(<App />)

    expect(app.queryByText("Drink 1")).toBeTruthy()
    expect(app.queryByText("Drink 2")).toBeTruthy()
    expect(app.queryByText("Drink 3")).toBeTruthy()
    expect(app.queryByText("Drink 4")).toBeTruthy()
    expect(app.queryByText("Drink 5")).toBeTruthy()

    fireEvent(
      app.getByPlaceholderText("Search by Ingredient"),
      "onChangeText",
      "lemon, lime, g",
    )

    const itShowsDrink1BecauseItIncludesLemon = () => {
      expect(app.queryByText("Drink 1")).toBeTruthy()
    }
    const itShowsDrink2BecauseItIncludesLime = () => {
      expect(app.queryByText("Drink 2")).toBeTruthy()
    }
    const itShowsDrink3BecauseItIncludesGinWhichStartsWithTheLetterG = () => {
      expect(app.queryByText("Drink 3")).toBeTruthy()
    }
    const itHidesDrink4BecauseItDoesNotIncludeAnyMatchingIngredients = () => {
      expect(app.queryByText("Drink 4")).toBeNull()
    }
    const itHidesDrink5BecauseItDoesNotIncludeAnyMatchingIngredients = () => {
      expect(app.queryByText("Drink 5")).toBeNull()
    }

    itShowsDrink1BecauseItIncludesLemon()
    itShowsDrink2BecauseItIncludesLime()
    itShowsDrink3BecauseItIncludesGinWhichStartsWithTheLetterG()
    itHidesDrink4BecauseItDoesNotIncludeAnyMatchingIngredients()
    itHidesDrink5BecauseItDoesNotIncludeAnyMatchingIngredients()
  })

  it("does not match partially on fully typed ingredients", () => {
    const app = render(<App />)

    const drinkWithLemonInIt = () => app.queryByText("Drink 2")
    const drinkWithLemonJuiceInIt = () => app.queryByText("Drink 5")

    expect(drinkWithLemonInIt()).toBeTruthy()
    expect(drinkWithLemonJuiceInIt()).toBeTruthy()

    const fullyTypedIngredientBecauseItsDelimittedByAComma = "lemon,"

    fireEvent(
      app.getByPlaceholderText("Search by Ingredient"),
      "onChangeText",
      fullyTypedIngredientBecauseItsDelimittedByAComma,
    )

    expect(drinkWithLemonInIt()).toBeTruthy()
    expect(drinkWithLemonJuiceInIt()).toBeNull()
  })
})
