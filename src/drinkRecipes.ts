import { DrinkRecipe } from "types/DrinkRecipe"

const ginAndTonicRecipe: DrinkRecipe = {
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

const pinkPantherRecipe: DrinkRecipe = {
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

const drinkRecipes: DrinkRecipe[] = [
  ginAndTonicRecipe,
  pinkPantherRecipe,
  {
    name: "Alexander",
    ingredients: [
      "1 dry gin",
      "1 oz white creme de cacao",
      "1 oz single cream / half-and-half",
      "1 egg white",
      "Garnish: grated nutmeg",
    ],
    stepsToMake: [
      "Add gin, white creme de cacao, half-and-half and egg white to a shaker with ice, shake until well-chilled.",
      "Strain mix back into shaker, and dry shake (without ice).",
      "Fine strain into chilled coupe glass.",
      "Garnish with light dusting of grated nutmeg.",
    ],
    imageUrl:
      "https://cf.ltkcdn.net/cocktails/images/std/306704-800x533-alexander-cocktail.webp",
  },
  {
    name: "Americano",
    ingredients: [
      "1 1/2 oz Campari",
      "1 1/2 ounces sweet vermouth",
      "Soda water, chilled",
      "Garnish: orange twist",
    ],
    stepsToMake: [
      "Fill a highball glass with ice, then add the Campari and sweet vermouth.",
      "Top with the soda water and stir gently to combine.",
      "Garnish with an orange twist.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/x16XCHX_VS0bXEstWcdAsxYqejs=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__05__18075612__americano-720x720-article-50171f19cc644b05b8df563e06a647fd.jpg",
  },
  {
    name: "Angel's Face",
    ingredients: [
      "1 oz London dry gin",
      "1 oz applejack",
      "1 oz apricot liqueur",
      "Garnish: orange peel",
    ],
    stepsToMake: [
      "Add the gin, applejack and apricot liqueur into a mixing glass with ice and stir until well-chilled.",
      "Strain into a cocktail glass.",
      "Garnish with orange peel.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/Nvc1nUKiALoRXhtY_hoTxD0bW40=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/angels-face-720x720-primary-974a2f0bde394508b149e95fe272122f.jpg",
  },
  {
    name: "Aviation",
    ingredients: [
      "2 oz gin",
      "1/2 oz maraschino liqueur",
      "1/4 oz creme de violette",
      "3/4 oz lemon juice",
      "Garnish: brandied cherry",
    ],
    stepsToMake: [
      "Add the gin, maraschino liqueur, creme de violette and lemon juice to a shaker with ice and shake until well-chilled.",
      "Strain into a cocktail glass.",
      "Garnish with a brandied cherry.",
    ],
    imageUrl:
      "https://sipsfromscripts.com/wp-content/uploads/2020/08/Aviation-Cocktail-Recipe-SipsFromScripts.webp",
  },
  {
    name: "Between The Sheets",
    ingredients: [
      "1 oz cognac",
      "1 oz light rum",
      "1 oz triple sec",
      "1/4 oz lemon juice",
      "Garnish: flamed orange peel",
    ],
    stepsToMake: [
      "Add the cognac, rum, triple sec and lemon juice into a shaker with ice and shake until well-chilled.",
      "Strain into a chilled cocktail glass.",
      "Express the oils from a flamed orange peel over the top of the drink, then discard the peel before serving.",
    ],
    imageUrl:
      "https://www.acouplecooks.com/wp-content/uploads/2020/05/Between-the-Sheets-Cocktail-006.jpg",
  },
  {
    name: "Clover Club",
    ingredients: [
      "2 oz gin",
      "1/2 oz lemon juice",
      "1/2 oz raspberry syrup",
      "1 egg white",
      "Garnish: raspberries",
    ],
    stepsToMake: [
      "Add the gin, lemon juice, raspberry syrup and egg white into a shaker with ice and shake vigorously until well-chilled.",
      "Strain into a chilled cocktail glass.",
      "Garnish with 3 speared raspberries.",
    ],
    imageUrl:
      "https://savoredsips.com/wp-content/uploads/2020/03/clover-club-raspberry-cocktail-1-735x490.jpg",
  },
  {
    name: "Daiquiri",
    ingredients: [
      "2 oz light rum",
      "1 oz lime juice, freshly squeezed",
      "3/4 oz demerara sugar syrup",
      "Garnish: lime twist",
    ],
    stepsToMake: [
      "Add the rum, lime juice and demerara sugar syrup to a shaker with ice, and shake until well-chilled.",
      "Strain into a chilled coupe.",
      "Garnish with a lime twist.",
    ],
    imageUrl:
      "https://sf.ezoiccdn.com/ezoimgfmt/craftybartending.com/wp-content/uploads/2018/04/Daiquiri-Cocktail.jpg?ezimgfmt=ng:webp/ngcb1",
  },
  {
    name: "Brown Derby",
    ingredients: [
      "1 1/2 oz bourbon",
      "1 oz grapefruit juice",
      "1/2 oz honey syrup",
      "Garnish: grapefruit twist",
    ],
    stepsToMake: [
      "Add the bourbon, grapefruit juice and honey syrup into a shaker with ice and shake until well-chilled.",
      "Fine-strain into a cocktail glass.",
      "Express the oil from a grapefruit twist over the drink and drop the twist into the drink to garnish.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/BFcXbtDUgLwKIt98Da_UZDyq6gI=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/brown-derby-720x720-primary-b706bf8f3c2047ef982fdc2a064d437a.jpg",
  },
  {
    name: "Dry Martini",
    ingredients: [
      "2 1/2 oz gin",
      "1/2 oz dry vermouth",
      "1 dash orange bitters",
      "Garnish: lemon twist",
    ],
    stepsToMake: [
      "Add the gin, dry vermouth and orange bitters into a mixing glass with ice and stir until very cold.",
      "Strain into a chilled cocktail glass.",
      "Garnish with a lemon twist.",
    ],
    imageUrl:
      "https://theoxfordmagazine.com/wp-content/uploads/the-sky-wave-dry-martini-recipe-1920x1080.jpg",
  },
  {
    name: "Gin Fizz",
    ingredients: [
      "2 oz gin",
      "3/4 oz simple syrup",
      "1 oz lemon juice, freshly squeezed",
      "1 egg white",
      "Club soda",
    ],
    stepsToMake: [
      "Add the gin, lemon juice, simple syrup and egg white to a shaker and vigorously dry-shake (without ice) for about 15 seconds.",
      "Add 3 or 4 ice cubes and shake vigorously until well-chilled.",
      "Double-strain into a chilled Collins glass and top with club soda.",
    ],
    imageUrl:
      "https://alushlifemanual.com/wp-content/uploads/2020/04/Gin-Fizz.jpg",
  },
  {
    name: "Manhattan",
    ingredients: [
      "2 oz rye whiskey",
      "1 oz sweet vermouth",
      "2 dashes Angostura bitters",
      "Garnish: Brandied cherry or lemon twist",
    ],
    stepsToMake: [
      "Add the bourbon (or rye), sweet vermouth and bitters to a mixing glass with ice and stir until well   -chilled.",
      "Strain into a chilled Nick & Nora or coupe glass.",
      "Add Garnish.",
    ],
    imageUrl:
      "https://www.acouplecooks.com/wp-content/uploads/2020/03/Manhattan-Cocktail-080.jpg",
  },
  {
    name: "Mary Pickford",
    ingredients: [
      "1 1/2 oz white rum",
      "1 1/2 oz pineapple juice",
      "1 tsp grenadine",
      "6 drops maraschino liqueur",
    ],
    stepsToMake: [
      "Add the white rum, pineapple juice, grenadine and maraschino liqueur to a cocktail shaker with ice and shake until well-chilled.",
      "Strain into a chilled cocktail glass.",
    ],
    imageUrl:
      "https://www.bcliquorstores.com/sites/default/files/recipe/Prohibition_MaryPickford_3754.jpg",
  },
  {
    name: "Negroni",
    ingredients: [
      "1 oz gin",
      "1 oz Campari",
      "1 oz sweet vermouth",
      "Garnish: orange peel",
    ],
    stepsToMake: [
      "Add the gin, Campari and sweet vermouth to a mixing glass filled with ice, and stir until well-\t  chilled.",
      "Strain into a rocks glass filled with large ice cubes.",
      "Garnish with orange peel.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/JxTOAr3j6QredEyM1IzcohLDZ80=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__08110806__negroni-720x720-recipe-7c1b747a616f4659af4008d025ab55df.jpg",
  },
  {
    name: "Old Fashioned",
    ingredients: [
      "1 tsp sugar",
      "3 dashes Angostura bitters",
      "1 tsp water",
      "2 oz bourbon",
      "Garnish: orange twist",
    ],
    stepsToMake: [
      "Add the sugar and bitters to a rocks glass, then add the water, and stir until the sugar is nearly dissolved.",
      "Fill the glass with large ice cubes, add the bourbon, and gently stir to combine.",
      "Express the oil of an orange twist over the glass, then drop into the glass to garnish.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/_0WLXSRV03SfpWgZ1hwiAkyIrzE=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__08113350__bourbon-old-fashioned-720x720-recipe-ade6f7780c304999be3577e565c9bcdd.jpg",
  },
  {
    name: "Planter's Punch",
    ingredients: [
      "3 oz dark rum",
      "1 oz simple syrup",
      "1 tsp grenadine",
      "3/4 oz lime juice",
      "3 dashes Angostura bitters",
      "Club soda, chilled",
      "Garnish: mint sprig",
    ],
    stepsToMake: [
      "Add the dark rum, simple syrup, lime juice, grenadine and bitters into a shaker with ice, and shake until well-chilled.",
      "Strain into a Collins glass over crushed ice, and top with a splash of club soda.",
      "Garnish with a mint sprig.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/5-d88B1cHmMUAmtV_3mHK7wi2Ew=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__02__14093314__planters-punch-720x720-recipe-b588afaf107743f88f79db8f7c386e83.jpg",
  },
  {
    name: "Porto Flip",
    ingredients: [
      "1 3/4 oz ruby port",
      "1 oz cognac",
      "1 oz heavy cream",
      "1 whole egg",
      "1 1/2 tsp extra-fine sugar",
      "1 barspoon yellow Chartreuse",
      "Garnish: grated nutmeg",
    ],
    stepsToMake: [
      "Add all ingredients except the Chartreuse into a shaker and vigorously dry-shake (without ice).",
      "Open the shaker and add ice, and shake again until well-chilled.",
      "Strain into a chilled cocktail glass.",
      "Add the Chartreuse.",
      "Garnish with a light dusting of grated nutmeg.",
    ],
    imageUrl: "https://drinkch.rokka.io/new-composition-600/8e6b9a.jpg",
  },
  {
    name: "Rusty Nail",
    ingredients: ["1 1/2 oz scotch", "3/4 oz Drambuie"],
    stepsToMake: [
      "Add the scotch and Drambuie into a mixing glass with ice and stir until well-chilled.",
      "Strain into a rocks glass over one large ice cube.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/2LyCC02m9DFZD0Be1Pg6kjJorNA=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__04__12085746__rusty-nail-720x720-recipe-5cbb2c3e885b46fcabda7670bcfcf67c.jpg",
  },
  {
    name: "Sazerac",
    ingredients: [
      "Absinthe",
      "1 sugar cube",
      "1/2 tsp cold water",
      "3 dashes Peychaud's bitters",
      "2 dashes Angostura bitters",
      "1 1/4 oz rye whiskey",
      "1 1/4 oz cognac",
      "Garnish: lemon peel",
    ],
    stepsToMake: [
      "Rinse a chilled rocks glass with absinthe, discarding any excess, and set aside.",
      "In a mixing glass, muddle the sugar cube, water and the Peychaud’s and Angostura bitters.",
      "Add the rye and cognac, fill the mixing glass with ice and stir until well-chilled.",
      "Strained into prepared glass",
      "Twist the lemon peel over the drink's surface to express oils, then garnish with the peel.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/iLGK0RE4iGwLP2i9Kiy6w-8e8Qo=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/original-sazerac-720x720-primary-85570828fe894c04a13bd414aaa130e8.jpg",
  },
  {
    name: "Screwdriver",
    ingredients: ["1 1/2 oz vodka", "Orange juice"],
    stepsToMake: [
      "Fill a highball glass with ice, then add the vodka.",
      "Top with the orange juice.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/xQdUxz4hELJFJT7L5MimYSFSqM4=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__11__06162348__screwdrvier-720x720-recipe-23e0c0ac47334f108e4fa00b34b7f5bf.jpg",
  },
  {
    name: "Sidecar",
    ingredients: [
      "1 1/2 oz cognac",
      "3/4 oz orange liqueur",
      "3/4 oz lemon juice, freshly squeezed",
      "Garnish: orange twist",
      "Garnish: sugar rim",
    ],
    stepsToMake: [
      "Coat the rim of a coupe glass with sugar, if desired, and set aside.",
      "Add the cognac, orange liqueur and lemon juice to a shaker with ice and shake until well-chilled.",
      "Strain into the prepared glass.",
      "Garnish with an orange twist.",
    ],
    imageUrl:
      "https://cocktail-society.com/wp-content/uploads/2021/08/the-Sidecar-Cocktail.jpg",
  },
  {
    name: "Stinger",
    ingredients: ["2 oz cognac", "1 oz white creme de menthe"],
    stepsToMake: [
      "Add the cognac and white crème de menthe into a mixing glass with ice and stir until well-chilled.",
      "Strain into a rocks glass over crushed ice.",
    ],
    imageUrl:
      "https://cocktail-society.com/wp-content/uploads/2021/11/Stinger-Cocktail-landscape.jpg",
  },
  {
    name: "Whiskey Sour",
    ingredients: [
      "Celery salt",
      "1 lemon wedge",
      "1 lime wedge",
      "2 oz vodka",
      "4 oz tomato juice",
      "2 tsp prepared horseradish",
      "2 dashes Tabasco sauce",
      "2 dashes Worcestershire sauce",
      "1 pinch ground black pepper",
      "1 pinch smoked paprika",
      "Garnish: parsley sprig",
      "Garnish: green olives",
      "Garnish: lime wedge",
      "Garnish: celery stalk",
    ],
    stepsToMake: [
      "Pour some celery salt onto a small plate.",
      "Rub the juicy side of the lemon or lime wedge along the lip of a pint glass.",
      "Roll the outer edge of the glass in celery salt until fully coated, then fill the glass with ice and set aside.",
      "Squeeze the lemon and lime wedges into a shaker and drop them in.",
      "Add the vodka, tomato juice, horseradish, Tabasco, Worcestershire, black pepper, paprika, plus a pinch of celery salt along with ice and shake gently.",
      "Strain into prepared glass.",
      "Garnish with parsley sprig, 2 speared green olives, a lime wedge and a celery stalk.",
    ],
    imageUrl:
      "https://www.simplyrecipes.com/thmb/ZKzyOzXb52HVJUA3jLhjz8yTzEc=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__Whiskey-Sour-LEAD-1-a6981aa2e5614f599f23c7b672ca1923.jpg",
  },
  {
    name: "White Lady",
    ingredients: [
      "2 oz gin",
      "1/2 oz orange liqueur or triple sec",
      "1/2 oz lemon juice",
      "1 egg white",
    ],
    stepsToMake: [
      "Add the gin, orange liqueur, lemon juice and egg white into a shaker and dry-shake (without ice) vigorously.",
      "Add ice and shake again until well-chilled.",
      "Strain into a chilled cocktail glass.",
    ],
    imageUrl:
      "https://cdn-cnhig.nitrocdn.com/jHVWKNNIZyvKPhXOgQojhBkVLbeXdHcJ/assets/static/optimized/rev-a4481aa/wp-content/uploads/2015/12/white-lady-serious-eats.jpg",
  },
  {
    name: "White Dragon",
    ingredients: [
      "1 3/4 ounces Casa Dragones blanco tequila",
      "3/4 ounce Cointreau",
      "3/4 oz lemon juice",
      "1 egg white",
      "Garnish: orange twist",
    ],
    stepsToMake: [
      "Add the blanco tequila, Cointreau, lemon juice and egg white to a shaker and dry shake (without ice) for at least 15 seconds.",
      "Fill shaker with ice and shake again until well-chilled.",
      "Double-strain into a chilled coupe glass.",
      "Twist orange peel over the drink and discard.",
    ],
    imageUrl:
      "https://bygabriella.co/wp-content/uploads/2020/05/white-dragon-8-copy-683x1024.jpg",
  },
  {
    name: "Bellini",
    ingredients: [
      "1 1/2 oz white peach puree",
      "Prosecco, chilled",
      "Garnish: peach slice",
    ],
    stepsToMake: [
      "Add the peach puree to a Champagne flute or similar glass.",
      "Fill with the prosecco.",
      "Garnish with a peach slice.",
    ],
    imageUrl:
      "https://irenamacri.com/wp-content/uploads/2020/03/prosecco-peach-bellini-recipe.jpg",
  },
  {
    name: "Black Russian",
    ingredients: ["2 oz vodka", "1 oz Kahlúa"],
    stepsToMake: [
      "Add vodka and Kahlúa into a mixing glass with ice and stir until well-chilled.",
      "Strain into a rocks glass over fresh ice.",
    ],
    imageUrl:
      "https://assets.afcdn.com/recipe/20180903/82116_w1024h768c1cx3324cy2216.webp",
  },
  {
    name: "Bloody Mary",
    ingredients: [
      "2 oz bourbon",
      "3/4 oz lemon juice, freshly squeezed",
      "1/2 oz simple syrup",
      "1/2 oz egg white (optional)",
      "Garnish: Angostura bitters",
    ],
    stepsToMake: [
      "Add bourbon, lemon juice, simple syrup and egg white, if using, to a shaker and dry-shake for 30 seconds without ice.",
      "Add ice and shake again until well-chilled.",
      "Strain into a rocks glass or a coupe.",
      "Garnish with 3 or 4 drops of Angostura bitters.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/076lNK7XXALejxpKn_utvtImbHk=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bloody-mary-720x720-primary-28cf1aaa79d0424d951901fcc0a42e91.jpg",
  },
  {
    name: "Caipirinha",
    ingredients: [
      "2 oz cachaça",
      "2 tsp sugar",
      "1 lime, cut into wedges",
      "Garnish: lime wheel",
    ],
    stepsToMake: [
      "In a double rocks glass, muddle the lime wedges and sugar.",
      "Fill the glass with ice, add the cachaça, and stir briefly.",
      "Garnish with a lime wheel.",
    ],
    imageUrl:
      "https://zestfulkitchen.com/wp-content/uploads/2017/05/caipirinha_cover-for-web-736x809.jpg",
  },
  {
    name: "Cosmopolitan",
    ingredients: [
      "1 1/2 ounces citron vodka",
      "3/4 ounce Cointreau",
      "3/4 ounce lime juic",
      "1/2 ounce cranberry juice cocktail",
      "Garnish: lime wedge",
    ],
    stepsToMake: [
      "Add the vodka, Cointreau, lime juice, and cranberry juice cocktail into a shaker with ice and shake until well-chilled.",
      "Strain into a chilled cocktail glass.",
      "Garnish with a lime wedge.",
    ],
    imageUrl:
      "https://lisasdinnertimedish.com/wp-content/uploads/2021/01/Classic-Cosmopolitan-3983.jpg.webp",
  },
  {
    name: "Corpse Reviver No.2",
    ingredients: [
      "Absinthe",
      "3/4 oz London dry gin",
      "3/4 oz Lillet blanc",
      "3/4 oz orange liqueur",
      "3/4 oz lemon juice, freshly squeezed",
    ],
    stepsToMake: [
      "Rinse the inside of a chilled coupe or cocktail glass with absinthe, discard the excess and set the glass aside.",
      "Add the gin, Lillet blanc, orange liqueur and lemon juice into a shaker with ice and shake until well-chilled.",
      "Strain into the prepared glass.",
    ],
    imageUrl:
      "https://content.mrbostondrinks.com/recipes/corpse-reviver-no-2/309/632.jpg",
  },
  {
    name: "Cuba Libre",
    ingredients: ["1 oz rum", "3 oz Coca-Cola", "Garnish: lime wedge"],
    stepsToMake: [
      "Fill a highball glass with ice, then add rum and Coca-Cola.",
      "Garnish with a lime wedge. Squeeze the lime into your drink, if desired.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/h9kStMQYj4Ve70nijZ4x6vt3EXk=/720x720/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__01__02105149__Cuba-Libre-720x720-recipe-673b48bbef034d89b6b5149b8417c7d5.jpg",
  },
  {
    name: "French 75",
    ingredients: [
      "1 oz gin",
      "1/2 oz lemon juice, freshly squeezed",
      "1/2 oz simple syrup",
      "3 oz Champagne",
      "Garnish: lemon twist",
    ],
    stepsToMake: [
      "Add the gin, lemon juice and simple syrup to a shaker with ice and shake until well-chilled.",
      "Strain into a Champagne flute.",
      "Top with the Champagne.",
      "Garnish with a lemon twist.",
    ],
    imageUrl:
      "https://www.seriouseats.com/thmb/mF0QColMlbmc_r8YT7YSVeVshfQ=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__04__20150323-cocktails-vicky-wasik-french75-796ef7bed98d48cdbcdd13b436589289.jpg",
  },
  {
    name: "French Connection",
    ingredients: ["1 1/2 oz cognac", "1 oz amaretto"],
    stepsToMake: [
      "Fill a rocks glass with ice.",
      "Add the cognac and amaretto and stir briefly to combine.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/Q6k4YcILmuPYkKEqffkwYoKe2qk=/735x0/french-connection-720x720-primary-424103533cfe4e9e8522945d0568f3d4.jpg",
  },
  {
    name: "Gimlet",
    ingredients: [
      "2 oz vodka",
      "3/4 oz lime juice, freshly squeezed",
      "1/2 oz simple syrup",
      "Garnish: lime wheel",
    ],
    stepsToMake: [
      "Add the vodka, lime juice and simple syrup into a shaker with ice and shake until well-chilled.",
      "Strain into a chilled cocktail glass.",
      "Garnish with a lime wheel.",
    ],
    imageUrl:
      "https://www.culinaryhill.com/wp-content/uploads/2019/11/Gimlet-Recipe-Culinary-Hill-LR-05.jpg",
  },
  {
    name: "Godfather",
    ingredients: ["2 oz blended scotch or bourbon", "1/4 oz amaretto"],
    stepsToMake: [
      "Fill a mixing glass 2/3 full of ice. Add the scotch and amaretto and stir until well-chilled.",
      "Strain into a rocks glass over fresh ice.",
    ],
    imageUrl:
      "https://cdn1.foodviva.com/static-content/food-images/whisky-recipes/godfather-drink/godfather-drink.jpg",
  },
  {
    name: "Golden Dream",
    ingredients: [
      "1 1/2 oz Galliano L'Autentico",
      "1 1/2 oz orange liqueur",
      "1 1/2 oz orange juice",
      "3/4 oz heavy cream",
    ],
    stepsToMake: [
      "Add all ingredients to a shaker with ice and shake until well-chilled.",
      "Strain into a chilled cocktail glass.",
    ],
    imageUrl:
      "https://img.myloview.com/posters/refreshing-boozy-golden-dream-cocktail-700-255458247.jpg",
  },
  {
    name: "Grasshopper",
    ingredients: [
      "1 oz creme de menthe",
      "1 oz white creme de cacao",
      "2 oz heavy cream",
      "Garnish: grated nutmeg",
    ],
    stepsToMake: [
      "Add the green creme de menthe, white creme de cacao and heavy cream into a shaker with ice and shake vigorously until well-chilled.",
      "Strain into a chilled cocktail glass.",
      "Garnish with grated nutmeg over the top of the drink",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/CRXajbaGbKIDo-nc2CGIw2N1xF0=/735x0/grasshopper-720x720-article-effdd8c4222b415c948816047bd59b1a.jpg",
  },
  {
    name: "Harvey Wallbanger",
    ingredients: [
      "1 1/4 oz vodka",
      "1/2 oz Galliano L’Autentico liqueur",
      "3 oz orange juice",
      "Garnish: orange slice",
      "Garnish: maraschino cherry",
    ],
    stepsToMake: [
      "Fill a tall glass with ice, then add the vodka and orange juice and stir.",
      "Float the Galliano on top.",
      "Garnish with a skewered orange slice and maraschino cherry.",
    ],
    imageUrl:
      "https://www.thespruceeats.com/thmb/TDnWXKg1IxJZQM1ldFpeR-fCodA=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/harvey-wallbanger-recipe-759308-hero-01-03b0f2ff672c4a89b6700b6404aa4c56.jpg",
  },
  {
    name: "Death in the Afternoon",
    ingredients: ["1 1/2 oz absinthe", "4 1/2 oz chilled Champagne"],
    stepsToMake: [
      "Pour the absinthe into a coupe.",
      "Top slowly with the Champagne.",
    ],
    imageUrl:
      "https://www.acouplecooks.com/wp-content/uploads/2020/12/Death-in-the-afternoon-008.jpg",
  },
  {
    name: "Horse's Neck",
    ingredients: [
      "2 oz bourbon, brandy or rye whiskey",
      "Ginger ale, chilled",
      "Garnish: lemon peel",
    ],
    stepsToMake: [
      "Add the whiskey into a Collins glass over ice.",
      "Top with ginger ale.",
      "Garnish with a long strip of lemon peel.",
    ],
    imageUrl:
      "https://images.getrecipekit.com/20220506081045-a_glass_of_horse-e2-80-99s_neck-5b1-5d.jpg?aspect_ratio=4:3&quality=90&auto_optimize=medium",
  },
  {
    name: "Irish Coffee",
    ingredients: [
      "1 1/2 oz Irish whiskey",
      "2 tsp brown sugar",
      "Hot brewed coffee",
      "Garnish: whipped cream",
    ],
    stepsToMake: [
      "Fill an Irish Coffee mug with hot water, let sit for 2 minutes, then discard the water.",
      "Add the whiskey and sugar to the heated glass, fill with the coffee, and stir.",
      "Top with an inch of unsweetened lightly whipped cream.",
    ],
    imageUrl:
      "https://www.mashed.com/img/gallery/irish-coffee-cocktail-recipe/irish-coffee-cocktail-recipe-1645654545.jpg",
  },
  {
    name: "Kir Royale",
    ingredients: [
      "1/2 oz creme de cassis",
      "Dry Champagne (or other sparkling wine)",
      "Garnish: lemon twist",
    ],
    stepsToMake: [
      "Pour the creme de cassis into a Champagne flute.",
      "Top with the Champagne.",
      "Garnish with a lemon twist.",
    ],
    imageUrl:
      "https://images.absolutdrinks.com/drink-images/Raw/Absolut/dde5b617-048f-4af0-8c7f-0b2818407acb.jpg?imwidth=750",
  },
  {
    name: "Long Island Iced Tea",
    ingredients: [
      "3/4 oz vodka",
      "3/4 oz white rum",
      "3/4 oz silver tequila",
      "3/4 oz gin",
      "3/4 oz triple sec",
      "3/4 oz simple syrup",
      "3/4 oz lemon juice",
      "Cola",
      "Garnish: lemon wedge",
    ],
    stepsToMake: [
      "Add the vodka, rum, tequila, gin, triple sec, simple syrup and lemon juice to a Collins glass filled with ice.",
      "Top with a splash of the cola and stir briefly.",
      "Garnish with a lemon wedge.",
      "Serve with a straw.",
    ],
    imageUrl:
      "https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2022/06/Long_Island_Iced_Tea_GettyImages-547425658_1920x1280.jpg",
  },
  {
    name: "Mai Tai",
    ingredients: [
      "1 1/2 oz white rum",
      "3/4 oz orange curaçao",
      "3/4 oz lime juice",
      "1/2 oz orgeat",
      "1/2 oz dark rum",
      "Garnish: orange slice",
      "Garnish: cherry",
      "Garnish: mint sprig",
    ],
    stepsToMake: [
      "Add the white rum, curaçao, lime juice and orgeat into a shaker with crushed ice and shake lightly (about 3 seconds).",
      "Pour into a double rocks glass.",
      "Float the dark rum over the top.",
      "Garnish with orange slice, cherry and mint sprig.",
    ],
    imageUrl:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2020%2F05%2F04%2Fmai-tai_0.jpg",
  },
  {
    name: "Margarita",
    ingredients: [
      "2 oz blanco tequila",
      "1/2 oz agave syrup",
      "1/2 oz orange liqueur",
      "1 oz lime juice",
      "Garnish: lime wheel",
      "Garnish: kosher salt",
    ],
    stepsToMake: [
      "Rub a lime wedge around the edge of a rocks glass, and dip rim in kosher salt.",
      "Add tequila, orange liqueur, lime juice and agave syrup to a cocktail shaker filled with ice; shake until well-chilled.",
      "Strain into prepared glass over fresh ice.",
      "Garnish with a lime wheel.",
    ],
    imageUrl:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2019%2F07%2Fhow-make-perfect-margarita-ft-blog0719.jpg",
  },
  {
    name: "Martinez",
    ingredients: [
      "1 1/2 oz gin",
      "1 1/2 oz sweet vermouth",
      "1/4 oz maraschino liqueur",
      "2 dashes Angostura bitters",
      "Garnish: orange twist",
    ],
    stepsToMake: [
      "Add the gin, sweet vermouth, maraschino liqueur, and bitters into a mixing glass with ice.",
      "Stir until well-chilled.",
      "Strain into a chilled coupe glass.",
      "Garnish with an orange twist.",
    ],
    imageUrl:
      "https://www.acouplecooks.com/wp-content/uploads/2020/05/Martinez-Cocktail-022.jpg",
  },
  {
    name: "Mimosa",
    ingredients: ["2 oz orange juice", "Sparkling wine or Champagne, chilled"],
    stepsToMake: [
      "Pour the orange juice into a Champagne flute.",
      "Top with sparkling wine.",
    ],
    imageUrl:
      "https://food-fanatic-res.cloudinary.com/iu/s--AQcZASMu--/c_thumb,f_auto,g_auto,h_1333,q_auto,w_1333/v1596119508/mimosa-cocktail-photo",
  },
  {
    name: "Mint Julep",
    ingredients: [
      "2 oz bourbon",
      "1/4 oz simple syrup",
      "8 mint leaves",
      "Garnish: mint sprig",
      "Garnish: Angostura bitters",
    ],
    stepsToMake: [
      "In a Julep cup or rocks glass, lightly muddle the mint leaves in the simple syrup.",
      "Add the bourbon then pack the glass tightly with crushed ice.",
      "Stir until the cup is frosted on the outside.",
      "Top with more crushed ice to form an ice dome, and garnish with a mint sprig and a few drops of bitters.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/I4TMQxCzojbuBMu3znFVWb84ZgY=/735x0/mint-julep-720x720-primary-5e2063b906384479b345687201992bd0.jpg",
  },
  {
    name: "Mojito",
    ingredients: [
      "2 oz white rum",
      "1/2 oz simple syrup",
      "3/4 oz lime juice, freshly squeezed",
      "3 mint leaves",
      "Club soda",
      "Garnish: mint sprig",
      "Garnish: lime wheel",
    ],
    stepsToMake: [
      "Lightly muddle the mint with the simple syrup in a shaker.",
      "Add the rum, lime juice and ice, and give it a brief shake, then strain into a highball glass over fresh ice.",
      "Top with the club soda.",
      "Garnish with a mint sprig and lime wheel.",
    ],
    imageUrl:
      "https://www.deliciousmagazine.co.uk/wp-content/uploads/2014/01/Mojito-768x960.jpg",
  },
  {
    name: "Moscow Mule",
    ingredients: [
      "2 oz vodka",
      "1/2 oz lime juice, freshly squeezed",
      "3 oz ginger beer, chilled",
      "Garnish: lime wheel",
    ],
    stepsToMake: [
      "Fill a Moscow Mule mug (or highball glass) with ice, then add the vodka and lime juice.",
      "Top with ginger beer.",
      "Garnishs with a lime wheel.",
    ],
    imageUrl:
      "https://delightfulmomfood.com/wp-content/uploads/2021/12/moscow-mule-ginger-beer-2.jpg",
  },
  {
    name: "Piña Colada",
    ingredients: [
      "2 oz light rum",
      "1 1/2 oz cream of coconut",
      "1 1/2 oz pineapple juice",
      "1/2 oz lime juice",
      "Garnish: pineapple wedge",
      "Garnish: pineapple leaf",
    ],
    stepsToMake: [
      "Add the rum, cream of coconut and pineapple and lime juices to a shaker with ice and shake vigorously for 20 to 30 seconds.",
      "Strain into a chilled Hurricane glass over pebble ice.",
      "Garnish with a pineapple wedge and pineapple leaf.",
    ],
    imageUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2013/11/pina-colada-c68aca7.jpg?resize=960,872?quality=90&resize=556,505",
  },
  {
    name: "Sea Breeze",
    ingredients: [
      "1 1/2 oz vodka",
      "3 oz cranberry juice",
      "1 1/2 oz grapefruit juice",
      "Garnish: lime wheel",
    ],
    stepsToMake: [
      "Add the vodka, cranberry juice and grapefruit juice into a highball glass with ice and stir.",
      "Garnish with a lime wheel.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/EOS5P-JTSFIqJir9upVRzLKqijQ=/720x720/smart/filters:no_upscale()/sea-breeze-720x720-recipe-e1e39750d0fe46eeb281de64c93110dd.jpg",
  },
  {
    name: "Sex On The Beach",
    ingredients: [
      "1 1/2 oz vodka",
      "1/2 oz peach schnapps",
      "1/2 oz Chambord or creme de cassis",
      "1 1/2 oz orange juice",
      "1 1/2 oz cranberry juice",
      "Garnish: cocktail umbrella",
    ],
    stepsToMake: [
      "Add the vodka, peach schnapps, Chambord, orange juice and cranberry juice to a shaker with ice and shake.",
      "Strain into a highball glass over fresh ice.",
      "Garnish with a cocktail umbrella.",
    ],
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-191217-sex-on-the-beach-109-landscape-pf-1-1577742797.jpg?crop=0.668xw:1.00xh;0.196xw,0&resize=768:*",
  },
  {
    name: "Singapore Sling",
    ingredients: [
      "3/4 oz gin",
      "1/4 oz Benedictine",
      "1/4 oz Grand Marnier",
      "1/4 oz cherry liqueur",
      "1 oz pineapple juice",
      "1/2 oz lime juice",
      "1 dash Angostura bitters",
      "Club soda, chilled",
      "Garnish: orange slice",
      "Garnish: cherry",
    ],
    stepsToMake: [
      "Add the gin, Benedictine, Grand Marnier, cherry liqueur, pineapple juice, lime juice and bitters into a shaker with ice and shake until well-chilled.",
      "Strain into a highball glass over fresh ice, and top with the club soda.",
      "Garnish with an orange slice and a cherry.",
    ],
    imageUrl:
      "https://robbreport.com/wp-content/uploads/2022/08/GettyImages_singapore_sling.jpg",
  },
  {
    name: "Tequila Sunrise",
    ingredients: [
      "2 oz blanco tequila",
      "4 oz orange juice",
      "1/4 oz grenadine",
      "Garnish: orange slice",
      "Garnish: cherry",
    ],
    stepsToMake: [
      "Add the tequila and then the orange juice to a chilled highball glass filled with ice.",
      "Top with the grenadine, which will sink to the bottom of the glass, creating a layered effect.",
      "Garnish with an orange slice and a cherry.",
    ],
    imageUrl:
      "https://alushlifemanual.com/wp-content/uploads/2021/03/Tequila-Sunrise-720x540.jpg",
  },
  {
    name: "The Last Word",
    ingredients: [
      "3/4 oz gin",
      "3/4 oz green Chartreuse",
      "3/4 oz maraschino liqueur",
      "3/4 oz lime juice, freshly squeezed",
      "Garnish: brandied cherry",
    ],
    stepsToMake: [
      "Add the gin, green Chartreuse, maraschino liqueur and lime juice into a shaker with ice and shake until well-chilled.",
      "Strain into a chilled coupe glass.",
      "Garnish with a brandied cherry.",
    ],
    imageUrl:
      "https://www.acouplecooks.com/wp-content/uploads/2020/06/Last-Word-Cocktail-054.jpg",
  },
  {
    name: "B 52",
    ingredients: [
      "1/3 ounce coffee liqueur",
      "1/3 ounce Baileys Irish cream liqueur",
      "1/3 ounce Grand Marnier liqueur",
    ],
    stepsToMake: [
      "Pour the coffee liqueur into a shot glass.",
      "Slowly layer the Baileys on top of the coffee liqueur and the Grand Marnier on top of the Baileys.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/4m10hhFFUocKsj2syDnkWXFppqY=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2016__12__05144234__B52-shot-720sq-a7c7feadc9bb46098c21ae11442ccc64.jpg",
  },
  {
    name: "Bramble",
    ingredients: [
      "2 oz gin",
      "1 oz lemon juice",
      "2 tsp simple syrup",
      "1/2 oz creme de mure",
      "Garnish: lemon half-wheel",
      "Garnish: fresh blackberry",
    ],
    stepsToMake: [
      "Add the gin, lemon juice and simple syrup into a shaker with ice and shake until well-chilled.",
      "Fine-strain into an Old Fashioned glass over crushed ice.",
      "Slowly pour the creme de mure over the top of the drink.",
      "Garnish with a lemon half-wheel and a fresh blackberry.",
    ],
    imageUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bramble-baa53ba.jpg",
  },
  {
    name: "Dark 'N Stormy",
    ingredients: [
      "2 oz dark rum",
      "1/2 oz lime juice",
      "5 oz Ginger beer, chilled",
      "Garnish: lime wheel",
    ],
    stepsToMake: [
      "Add rum and lime juice to a tall glass filled with ice.",
      "Top with ginger beer.",
      "Garnish with a lime wheel.",
    ],
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1216/2612/files/a_dark__n_stormy_drink.jpg?v=1625989180",
  },
  {
    name: "Dirty Martini",
    ingredients: [
      "2 1/2 ounces gin or vodka",
      "1/2 ounce dry vermouth",
      "1/2 ounce olive brine",
      "Garnish: 2 to 4 green olives",
    ],
    stepsToMake: [
      "Add the gin or vodka, vermouth and olive brine to a mixing glass filled with ice and stir until well-chilled.",
      "Strain into a chilled cocktail glass.",
      "Garnish with a skewer of olives.",
    ],
    imageUrl:
      "https://www.lemontreedwelling.com/wp-content/uploads/2021/01/dirty-martini-featured-0952-720x720.jpg",
  },
  {
    name: "Kamikaze",
    ingredients: ["2 oz vodka", "3/4 oz orange liqueur", "3/4 oz lime juice"],
    stepsToMake: [
      "Add the vodka, orange liqueur and lime juice to a shaker with ice, and shake thoroughly until well-chilled.",
      "Strain into two shot glasses.",
    ],
    imageUrl:
      "https://www.lemontreedwelling.com/wp-content/uploads/2021/01/dirty-martini-featured-0952-720x720.jpg",
  },
  {
    name: "Lemon Drop",
    ingredients: [
      "2 oz vodka",
      "1/2 oz triple sec",
      "1 oz lemon juice",
      "1 oz simple syrup",
      "Garnish: sugar rim",
    ],
    stepsToMake: [
      "Coat the rim of a cocktail glass with sugar and set aside (do this a few minutes ahead so the sugar can dry and adhere well to the glass).",
      "Add the vodka, triple sec, lemon juice and simple syrup to a shaker with ice and shake until well-chilled.",
      "Strain into the prepared glass.",
    ],
    imageUrl:
      "https://theadventurebite.com/wp-content/uploads/2019/02/Lemon-Drop-Cocktail-02-640x427.jpg",
  },
  {
    name: "Paloma",
    ingredients: [
      "2 oz tequila",
      "1/2 oz lime juice, freshly squeezed",
      "Grapefruit soda, chilled",
      "Garnish: lime wheel",
      "Garnish: salt",
    ],
    stepsToMake: [
      "Rub a lime wedge around the edge of a highball glass, and dip the rim in salt.",
      "Add the tequila and lime juice to the glass, and fill with ice.",
      "Top with grapefruit soda, and stir briefly and gently to combine.",
      "Garnish with a lime wheel.",
    ],
    imageUrl:
      "https://d33wubrfki0l68.cloudfront.net/b0b13f9d7323dc2191355cb2a1b66aa1f5aa6875/d25f8/images/uploads/2021_07_24_paloma_cocktail_2.jpg",
  },
  {
    name: "Pimm's Cup",
    ingredients: [
      "2 oz Pimm's No.1",
      "1/2 oz lemon juice, freshly squeezed",
      "Ginger ale",
      "Garnish: cucumber slice",
      "Garnish: mint sprig",
      "Garnish: strawberry",
      "Garnish: lemon wheel",
      "Garnish: orange wheel",
    ],
    stepsToMake: [
      "Add Pimm's No.1 and lemon juice into a highball glass over ice, then top with ginger ale and stir briefly to combine.",
      "Garnish with a cucumber slice, mint sprig, skewered strawberry and optional lemon and orange wheels.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/f-0Rfs4hNG2P-Y7mZLZmUO8yYcg=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__10__29142721__pimms-cup-720x720-recipe-e0c8e82adb6249a898be85f4136f3643.jpg",
  },
  {
    name: "Pisco Sour",
    ingredients: [
      "2 oz pisco",
      "1 oz lime juice, freshly squeezed",
      "1/2 oz simple syrup",
      "1 egg white",
      "Garnish: Angostura bitters",
    ],
    stepsToMake: [
      "Add pisco, lime juice, simple syrup and egg white into a shaker and dry-shake (without ice) vigorously.",
      "Add ice and shake again until well-chilled.",
      "Strain into a chilled Nick & Nora glass.",
      "Garnish with 3 to 5 drops of Angostura bitters. Using a straw, swirl the bitters into a simple design, if desired.",
    ],
    imageUrl:
      "https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2022/03/03_22_Pisco_Sour_Tyler_Zielinski_1920x1280.jpg",
  },
  {
    name: "Tom Collins",
    ingredients: [
      "2 oz London dry gin",
      "1 oz lemon juice, freshly squeezed",
      "1/2 oz simple syrup",
      "Club soda",
      "Garnish: lemon wheel",
      "Garnish: maraschino cherry",
    ],
    stepsToMake: [
      "Add the gin, lemon juice and simple syrup to a Collins glass.",
      "Fill with ice, top with club soda and stir.",
      "Garnish with a lemon wheel and maraschino cherry.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/IXbotMUOs_v8hC-zQr_gL4UTMjg=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__04__03080950__Tom-Collins-720x720-recipe-e87bf7954cdb4438b5e8d21f568cdd6f.jpg",
  },
  {
    name: "Vesper Martini",
    ingredients: [
      "3 oz gin",
      "1 oz vodka",
      "1/2 oz Lillet blanc aperitif",
      "Garnish: lemon twist",
    ],
    stepsToMake: [
      "Add the gin, vodka and Lillet blanc into a mixing glass with ice and stir until well-chilled.",
      "Strain into a chilled cocktail glass.",
      "Express the oils from a lemon twist over the drink, rub the twist along the rim of the glass and drop it into the cocktail.",
    ],
    imageUrl:
      "https://www.saveur.com/uploads/2020/04/13/QPD2XSLP7FFRRKPVWLCZPZND2I.jpg?auto=webp&width=1440&height=1080",
  },
  {
    name: "Lady in Blue",
    ingredients: [
      "1 1/2 oz gin",
      "1/4 oz creme de violette",
      "3/4 oz lemon juice, freshly squeezed",
      "1/2 oz simple syrup",
      "3 drops orange flower water",
      "Blue curaçao, to layer",
      "Garnish: 5 edible flower petals",
    ],
    stepsToMake: [
      "Add gin, creme de violette, lemon juice, simple syrup and orange flower water into a shaker with ice and shake vigorously until well-chilled",
      "Double-strain into a coupe glass.",
      "Pour a slip of blue curaçao down the side of the glass so that it layers on the bottom of the glass.",
      "Garnish with edible flower petals.",
    ],
    imageUrl:
      "https://www.liquor.com/thmb/9bgw_NfFP4UqlVntyiMGsOAsqPg=/720x720/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__05__03122240__11-Delicious-Cocktails-to-Try-on-Memorial-Day-Weekend-lady-in-blue-720x720-slideshow-86c4aeaa84134523bad7ca45b952cf4d.jpg",
  },
  {
    name: "Fitzgerald",
    ingredients: [
      "1 1/2 oz London dry gin",
      "3/4 oz simple syrup",
      "3/4 oz lemon juice",
      "3 dashes Angostura bitters",
      "Garnish: lemon twist",
    ],
    stepsToMake: [
      "Add all ingredients to cocktail shaker half-filled with ice and shake until chilled.",
      "Strain into a chilled coupe or cocktail glass",
      "Garnish with a lemon twist and serve",
    ],
    imageUrl:
      "https://bevvyco.s3.amazonaws.com/img/drinks/ca/btca/fitzgerald-defe36fa4d63677a813f68a53182c019-lg.jpg",
  },
]

export default drinkRecipes
