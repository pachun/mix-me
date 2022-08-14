import { DrinkRecipe as DrinkRecipeType } from "types/DrinkRecipe"
import { RenderResult } from "@testing-library/react-native"

const drinkRecipeFor = ({
  drinkRecipe,
  inComponent,
}: {
  drinkRecipe: DrinkRecipeType
  inComponent: RenderResult
}) => {
  const drinkRecipeComponent = inComponent

  const drinkNameLabel = drinkRecipeComponent.getByText(drinkRecipe.name)

  expect(drinkNameLabel).toBeTruthy()

  const drinkImage = drinkRecipeComponent.queryByRole("image")

  expect(drinkImage).toBeTruthy()

  const drinkImageWidth = drinkImage.props.style.width
  const drinkImageHeight = drinkImage.props.style.height

  expect(drinkImage).toHaveProp("source", {
    uri: drinkRecipe.imageUrl,
  })
  expect(drinkImageWidth).toEqual(200)
  expect(drinkImageHeight).toEqual(200)

  drinkRecipe.ingredients.forEach((ingredient) => {
    const ingredientLabel = drinkRecipeComponent.getByText(ingredient)

    expect(ingredientLabel).toBeTruthy()
  })

  drinkRecipe.stepsToMake.forEach((stepToMake) => {
    const stepToMakeLabel = drinkRecipeComponent.getByText(stepToMake)

    expect(stepToMakeLabel).toBeTruthy()
  })

  return true
}

export default drinkRecipeFor
