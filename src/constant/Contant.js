export const colors = {
  COLOR_PRIMARY: "#f96163",
  COLOR_LIGHT: "#fff",
  COLOR_DARK: "#000",
  COLOR_DARK_ALT: "#262626",
};

export const categories = [
  { id: 1, category: "Lunch" },
  { id: 2, category: "Dinner" },
  { id: 3, category: "Desserts" },
  { id: 4, category: "Salads" },
  { id: 5, category: "Soups" },
  { id: 6, category: "Beverages" },
  { id: 7, category: "Breads" },
  { id: 8, category: "Asian" },
  { id: 9, category: "Snacks" },
  { id: 10, category: "Italian" },
];

export const recipeList = [
  {
    id: "01",
    name: "Tuna Tartare",
    image: require("../../assets/images/burger1.png"),
    rating: "4.2",
    ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    color: "#f96163",
    description:
      "A refreshing and light dish with raw tuna, lime, and avocado.",
    steps: [
      "Dice the tuna into small cubes.",
      "Mix the tuna with lime juice, red onion, and avocado.",
      "Chill for 30 minutes before serving.",
    ],
  },
  {
    id: "02",
    name: "Grilled Chicken",
    image: require("../../assets/images/burger2.png"),
    rating: "4.5",
    ingredients: ["Chicken Breast", "Olive Oil", "Garlic", "Rosemary"],
    time: "35 mins",
    difficulty: "Easy",
    calories: "500 cal",
    color: "#f39c12",
    description: "Tender grilled chicken with a hint of rosemary and garlic.",
    steps: [
      "Marinate the chicken with olive oil, garlic, and rosemary.",
      "Grill the chicken on medium heat for 5-7 minutes per side.",
      "Let it rest for 5 minutes before serving.",
    ],
  },
  {
    id: "03",
    name: "Pasta Carbonara",
    image: require("../../assets/images/tuna.png"),
    rating: "4.7",
    ingredients: ["Spaghetti", "Pancetta", "Eggs", "Parmesan Cheese"],
    time: "30 mins",
    difficulty: "Medium",
    calories: "600 cal",
    color: "#e74c3c",
    description:
      "A rich and creamy pasta dish with pancetta and Parmesan cheese.",
    steps: [
      "Cook the spaghetti according to package instructions.",
      "Fry the pancetta until crispy.",
      "Mix eggs and Parmesan, and toss with the pasta and pancetta.",
    ],
  },
  {
    id: "04",
    name: "Beef Stroganoff",
    image: require("../../assets/images/burger1.png"),
    rating: "4.6",
    ingredients: ["Beef", "Mushrooms", "Onions", "Sour Cream"],
    time: "45 mins",
    difficulty: "Hard",
    calories: "650 cal",
    color: "#8e44ad",
    description:
      "A creamy and flavorful beef dish with mushrooms and sour cream.",
    steps: [
      "Cook the beef with onions and mushrooms until browned.",
      "Add sour cream and simmer until the sauce thickens.",
      "Serve over egg noodles or rice.",
    ],
  },
  {
    id: "05",
    name: "Vegetable Stir Fry",
    image: require("../../assets/images/burger3.png"),
    rating: "4.3",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
    time: "25 mins",
    difficulty: "Easy",
    calories: "300 cal",
    color: "#27ae60",
    description:
      "A healthy stir fry loaded with fresh vegetables and savory soy sauce.",
    steps: [
      "Chop the vegetables into bite-sized pieces.",
      "Stir fry in a hot pan with oil for 5-7 minutes.",
      "Add soy sauce and stir for another 2-3 minutes before serving.",
    ],
  },
  {
    id: "06",
    name: "Margherita Pizza",
    image: require("../../assets/images/burger2.png"),
    rating: "4.8",
    ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella", "Basil"],
    time: "20 mins",
    difficulty: "Medium",
    calories: "700 cal",
    color: "#e74c3c",
    description:
      "A classic Italian pizza with fresh mozzarella, tomato sauce, and basil.",
    steps: [
      "Roll out the pizza dough and spread tomato sauce on top.",
      "Add slices of mozzarella and fresh basil leaves.",
      "Bake in a hot oven at 500°F for 10-12 minutes until bubbly and golden.",
    ],
  },
  {
    id: "07",
    name: "Caesar Salad",
    image: require("../../assets/images/tuna.png"),
    rating: "4.4",
    ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
    time: "15 mins",
    difficulty: "Easy",
    calories: "320 cal",
    color: "#f1c40f",
    description:
      "A fresh Caesar salad with crunchy croutons and rich Parmesan cheese.",
    steps: [
      "Chop the romaine lettuce and toss with Caesar dressing.",
      "Top with croutons and freshly grated Parmesan cheese.",
      "Serve chilled.",
    ],
  },
  {
    id: "08",
    name: "Shrimp Scampi",
    image: require("../../assets/images/burger3.png"),
    rating: "4.9",
    ingredients: ["Shrimp", "Garlic", "Butter", "Lemon"],
    time: "25 mins",
    difficulty: "Medium",
    calories: "450 cal",
    color: "#3498db",
    description: "A savory and buttery shrimp dish with garlic and lemon.",
    steps: [
      "Sauté the shrimp in butter and garlic until pink.",
      "Add lemon juice and simmer for 2-3 minutes.",
      "Serve over pasta or with crusty bread.",
    ],
  },
  {
    id: "09",
    name: "Chocolate Lava Cake",
    image: require("../../assets/images/burger1.png"),
    rating: "4.9",
    ingredients: ["Dark Chocolate", "Butter", "Eggs", "Flour"],
    time: "35 mins",
    difficulty: "Hard",
    calories: "700 cal",
    color: "#2c3e50",
    description: "A decadent dessert with a molten chocolate center.",
    steps: [
      "Melt the dark chocolate and butter together.",
      "Mix in eggs and flour to form a batter.",
      "Bake at 425°F for 10-12 minutes until the edges are set but the center is still soft.",
    ],
  },
  {
    id: "10",
    name: "Avocado Toast",
    image: require("../../assets/images/burger3.png"),
    rating: "4.1",
    ingredients: ["Avocado", "Bread", "Olive Oil", "Lemon"],
    time: "10 mins",
    difficulty: "Easy",
    calories: "250 cal",
    color: "#16a085",
    description:
      "A simple yet delicious toast topped with mashed avocado and lemon.",
    steps: [
      "Toast the bread to your preferred crispness.",
      "Mash the avocado and mix with a little lemon juice and olive oil.",
      "Spread the avocado mixture on the toast and serve.",
    ],
  },
];
