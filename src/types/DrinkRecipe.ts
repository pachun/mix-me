import type { Ingredient } from "types/Ingredient"

export interface DrinkRecipe {
  name: string
  imageUrl: string
  measuredIngredients: MeasuredDrinkRecipeIngredient[]
  numberedIngredients: NumberedDrinkRecipeIngredient[]
  portionlessIngredients: PortionlessDrinkRecipeIngredient[]
  garnishIngredients: GarnishDrinkRecipeIngredient[]
  stepsToMake: string[]
}

export enum DrinkRecipeIngredientType {
  Measured = "Measured Ingredient",
  Numbered = "Numbered Ingredient",
  Portionless = "Portionless Ingredient",
}

export interface MeasuredDrinkRecipeIngredient {
  type: DrinkRecipeIngredientType.Measured
  ingredient: Ingredient
  unit: "oz" | "Drop"
  unitAmount: number
  alternates: Ingredient[]
}

export interface NumberedDrinkRecipeIngredient {
  type: DrinkRecipeIngredientType.Numbered
  ingredient: Ingredient
  amount: number
}

export interface PortionlessDrinkRecipeIngredient {
  type: DrinkRecipeIngredientType.Portionless
  ingredient: Ingredient
  prefix?: string
  suffix?: string
}

export type GarnishDrinkRecipeIngredient =
  | MeasuredDrinkRecipeIngredient
  | NumberedDrinkRecipeIngredient
  | PortionlessDrinkRecipeIngredient
