import missingIngredients from "helpers/missingIngredients"
import type { Ingredient } from "types/Ingredient"

describe("The missingIngredients helper function", () => {
  it("returns missing ingredients", () => {
    const drinkRecipeIngredients: Ingredient[][] = [
      ["Single Cream", "Half-and-Half"],
      ["Vodka"],
      ["Lemon"],
      ["Mint Leaf", "Flower Water"],
      ["Rum"],
      ["Gin", "Dry Gin"],
      ["Green Olive", "Sugar Cube"],
      ["Cherry", "Maraschino Cherry", "Brandied Cherry"],
    ]

    const searchedIngredients: Ingredient[] = [
      "Single Cream",
      "Rum",
      "Cherry",
      "Brandied Cherry",
    ]

    const theMissingIngredients = missingIngredients(
      drinkRecipeIngredients,
      searchedIngredients,
    )

    expect(theMissingIngredients).toEqual([
      "Vodka",
      "Lemon",
      "Mint Leaf",
      "Gin",
      "Green Olive",
    ])
  })
})
