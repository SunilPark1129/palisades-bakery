export type DishType = {
  id: number;
  title: string;
  koTitle: string;
  description: string;
  price: string;
  category: string;
};

export const brunch: DishType[] = [
  {
    id: 1,
    title: "American Breakfast Platter",
    koTitle: "아메리칸 스타일",
    description: "Scrambled Eggs, Bacon, Sausage, Hash Browns, and Pancakes",
    price: "19.99",
    category: "Brunch",
  },
  {
    id: 2,
    title: "Crème Brûlée French Toast",
    koTitle: "프렌치 토스트",
    description: "Mixed Berries & Whipped Cream",
    price: "17.99",
    category: "Brunch",
  },
  {
    id: 3,
    title: "Omelette",
    koTitle: "오믈렛",
    description:
      "Broccoli, Mushrooms, Bell Peppers, Green Beans, Zucchini, Sliced Onions",
    price: "18.99",
    category: "Brunch",
  },
  {
    id: 4,
    title: "Avocado Toast Tartine",
    koTitle: "아보카도 토스트 타르틴",
    description: "Sliced Avocados, Cherry Tomatoes, Arugula, Soft Boiled Egg",
    price: "18.99",
    category: "Brunch",
  },
  {
    id: 5,
    title: "Pesto Mozarella Cheese Tartine",
    koTitle: "페스토 모짜렐라 치즈 타르틴",
    description:
      "Fresh Mozarella Cheese, Pesto Sauce, Sundried Tomatoes, Soft Boiled Egg",
    price: "18.99",
    category: "Brunch",
  },
  {
    id: 6,
    title: "Mushroom & Spinach Tartine",
    koTitle: "버섯 시금치 타르틴",
    description: "Cremini Mushroom, Spinach Red Onion, Soft Boiled Egg",
    price: "18.99",
    category: "Brunch",
  },
  {
    id: 7,
    title: "Eggs Benedict",
    koTitle: "에그 베네딕트",
    description:
      "Canadian Bacon, Tomatoes, Avocados, Pocahed Egg w/ Hollandaise Sauce",
    price: "19.99",
    category: "Brunch",
  },
  {
    id: 8,
    title: "Eggs Florentine",
    koTitle: "에그 플로렌틴",
    description:
      "Spinach, Tomatoes, Avocados, Poached Egg w/ Hollandaise Sauce",
    price: "19.99",
    category: "Brunch",
  },
  {
    id: 9,
    title: "Eggs Royale [Smoked Salmon]",
    koTitle: "에그 로얄 [훈제 연어]",
    description:
      "Smoked Salmon, Poached Egg, Tomatoes, Avocados, Hollandaise Sauce",
    price: "21.99",
    category: "Brunch",
  },
  {
    id: 10,
    title: "Chicken Caesar Wraps",
    koTitle: "치킨 시져 랩",
    description:
      "Grilled Chicken, Romaine Lettuce, Cherry Tomatoes, Garlic Gruton, Caesar Dressing",
    price: "18.99",
    category: "Brunch",
  },
];

export const sandwich: DishType[] = [
  {
    id: 1,
    title: "Smashed Cheeseburger on Brioche",
    koTitle: "치즈버거",
    description:
      "Ground Beef, American Cheese, Onions, Pickles, Tomatoes, Lettuce, House Dressing",
    price: "16.99",
    category: "Sandwich",
  },
  {
    id: 2,
    title: "K - Style Egg Sandwich",
    koTitle: "한국식 계란 샌드위치",
    description: "Eggs, Lettuce, Tomatoes, Pickled Jalapeño",
    price: "12.99",
    category: "Sandwich",
  },
  {
    id: 3,
    title: "Chicken Salad & Avocado on Brioche",
    koTitle: "치킨 샐러드 샌드위치",
    description:
      "Grilled Chicken Breast, Red Onions, Celery, Raisins, Mayo, and Arugula on Brioche",
    price: "14.99",
    category: "Sandwich",
  },
  {
    id: 4,
    title: "Tuna Salad on Brioche",
    koTitle: "참치 샐러드 샌드위치",
    description: "Tuna, Onions, Celery, and Tomatoes on Brioche",
    price: "14.99",
    category: "Sandwich",
  },
  {
    id: 5,
    title: "Egg Salad & Arugula on Brioche",
    koTitle: "계란 샐러드 샌드위치",
    description: "Hard Boiled Eggs, Honey Mustard Mayo, and Arugula on Brioche",
    price: "14.99",
    category: "Sandwich",
  },
  {
    id: 6,
    title: "Ham & Cheese on Croissant Sandwich",
    koTitle: "햄&치즈 크로왕상 샌드위치",
    description:
      "Smoked Ham, American Cheese, Cucumbers, Tomatoes, Lettuce, and Mayo on Croissant",
    price: "14.99",
    category: "Sandwich",
  },
  {
    id: 7,
    title: "Turkey Club Sandwich",
    koTitle: "터키 클럽 샌드위치",
    description: "Turkey, Bacon, Mayo, Tomatoes, and Lettuce on Bread",
    price: "15.99",
    category: "Sandwich",
  },
  {
    id: 8,
    title: "Grilled Chicken Hero Sandwich",
    koTitle: "치킨 히로 샌드위치",
    description:
      "Grilled Chicken, Cucumber, Red Onion, Pickled Jalapeño, Tomatoes, Lettuce",
    price: "19.99",
    category: "Sandwich",
  },
];

export const pizza: DishType[] = [
  {
    id: 1,
    title: "Margherita Pizza",
    koTitle: "마르게리타 피자",
    description: "",
    price: "15.99",
    category: "Pizza",
  },
  {
    id: 2,
    title: "Pepperoni Pizza",
    koTitle: "페파로니 피자",
    description: "",
    price: "16.99",
    category: "Pizza",
  },
  {
    id: 3,
    title: "Gorgonzola Pizza",
    koTitle: "고르곤졸라치즈 피자",
    description: "",
    price: "18.99",
    category: "Pizza",
  },
];

export const pastaAndSteak: DishType[] = [
  {
    id: 1,
    title: "Aglio Olio",
    koTitle: "알리오 올리오",
    description: "Sliced Garlic, Chopped Parsley, Extra Virgin Olio Oil",
    price: "18.99",
    category: "Pasta And Steak",
  },
  {
    id: 2,
    title: "Carbonara",
    koTitle: "까르보나라",
    description: "Bacon, Egg Yolk in Cream Sauce",
    price: "18.99",
    category: "Pasta And Steak",
  },
  {
    id: 3,
    title: "Spicy Seafood Tomatoes",
    koTitle: "매운 해산물 파스타",
    description: "Shrimp, Squid, Littleneck Clams in Spicy Tomato sauce",
    price: "24.99",
    category: "Pasta And Steak",
  },
  {
    id: 4,
    title: "Vongole",
    koTitle: "봉골레 파스타",
    description: "Littleneck Clams in White Wine Sauce",
    price: "23.99",
    category: "Pasta And Steak",
  },
  {
    id: 5,
    title: "Shrimp & Pollack Roe",
    koTitle: "명란 새우 크림 파스타",
    description:
      "Pollack Roe, Shrimp, Garlic, Zucchini, Green Beans in Garlic Sauce",
    price: "26.99",
    category: "Pasta And Steak",
  },
  {
    id: 6,
    title: "Mushroom & Steak",
    koTitle: "안심 스테이크 크림 파스타",
    description:
      "Cremini Mushrooms, Tenderloin Steak in Truffle Flavored Cream Sauce",
    price: "29.99",
    category: "Pasta And Steak",
  },
  {
    id: 7,
    title: "Seafood Pasta (Cream or Tomato Sauce)",
    koTitle: "해산물 파스타 (크림 or 토마토)",
    description: "Shrimp, Squid, Littleneck Clams in Cream or Tomato Sauce",
    price: "24.99",
    category: "Pasta And Steak",
  },
  {
    id: 8,
    title: "Grilled Chicken & Mushroom Risotto",
    koTitle: "치킨 리조또",
    description:
      "Grilled Cihcken, Cremini Mushrooms, Truffle flavored Parmesan Cheese Cream Sauce",
    price: "24.99",
    category: "Pasta And Steak",
  },
  {
    id: 9,
    title: "Seafood Risotto",
    koTitle: "해산물 리조또",
    description: "Shrimp, Squid, Littleneck Clams in Rose Sauce",
    price: "24.99",
    category: "Pasta And Steak",
  },
  {
    id: 10,
    title: "Lamb Chop",
    koTitle: "양갈비 구이",
    description: "Coucous, Spinach in Red Wine Reduction",
    price: "39.99",
    category: "Pasta And Steak",
  },
  {
    id: 11,
    title: "Angus Filet Mignon",
    koTitle: "안심 스태이크",
    description:
      "Mashed Yukon Gold Potatoes, Sauteed Broccoli in Balsamic Red Wine Sauce",
    price: "44.99",
    category: "Pasta And Steak",
  },
];

export const salad: DishType[] = [
  {
    id: 1,
    title: "House Garden Salad",
    koTitle: "하우스 샐러드",
    description:
      "Grilled Chicken Breast, Avocado, Cherry Tomatoes, Paprika, Cucumber, Mixed Green, Red Onion, Balsamic Dressing",
    price: "18.99",
    category: "Salad",
  },
  {
    id: 2,
    title: "Farro Salad",
    koTitle: "파로 샐러드",
    description:
      "Farro, Chick Pea, Black Olives, Red Onion, Corn, Cherry Tomatoes, Mini Paprika, Feta Cheese, Lemon Oregano Dressing",
    price: "18.99",
    category: "Salad",
  },
  {
    id: 3,
    title: "Chicken Caesar Salad",
    koTitle: "치킨시저 샐러드",
    description:
      "Grilled Chicken, Romaine Lettuce, Cherry Tomatoes, Garlic Gruton, Caesar Dressing",
    price: "18.99",
    category: "Salad",
  },
  {
    id: 4,
    title: "Spicy Shrimp w/ Quinoa Salad",
    koTitle: "매콤한 새우 샐러드",
    description:
      "Spicy Shrimp, Arugula, Shallot, Tomatoes, Pine Nuts, Avocados, Champagne Vinaigrette",
    price: "19.99",
    category: "Salad",
  },
  {
    id: 5,
    title: "Beet Salad",
    koTitle: "비트 샐러드",
    description:
      "Roasted Beet, Goat Cheese, Arugula, Toasted Almond Raisins, Tomatoes, Mini Paprika, Balsamic Dressing",
    price: "18.99",
    category: "Salad",
  },
];

export const soup: DishType[] = [
  {
    id: 1,
    title: "Beef and Vegetable",
    koTitle: "",
    description: "",
    price: "9.99",
    category: "Soup",
  },
  {
    id: 2,
    title: "Potato and Leeks",
    koTitle: "",
    description: "",
    price: "8.99",
    category: "Soup",
  },
  {
    id: 3,
    title: "Cream of Broccoli",
    koTitle: "",
    description: "",
    price: "8.99",
    category: "Soup",
  },
  {
    id: 4,
    title: "Minestrone",
    koTitle: "",
    description: "",
    price: "8.99",
    category: "Soup",
  },
];

export const side: DishType[] = [
  {
    id: 1,
    title: "Extra Noodles",
    koTitle: "",
    description: "",
    price: "3.50",
    category: "Side Order",
  },
  {
    id: 2,
    title: "Bacons",
    koTitle: "",
    description: "",
    price: "3.50",
    category: "Side Order",
  },
  {
    id: 3,
    title: "Sausages",
    koTitle: "",
    description: "",
    price: "3.50",
    category: "Side Order",
  },
  {
    id: 4,
    title: "Two Eggs",
    koTitle: "",
    description: "",
    price: "5.00",
    category: "Side Order",
  },
  {
    id: 5,
    title: "Grilled Chicken Breast",
    koTitle: "",
    description: "",
    price: "5.00",
    category: "Side Order",
  },
  {
    id: 6,
    title: "French Fries",
    koTitle: "",
    description: "",
    price: "8.00",
    category: "Side Order",
  },
  {
    id: 7,
    title: "Quinoa",
    koTitle: "",
    description: "",
    price: "3.50",
    category: "Side Order",
  },
  {
    id: 8,
    title: "Avocado",
    koTitle: "",
    description: "",
    price: "5.00",
    category: "Side Order",
  },
  {
    id: 9,
    title: "Shrimp",
    koTitle: "",
    description: "",
    price: "5.00",
    category: "Side Order",
  },
];
