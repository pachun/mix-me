import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.liquor.com/thmb/GXF-p-uad3PbGlfyeCK0t0AW1EQ=/1200x628/filters:fill(auto,1)/necromancer-1200x628-email-3cde8a6f3c7a48649ea72afe7ffe27be.jpg"

const corpseReviverNo2: DrinkRecipe = {
  name: "Corpse Reviver No.2",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Gin",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lillet Blanc Aperitif",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Orange Liqueur",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
	{
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lemon Juice",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [
	{
    type: DrinkRecipeIngredientType.Portionless,
    ingredient: "Absinthe",
    alternates: [],
	},
  ],
  garnishIngredients: [
    {
    type: DrinkRecipeIngredientType.Portionless,
    ingredient: "Lemon",
    suffix: "Twist",
    alternates: [],
    }
  ],
  stepsToMake: [
    "Rinse the inside of a chilled coupe or cocktail glass with %PI1, discard the excess and set the glass aside.",  
    "Add the %MI1, %MI2, %MI3 and %MI4 into a cocktail shaker with ice and shake until well-chilled.",   
    "Strain into the prepared glass.",
    "Garnish with %GI1",
  ],
}

export default corpseReviverNo2
