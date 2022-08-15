import {
  RenderResult,
  fireEvent,
  render,
  waitFor,
  within,
} from "@testing-library/react-native"
import App from "App"
import { ginAndTonicRecipe, pinkPantherRecipe } from "recipes"
import drinkListItemFor from "./componentHelpers/drinkListItemFor"
import drinkRecipeFor from "./componentHelpers/drinkRecipeFor"

describe("The Mix Me App", () => {
  it("shows a list of drink names and photos", () => {
    const app = render(<App />)

    expect(
      drinkListItemFor({
        drinkRecipe: ginAndTonicRecipe,
        inComponent: app,
      }),
    ).toBeTruthy()

    expect(
      drinkListItemFor({
        drinkRecipe: pinkPantherRecipe,
        inComponent: app,
      }),
    ).toBeTruthy()
  })

  describe("when a drink in the drink list is tapped", () => {
    it("shows the drink's recipe", async () => {
      const app = render(<App />)

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
