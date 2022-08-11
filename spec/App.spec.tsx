import { render } from "@testing-library/react-native"
import App from "App"

const minimumImageDimensions = 50

it("shows a gin and tonic recipe", () => {
  const app = render(<App />)

  const ginAndTonicNameLabel = app.getByText("Gin & Tonic")

  expect(ginAndTonicNameLabel).toBeTruthy()

  const ginAndTonicImage = app.queryByRole("image")

  expect(ginAndTonicImage).toBeTruthy()
  expect(ginAndTonicImage).toHaveProp("source", {
    uri: "https://theforkedspoon.com/wp-content/uploads/2018/06/gin-and-tonic-500x375.jpg",
  })

  const ginAndTonicImageWidth = ginAndTonicImage.props.style.width
  const ginAndTonicImageHeight = ginAndTonicImage.props.style.height

  expect(ginAndTonicImageWidth).toBeGreaterThanOrEqual(minimumImageDimensions)
  expect(ginAndTonicImageHeight).toBeGreaterThanOrEqual(minimumImageDimensions)
  expect(ginAndTonicImageWidth).toEqual(ginAndTonicImageHeight)

  const ginAndTonicIngredients = [
    "Hendrix Gin",
    "Fever Tree Tonic",
    "Lemon",
    "Lime",
    "Cucumber",
    "Ice",
  ]

  ginAndTonicIngredients.forEach((ginAndTonicIngredient) => {
    const ingredientLabel = app.getByText(ginAndTonicIngredient)

    expect(ingredientLabel).toBeTruthy()
  })

  const stepsToMakeAGinAndTonic = [
    "1. Put one square cube into the glass",
    "2. Pour two shots of cold Hendricks Gin into the glass",
    "3. Add two shots of cold Fever Tree Tonic into the glass",
    "4. Squeeze one lemon wedge over the glass",
    "5. Squeeze one lime wedge over the glass",
    "6. Garnish glass with cucumber slice",
  ]

  stepsToMakeAGinAndTonic.forEach((instruction) => {
    const instructionLabel = app.getByText(instruction)

    expect(instructionLabel).toBeTruthy()
  })
})
