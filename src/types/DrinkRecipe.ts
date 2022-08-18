import type { Ingredient } from "types/Ingredient"

export interface DrinkRecipe {
  name: string
  imageUrl: string
  measuredIngredients: MeasuredDrinkRecipeIngredient[]
  numberedIngredients: NumberedDrinkRecipeIngredient[]
  preparedIngredients: PreparedDrinkRecipeIngredient[]
  garnishIngredient?: GarnishDrinkRecipeIngredient
  stepsToMake: string[]
}

export enum DrinkRecipeIngredientType {
  Measured = "Measured Ingredient",
  Numbered = "Numbered Ingredient",
  Prepared = "Prepared Ingredient",
}

export interface MeasuredDrinkRecipeIngredient {
  type: DrinkRecipeIngredientType.Measured
  ingredient: Ingredient
  unit: "oz"
  unitAmount: number
  alternates: Ingredient[]
}

export interface NumberedDrinkRecipeIngredient {
  type: DrinkRecipeIngredientType.Numbered
  ingredient: Ingredient
  amount: number
}

export interface PreparedDrinkRecipeIngredient {
  type: DrinkRecipeIngredientType.Prepared
  ingredient: Ingredient
  prefix?: string
  suffix?: string
}

export type GarnishDrinkRecipeIngredient =
  | MeasuredDrinkRecipeIngredient
  | NumberedDrinkRecipeIngredient
  | PreparedDrinkRecipeIngredient
