import { DrinkRecipe as DrinkRecipeType } from "types/DrinkRecipe"
import { RenderResult } from "@testing-library/react-native"

const drinkListItemFor = ({
  drinkRecipe,
  inComponent,
}: {
  drinkRecipe: DrinkRecipeType
  inComponent: RenderResult
}) => {
  const app = inComponent

  const drinkNameLabel = app.getByText(drinkRecipe.name)

  expect(drinkNameLabel).toBeTruthy()

  const drinkImage = app
    .queryAllByRole("image")
    .find((image) => image.props.source.uri === drinkRecipe.imageUrl)

  expect(drinkImage).toBeTruthy()

  const ginAndTonicImageWidth = drinkImage.props.style.width
  const ginAndTonicImageHeight = drinkImage.props.style.height

  expect(ginAndTonicImageWidth).toEqual(50)
  expect(ginAndTonicImageHeight).toEqual(50)

  return true
}

export default drinkListItemFor
