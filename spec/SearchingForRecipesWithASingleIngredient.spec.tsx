import { fireEvent, render } from "@testing-library/react-native"
import App from "App"
import { DrinkRecipe } from "types/DrinkRecipe"

const fakeDrinkRecipes: DrinkRecipe[] = [
  {
    name: "Screw Driver",
    imageUrl: "",
    ingredients: ["Orange Juice", "Vodka"],
    stepsToMake: [],
  },
  {
    name: "Mimosa",
    imageUrl: "",
    ingredients: ["Orange Juice", "Champagne"],
    stepsToMake: [],
  },
  {
    name: "Gin & Tonic",
    imageUrl: "",
    ingredients: ["Gin", "Tonic"],
    stepsToMake: [],
  },
]

jest.mock("drinkRecipes", () => fakeDrinkRecipes)

describe("Searching for recipes with a single ingredient", () => {
  it("hides recipes that do not match the search", async () => {
    const app = render(<App />)

    expect(app.queryByText("Screw Driver")).toBeTruthy()
    expect(app.queryByText("Mimosa")).toBeTruthy()
    expect(app.queryByText("Gin & Tonic")).toBeTruthy()

    fireEvent(
      app.getByPlaceholderText("Search by Ingredient"),
      "onChangeText",
      "orange juice",
    )

    expect(app.queryByText("Screw Driver")).toBeTruthy()
    expect(app.queryByText("Mimosa")).toBeTruthy()
    expect(app.queryByText("Gin & Tonic")).toBeNull()
  })

  it("hides recipes that match the search on an ingredient letter in the middle of an ingredient", () => {
    const app = render(<App />)

    expect(app.queryByText("Screw Driver")).toBeTruthy()
    expect(app.queryByText("Mimosa")).toBeTruthy()
    expect(app.queryByText("Gin & Tonic")).toBeTruthy()

    fireEvent(
      app.getByPlaceholderText("Search by Ingredient"),
      "onChangeText",
      "o",
    )

    expect(app.queryByText("Screw Driver")).toBeTruthy()
    expect(app.queryByText("Mimosa")).toBeTruthy()

    const itDoesNotMatchTheSearchOnTheLetterOInTheWordTonic = () => {
      expect(app.queryByText("Gin & Tonic")).toBeNull()
    }
    itDoesNotMatchTheSearchOnTheLetterOInTheWordTonic()
  })
})
