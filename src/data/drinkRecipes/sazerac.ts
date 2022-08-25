import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.thespruceeats.com/thmb/ORWl3I7We0X-zJfD4FrH1CM2PAQ=/1000x1000/smart/filters:no_upscale()/sazerac-cocktail-recipe-760604-hero-01-cb5dd2089d204bdd9745e46fd4eef597.jpg"

const sazerac: DrinkRecipe = {
  name: "Sazerac",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Rye Whiskey",
      unit: "oz",
      unitAmount: 1.25,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Cognac",
      unit: "oz",
      unitAmount: 1.25,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      prefix: "Cold",
      ingredient: "Water",
      unit: "tsp",
      unitAmount: 0.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Peychaud's Bitters",
      unit: "Dash",
      unitAmount: 3.0,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Angostura Bitters",
      unit: "Dash",
      unitAmount: 2.0,
      alternates: [],
    },
  ],
  numberedIngredients: [
    {
      type: DrinkRecipeIngredientType.Numbered,
      amount: 1,
      ingredient: "Sugar Cube",
      alternates: [],
    }
  ],
  portionlessIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Absinthe",
      alternates: [],
    }
  ],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lemon",
      suffix: "Peel",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Rinse a chilled rocks glass with absinthe, discarding any excess, and set aside.",
    "In a mixing glass, muddle the sugar cube, water and the %MI4 and %MI5.",
    "Add the %MI1 and %MI2, fill the mixing glass with ice and stir until well-chilled.",
    "Strain into prepared glass.",
    "Twist the %GI1 over the drink's surface to express oils, then use it to garnish.",
  ],
}

export default sazerac
