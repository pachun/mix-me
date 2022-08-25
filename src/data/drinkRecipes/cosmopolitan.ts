import type { DrinkRecipe } from "types/DrinkRecipe"
import { DrinkRecipeIngredientType } from "types/DrinkRecipe"

const fakeImageUrl =
  "https://www.homemadefoodjunkie.com/wp-content/uploads/2020/01/Cosmopolitan-drink-735x735.jpg"

const cosmopolitan: DrinkRecipe = {
  name: "Cosmopolitan",
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Citron Vodka",
      unit: "oz",
      unitAmount: 1.5,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Cointreau",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
	{
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Lime Juice",
      unit: "oz",
      unitAmount: 0.75,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: "Cranberry Juice",
      unit: "oz",
      unitAmount: 0.5,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      ingredient: "Lime",
      suffix: "Wedge",
      alternates: [],
    },
  ],
  stepsToMake: [
    "Add the %MI1, %MI2, %MI3, and %MI4 into a shaker with ice and shake until well-chilled.",  
	"Strain into a chilled cocktail glass.",  
	"Garnish with %GI1.",
  ],
}

export default cosmopolitan
