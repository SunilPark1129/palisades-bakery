import a1 from "./test/a1.jpg";
import a2 from "./test/a2.jpg";
import a3 from "./test/a3.jpg";
import a4 from "./test/a4.jpg";
import a5 from "./test/a5.jpg";
import a11 from "./test/a1.jpg";
import a22 from "./test/a2.jpg";
import a33 from "./test/a3.jpg";
import a44 from "./test/a4.jpg";
import a55 from "./test/a5.jpg";
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
import aa from "./test/45.png";
import bb from "./test/11.png";
import cc from "./test/33.png";
import dd from "./test/49.png";
import ee from "./test/52.png";
import ff from "./test/50.png";
import gg from "./test/51.png";
import hh from "./test/20.png";
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
  // {
  //   id: 6,
  //   title: "Strawberry Shortcake",
  //   size: ['7"', '8"'],
  //   description:
  //     "Soft sponge layered with fresh strawberries and whipped cream.",
  //   price: ["29.99", "34.99"],
  //   url: a11,
  //   category: "Fresh Cream Cake",
  // },
  // {
  //   id: 7,
  //   title: "Chocolate Mousse Cake",
  //   size: ['6"', '7"', '8"'],
  //   description: "Rich chocolate mousse layered with airy chocolate sponge.",
  //   price: ["32.99", "38.99", "42.99"],
  //   url: a22,
  //   category: "Mousse Cake",
  // },
  // {
  //   id: 8,
  //   title: "Unicorn Cream Cake",
  //   size: ['7"'],
  //   description: "Colorful unicorn-themed cake with pastel whipped cream.",
  //   price: ["45.99"],
  //   url: a33,
  //   category: "Character Cake",
  // },
  // {
  //   id: 9,
  //   title: "Blueberry Mousse Cake",
  //   size: ['6"', '8"'],
  //   description: "Airy blueberry mousse paired with vanilla sponge.",
  //   price: ["31.99", "37.99"],
  //   url: a44,
  //   category: "Mousse Cake",
  // },
  // {
  //   id: 10,
  //   title: "Red Velvet Cake",
  //   size: ['8"'],
  //   description: "Classic red velvet with rich cream cheese frosting.",
  //   price: ["42.99"],
  //   url: a55,
  //   category: "Special Cake",
  // },
];

export const bread: EntryType[] = [
  {
    id: 1,
    title: "Apple Turnovers",
    description:
      "A flaky, buttery pastry filled with sweet, cinnamon-spiced apple filling and baked to a golden crisp.",
    price: ["3.50"],
    url: b1,
    category: "Bread",
  },
  {
    id: 2,
    title: "Apple Danish",
    description:
      "A soft pastry with a center infused with sweet apple filling and baked until lightly golden.",
    price: ["5.00"],
    url: dd,
    category: "Bread",
  },
  {
    id: 3,
    title: "Blueberry Danish",
    description:
      "A soft pastry with a center infused with sweet blueberry filling and baked until lightly golden.",
    price: ["5.00"],
    url: hh,
    category: "Bread",
  },
  {
    id: 4,
    title: "Cherry Danish",
    description:
      "A soft pastry with a center infused with sweet cherry filling and baked until lightly golden.",
    price: ["5.00"],
    url: ff,
    category: "Bread",
  },
  {
    id: 5,
    title: "Cheese Danish",
    description:
      "A soft pastry centered with a smooth, lightly sweetened cream cheese mixture and baked until light golden.",
    price: ["5.00"],
    url: gg,
    category: "Bread",
  },
  {
    id: 6,
    title: "Pecan Danish",
    description:
      "A golden, flaky pastry topped with chopped pecans and finished with a drizzle of sweet icing for a rich, nutty crunch.",
    price: ["5.00"],
    url: bb,
    category: "Bread",
  },
  {
    id: 7,
    title: "Chocolate Danish",
    description:
      "A golden, flaky pastry finished with a drizzle of rich chocolate on top.",
    price: ["4.00"],
    url: aa,
    category: "Bread",
  },
  {
    id: 8,
    title: "Plain Croissant",
    description:
      "A light, buttery pastry with delicate, flaky layers and a crisp golden exterior.",
    price: ["4.00"],
    url: cc,
    category: "Bread",
  },
  {
    id: 9,
    title: "Plain Croissant",
    description:
      "A light, buttery pastry with delicate, flaky layers and a crisp golden exterior.",
    price: ["4.00"],
    url: ee,
    category: "Bread",
  },
  {
    id: 10,
    title: "Cream Croissant",
    description:
      "A flaky, buttery croissant generously filled with smooth whipped cream and fresh strawberries, dusted with powdered sugar.",
    price: ["5.00"],
    url: b10,
    category: "Bread",
  },
  {
    id: 11,
    title: "Cream Croissant",
    description:
      "A flaky, buttery croissant generously filled with smooth whipped cream and fresh strawberries, dusted with powdered sugar.",
    price: ["5.00"],
    url: b11,
    category: "Bread",
  },
  {
    id: 12,
    title: "Pearl Salt Bread",
    description:
      "Soft bread roll with rich butter flavor inside, topped with coarse salt crystals.",
    price: ["3.00"],
    url: b12,
    category: "Bread",
  },
  {
    id: 13,
    title: "Mocha Salt Bread",
    description:
      "Soft bread roll with sweet mocha crust, finished with savory sea salt crystals.",
    price: ["3.00"],
    url: b13,
    category: "Bread",
  },
  {
    id: 14,
    title: "Garlic Salt Bread",
    description:
      "Soft bread roll with garlic-butter glaze, topped with coarse sea salt and dried parsley.",
    price: ["4.00"],
    url: b14,
    category: "Bread",
  },
  {
    id: 15,
    title: "Melon Soboro Bread",
    description: "Sweet, soft bread, finished with a crunchy, crumbly topping.",
    price: ["3.50"],
    url: b15,
    category: "Bread",
  },
  {
    id: 16,
    title: "Boston Donuts",
    description:
      "Donut with rich chocolate glaze topping, filled with a smooth vanilla custard cream.",
    price: ["2.75"],
    url: b16,
    category: "Bread",
  },
  {
    id: 17,
    title: "Powder Cream Donuts",
    description: "Donut with sweet flavor, coated in fine powdered sugar.",
    price: ["2.75"],
    url: b17,
    category: "Bread",
  },
  {
    id: 18,
    title: "Apple Strudel",
    description:
      "Flaky, laminated pastry dough, sweet spiced apple filling, finished with a dusting of granulated sugar.",
    price: ["19.00"],
    url: b18,
    category: "Bread",
  },
  {
    id: 19,
    title: "Apple Square Pastry",
    description:
      "Flaky, puff pastry dough, rich apple filling with a hint of cinnamon, finished with a sweet glaze or powdered sugar.",
    price: ["5.00"],
    url: b19,
    category: "Bread",
  },
  {
    id: 20,
    title: "Apple Strudel",
    description:
      "Flaky, laminated pastry dough, sweet spiced apple filling, finished with a dusting of granulated sugar.",
    price: ["19.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 21,
    title: "Pecan Custard",
    description:
      "Flaky, buttery Danish dough, creamy vanilla custard filling, topped with chopped pecans and a sweet white glaze.",
    price: ["20.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 22,
    title: "Chocolate Crumb Roll",
    description:
      "Soft, elongated yeast roll, a dark chocolate filling, covered in a sweet streusel crumb and dark chocolate drizzle.",
    price: ["4.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 23,
    title: "Taiwanese Castella",
    description:
      "Light, airy sponge cake dough, simple sweet flavor (often honey or vanilla), typically served without filling or topping.",
    price: ["10.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 24,
    title: "Biscotti Almond",
    description:
      "Crisp, oblong, twice-baked cookie, generously packed with toasted almond slices, often finished with a light sugar coating.",
    price: ["6.00"],
    url: b1,
    category: "Bread",
  },
];
