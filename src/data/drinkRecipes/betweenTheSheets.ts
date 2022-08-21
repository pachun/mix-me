import { DrinkRecipe } from 'types/DrinkRecipe'
import { DrinkRecipeIngredientType } from 'types/DrinkRecipe'

const fakeImageUrl =
  'https://www.acouplecooks.com/wp-content/uploads/2020/05/Between-the-Sheets-Cocktail-006.jpg'
const betweenTheSheets: DrinkRecipe = {
  name: 'Between the Sheets',
  imageUrl: fakeImageUrl,
  measuredIngredients: [
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: 'Cognac',
      unit: 'oz',
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: 'Light Rum',
      unit: 'oz',
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: 'Triple Sec',
      unit: 'oz',
      unitAmount: 1,
      alternates: [],
    },
    {
      type: DrinkRecipeIngredientType.Measured,
      ingredient: 'Lemon Juice',
      unit: 'oz',
      unitAmount: 0.75,
      alternates: [],
    },
  ],
  numberedIngredients: [],
  portionlessIngredients: [],
  garnishIngredients: [
    {
      type: DrinkRecipeIngredientType.Portionless,
      prefix: 'Flamed',
      ingredient: 'Orange',
      suffix: 'Peel',
      alternates: [],
    },
  ],
  stepsToMake: [
    'Fill cocktail shaker with ice',
    'Add %MI1, %MI2, %MI3 and %MI4 to cocktail shaker. Shake until well-chilled',
    'Strain into chilled cocktail glass',
    'Garnish with a %GI1',
  ],
}

export default betweenTheSheets
