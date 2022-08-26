import drinkRecipeIngredients from "helpers/drinkRecipeIngredients"

import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

describe("The drinkRecipeIngredients helper function", () => {
  it("returns an array of drink recipe ingredients and their alternates", () => {
    const fakeDrink: DrinkRecipe = {
      name: "",
      imageUrl: "",
      stepsToMake: [],
      measuredIngredients: [
        {
          type: DrinkRecipeIngredientType.Measured,
          unitAmount: 2,
          unit: "oz",
          ingredient: "Single Cream",
          alternates: ["Half-and-Half"],
        },
        {
          type: DrinkRecipeIngredientType.Measured,
          unitAmount: 2,
          unit: "oz",
          ingredient: "Vodka",
          alternates: [],
        },
      ],
      numberedIngredients: [
        {
          type: DrinkRecipeIngredientType.Numbered,
          amount: 1,
          ingredient: "Lemon",
          alternates: [],
        },
        {
          type: DrinkRecipeIngredientType.Numbered,
          amount: 1,
          ingredient: "Mint Leaf",
          alternates: ["Flower Water"],
        },
      ],
      portionlessIngredients: [
        {
          type: DrinkRecipeIngredientType.Portionless,
          ingredient: "Rum",
          alternates: [],
        },
        {
          type: DrinkRecipeIngredientType.Portionless,
          ingredient: "Gin",
          alternates: ["Dry Gin"],
        },
      ],
      garnishIngredients: [
        {
          type: DrinkRecipeIngredientType.Numbered,
          amount: 1,
          ingredient: "Green Olive",
          alternates: ["Sugar Cube"],
        },
        {
          type: DrinkRecipeIngredientType.Portionless,
          ingredient: "Cherry",
          alternates: ["Maraschino Cherry", "Brandied Cherry"],
        },
      ],
    }

    expect(drinkRecipeIngredients(fakeDrink)).toEqual([
      ["Single Cream", "Half-and-Half"],
      ["Vodka"],
      ["Lemon"],
      ["Mint Leaf", "Flower Water"],
      ["Rum"],
      ["Gin", "Dry Gin"],
      ["Green Olive", "Sugar Cube"],
      ["Cherry", "Maraschino Cherry", "Brandied Cherry"],
    ])
  })
})
