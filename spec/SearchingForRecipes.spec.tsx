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

describe("The Mix Me App", () => {
  it("shows a search bar that filters recipes by searched ingredients", async () => {
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
    expect(app.queryByText("Gin & Tonic")).toBeNull()

    fireEvent(
      app.getByPlaceholderText("Search by Ingredient"),
      "onChangeText",
      "orange juice",
    )

    expect(app.queryByText("Screw Driver")).toBeTruthy()
    expect(app.queryByText("Mimosa")).toBeTruthy()
    expect(app.queryByText("Gin & Tonic")).toBeNull()
  })
})
