import type { Ingredient } from "types/Ingredient"

export interface DrinkRecipe {
  name: string
  imageUrl: string
  measuredIngredients: MeasuredDrinkRecipeIngredient[]
  numberedIngredients: NumberedDrinkRecipeIngredient[]
  portionlessIngredients: PortionlessDrinkRecipeIngredient[]
  garnishIngredients: DrinkRecipeIngredient[]
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
  unit: "oz" | "tsp" | "Drop" | "Dash" | "Tbsp" | "Barspoon"
  unitAmount: number
  prefix?: string
  alternates: Ingredient[]
}

export interface NumberedDrinkRecipeIngredient {
  type: DrinkRecipeIngredientType.Numbered
  ingredient: Ingredient
  amount: number
  prefix?: string
  alternates: Ingredient[]
}

export interface PortionlessDrinkRecipeIngredient {
  type: DrinkRecipeIngredientType.Portionless
  ingredient: Ingredient
  prefix?: string
  suffix?: string
  alternates: Ingredient[]
}

export type DrinkRecipeIngredient =
  | MeasuredDrinkRecipeIngredient
  | NumberedDrinkRecipeIngredient
  | PortionlessDrinkRecipeIngredient
