import a1 from "./test/a1.jpg";
import a2 from "./test/a2.jpg";
import a3 from "./test/a3.jpg";
import a4 from "./test/a4.jpg";
import a5 from "./test/a5.jpg";
import b1 from "./test/b1.jpg";
import b2 from "./test/b2.jpg";
import b3 from "./test/b3.jpg";
import b4 from "./test/b4.jpg";
import b5 from "./test/b5.jpg";
import b6 from "./test/b6.jpg";
import b7 from "./test/b7.jpg";
import b8 from "./test/b8.jpg";
import b9 from "./test/b9.jpg";
import b10 from "./test/b10.jpg";
import b11 from "./test/b11.jpg";
import b12 from "./test/b12.jpg";
import b13 from "./test/b13.jpg";
import b14 from "./test/b14.jpg";
import b15 from "./test/b15.jpg";
import b16 from "./test/b16.jpg";
import b17 from "./test/b17.jpg";
import b18 from "./test/b18.jpg";
import b19 from "./test/b19.jpg";
import { StaticImageData } from "next/image";

export type EntryType = {
  id: number;
  title: string;
  size?: string[];
  description: string;
  price: string[] | string;
  category: string;
  url: string | StaticImageData;
};

export const cakes: EntryType[] = [
  {
    id: 1,
    title: "Strawberry Shortcake",
    size: ['7"', '8"'],
    description:
      "Soft sponge layered with fresh strawberries and whipped cream.",
    price: ["29.99", "34.99"],
    url: a1,
    category: "Fresh Cream Cake",
  },
  {
    id: 2,
    title: "Chocolate Mousse Cake",
    size: ['6"', '7"', '8"'],
    description: "Rich chocolate mousse layered with airy chocolate sponge.",
    price: ["32.99", "38.99", "42.99"],
    url: a2,
    category: "Mousse Cake",
  },
  {
    id: 3,
    title: "Unicorn Cream Cake",
    size: ['7"'],
    description: "Colorful unicorn-themed cake with pastel whipped cream.",
    price: ["45.99"],
    url: a3,
    category: "Character Cake",
  },
  {
    id: 4,
    title: "Blueberry Mousse Cake",
    size: ['6"', '8"'],
    description: "Airy blueberry mousse paired with vanilla sponge.",
    price: ["31.99", "37.99"],
    url: a4,
    category: "Mousse Cake",
  },
  {
    id: 5,
    title: "Red Velvet Cake",
    size: ['8"'],
    description: "Classic red velvet with rich cream cheese frosting.",
    price: ["42.99"],
    url: a5,
    category: "Special Cake",
  },
];

export const bread: EntryType[] = [
  {
    id: 1,
    title: "Strawberry Shortcake",
    size: ['7"', '8"'],
    description:
      "Soft sponge layered with fresh strawberries and whipped cream.",
    price: ["29.99", "34.99"],
    url: b1,
    category: "Fresh Cream Cake",
  },
  {
    id: 2,
    title: "Chocolate Mousse Cake",
    size: ['6"', '7"', '8"'],
    description: "Rich chocolate mousse layered with airy chocolate sponge.",
    price: ["32.99", "38.99", "42.99"],
    url: b2,
    category: "Mousse Cake",
  },
  {
    id: 3,
    title: "Unicorn Cream Cake",
    size: ['7"'],
    description: "Colorful unicorn-themed cake with pastel whipped cream.",
    price: ["45.99"],
    url: b3,
    category: "Character Cake",
  },
  {
    id: 4,
    title: "Blueberry Mousse Cake",
    size: ['6"', '8"'],
    description: "Airy blueberry mousse paired with vanilla sponge.",
    price: ["31.99", "37.99"],
    url: b4,
    category: "Mousse Cake",
  },
  {
    id: 5,
    title: "Red Velvet Cake",
    size: ['8"'],
    description: "Classic red velvet with rich cream cheese frosting.",
    price: ["42.99"],
    url: b5,
    category: "Special Cake",
  },
  {
    id: 6,
    title: "Matcha Slice Cake",
    size: ["Single"],
    description: "Matcha sponge slice with earthy matcha cream.",
    price: ["5.99"],
    url: b6,
    category: "Slice Cake",
  },
  {
    id: 7,
    title: "Mango Fresh Cream Cake",
    size: ['6"'],
    description: "Vanilla sponge with fresh mango and cream.",
    price: ["30.99"],
    url: b7,
    category: "Fresh Cream Cake",
  },
  {
    id: 8,
    title: "Car Race Chocolate Cake",
    size: ['7"', '8"'],
    description: "Race car–inspired chocolate birthday cake.",
    price: ["54.99", "64.99"],
    url: b8,
    category: "Character Cake",
  },
  {
    id: 9,
    title: "Tiramisu Mousse Cake",
    size: ['6"', '7"', '8"'],
    description: "Coffee-soaked sponge with mascarpone mousse.",
    price: ["33.99", "39.99", "42.99"],
    url: b9,
    category: "Mousse Cake",
  },
  {
    id: 10,
    title: "Cheesecake Slice",
    size: ["Single"],
    description: "Classic creamy cheesecake slice.",
    price: ["6.99"],
    url: b10,
    category: "Slice Cake",
  },
  {
    id: 11,
    title: "Grapes Fresh Cream Cake",
    size: ['7"'],
    description: "Light cream cake topped with seasonal grapes.",
    price: ["35.99"],
    url: b11,
    category: "Fresh Cream Cake",
  },
  {
    id: 12,
    title: "Milk Tea Mousse Cake",
    size: ['6"', '8"'],
    description: "Smooth milk tea mousse with tea-infused sponge.",
    price: ["32.99", "38.99"],
    url: b12,
    category: "Mousse Cake",
  },
  {
    id: 13,
    title: "Dinosaur Chocolate Cake",
    size: ['8"'],
    description: "Fun dinosaur-themed chocolate cake.",
    price: ["54.99"],
    url: b13,
    category: "Character Cake",
  },
  {
    id: 14,
    title: "New York Cheesecake",
    size: ['6"', '8"'],
    description: "Dense baked cheesecake with a graham crust.",
    price: ["35.99", "44.99"],
    url: b14,
    category: "Special Cake",
  },
  {
    id: 15,
    title: "Vanilla Custard Slice",
    size: ["Single"],
    description: "Soft sponge slice filled with vanilla custard.",
    price: ["5.49"],
    url: b15,
    category: "Slice Cake",
  },
  {
    id: 16,
    title: "Blueberry Fresh Cream Cake",
    size: ['6"', '7"', '8"'],
    description: "Fluffy sponge with blueberry compote and cream.",
    price: ["29.99", "34.99", "38.99"],
    url: b16,
    category: "Fresh Cream Cake",
  },
  {
    id: 17,
    title: "Princess Strawberry Cake",
    size: ['7"'],
    description: "Strawberry cake decorated with princess toppers.",
    price: ["56.99"],
    url: b17,
    category: "Character Cake",
  },
  {
    id: 18,
    title: "Chocolate Ganache Cake",
    size: ['6"', '7"', '8"'],
    description: "Deep chocolate sponge covered in silky ganache.",
    price: ["35.99", "40.99", "45.99"],
    url: b18,
    category: "Special Cake",
  },
  {
    id: 19,
    title: "Triple Chocolate Cake",
    size: ['8"'],
    description: "Layers of milk, dark, and white chocolate.",
    price: ["45.99"],
    url: b19,
    category: "Special Cake",
  },
];
