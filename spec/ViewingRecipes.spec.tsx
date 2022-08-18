import {
  RenderResult,
  fireEvent,
  render,
  waitFor,
  within,
} from "@testing-library/react-native"
import App from "App"
import drinkRecipes from "drinkRecipes"
import drinkListItemFor from "./componentHelpers/drinkListItemFor"
import drinkRecipeFor from "./componentHelpers/drinkRecipeFor"
import { DrinkRecipe } from "types/DrinkRecipe"

export const ginAndTonicRecipe: DrinkRecipe = {
  name: "Gin & Tonic",
  imageUrl:
    "https://theforkedspoon.com/wp-content/uploads/2018/06/gin-and-tonic-500x375.jpg",
  ingredients: [
    "Hendrix Gin",
    "Fever Tree Tonic",
    "Lemon",
    "Lime",
    "Cucumber",
    "Ice",
  ],
  stepsToMake: [
    "Put one square cube into the glass",
    "Pour two shots of cold Hendricks Gin into the glass",
    "Add two shots of cold Fever Tree Tonic into the glass",
    "Squeeze one lemon wedge over the glass",
    "Squeeze one lime wedge over the glass",
    "Garnish glass with cucumber slice",
  ],
}

export const pinkPantherRecipe: DrinkRecipe = {
  name: "Pink Panther",
  imageUrl:
    "https://www.liquor.com/thmb/eYFMOF0pFOCAcYozWhIO6sljQIE=/440x0/filters:no_upscale():max_bytes(150000):strip_icc()/pink-lady-720x720-primary-v2-80334dc275ca4c009799a0cf424d9a87.jpg",
  ingredients: [
    "Egg White",
    "Lemon Juice",
    "Grenadine",
    "Basil Hayden Bourbon",
    "Ice",
  ],
  stepsToMake: [
    "Crack Egg White into Cocktail Shaker",
    "Fill the Cocktail Shaker halfway high with Ice",
    "Add one shot of Lemon Juice to the Cocktail Shaker",
    "Add two shots of Basil Hayden to the Cocktail Shaker",
    "Add one shot of Grenadine to the Cocktail Shaker",
    "Close and shake the Cocktail Shaker for 5 seconds",
    "Pour the contents of the Cocktail Shaker through a Cocktail Strainer into a glass (Coupe Glasses look nice)",
  ],
}

jest.mock("drinkRecipes", () => [ginAndTonicRecipe, pinkPantherRecipe])

describe("Opening the Mix Me App", () => {
  it("shows a list of drink names and photos", () => {
    const app = render(<App />)

    drinkRecipes.forEach((drinkRecipe) => {
      expect(
        drinkListItemFor({
          drinkRecipe,
          inComponent: app,
        }),
      ).toBeTruthy()
    })
  })

  describe("when a drink in the drink list is tapped", () => {
    it("shows the drink's recipe", async () => {
      const app = render(<App />)

      const ginAndTonicRecipe = drinkRecipes.find(
        (drinkRecipe) => drinkRecipe.name === "Gin & Tonic",
      ) as DrinkRecipe

      fireEvent.press(app.getByText(ginAndTonicRecipe.name))

      const drinkRecipeSection = within(
        app.getByTestId("Drink Recipe"),
      ) as RenderResult

      await waitFor(() => drinkRecipeSection.getByText(ginAndTonicRecipe.name))

      expect(
        drinkRecipeFor({
          drinkRecipe: ginAndTonicRecipe,
          inComponent: drinkRecipeSection,
        }),
      ).toBeTruthy()
    })

    it("shows a back button", async () => {
      const app = render(<App />)

      const ginAndTonicRecipe = drinkRecipes.find(
        (drinkRecipe) => drinkRecipe.name === "Gin & Tonic",
      ) as DrinkRecipe

      fireEvent.press(app.getByText(ginAndTonicRecipe.name))

      const drinkRecipeSection = within(
        app.getByTestId("Drink Recipe"),
      ) as RenderResult

      await waitFor(() => drinkRecipeSection.getByText(ginAndTonicRecipe.name))

      fireEvent.press(app.getByText("Back"))

      expect(
        drinkListItemFor({
          drinkRecipe: ginAndTonicRecipe,
          inComponent: app,
        }),
      ).toBeTruthy()
    })
  })
})
