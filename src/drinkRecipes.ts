import { DrinkRecipe } from "types/DrinkRecipe"

export const ginAndTonicRecipe: DrinkRecipe = {
  name: "Gin & Tonic",
  imageUrl:
    "https://theforkedspoon.com/wp-content/uploads/2018/06/gin-and-tonic-500x375.jpg",
  ingredients: [
    "Hendrix Gin",
    "Fever Tree Tonic",
    "Lemon",
    "Lime",
    "Cucumber",
    "Ice",
  ],
  stepsToMake: [
    "Put one square cube into the glass",
    "Pour two shots of cold Hendricks Gin into the glass",
    "Add two shots of cold Fever Tree Tonic into the glass",
    "Squeeze one lemon wedge over the glass",
    "Squeeze one lime wedge over the glass",
    "Garnish glass with cucumber slice",
  ],
}

export const pinkPantherRecipe: DrinkRecipe = {
  name: "Pink Panther",
  imageUrl:
    "https://www.liquor.com/thmb/eYFMOF0pFOCAcYozWhIO6sljQIE=/440x0/filters:no_upscale():max_bytes(150000):strip_icc()/pink-lady-720x720-primary-v2-80334dc275ca4c009799a0cf424d9a87.jpg",
  ingredients: [
    "Egg White",
    "Lemon Juice",
    "Grenadine",
    "Basil Hayden Bourbon",
    "Ice",
  ],
  stepsToMake: [
    "Crack Egg White into Cocktail Shaker",
    "Fill the Cocktail Shaker halfway high with Ice",
    "Add one shot of Lemon Juice to the Cocktail Shaker",
    "Add two shots of Basil Hayden to the Cocktail Shaker",
    "Add one shot of Grenadine to the Cocktail Shaker",
    "Close and shake the Cocktail Shaker for 5 seconds",
    "Pour the contents of the Cocktail Shaker through a Cocktail Strainer into a glass (Coupe Glasses look nice)",
  ],
}

const drinkRecipes: DrinkRecipe[] = [ginAndTonicRecipe, pinkPantherRecipe]

export default drinkRecipes
