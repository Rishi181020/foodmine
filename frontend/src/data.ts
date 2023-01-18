import { Food } from "./app/shared/models/Food";    

export const sample_foods:Food[]=[
    {
        id:'1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id:'2',
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favourite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id:'3',
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favourite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id:'4',
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favourite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: 'assets/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id:'5',
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favourite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id:'6',
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favourite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
]