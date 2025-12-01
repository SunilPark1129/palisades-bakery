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
import b1 from "./test/b1.png";
import b2 from "./test/b2.png";
import b3 from "./test/b3.png";
import b4 from "./test/b4.png";
import b5 from "./test/b5.png";
import b6 from "./test/b6.png";
import b7 from "./test/b7.png";
import b8 from "./test/b8.png";
import b9 from "./test/b9.png";
import b10 from "./test/b10.png";
import b11 from "./test/b11.png";
import b12 from "./test/b12.png";
import b13 from "./test/b13.png";
import b14 from "./test/b14.png";
import b15 from "./test/b15.png";
import b16 from "./test/b16.png";
import b17 from "./test/b17.png";
import b18 from "./test/b18.png";
import b19 from "./test/b19.png";
import b20 from "./test/b20.png";
import b21 from "./test/b21.png";
import b22 from "./test/b22.png";
import b23 from "./test/b23.png";
import b24 from "./test/b24.png";
import b25 from "./test/b25.png";
import b26 from "./test/b26.png";
import b27 from "./test/b27.png";
import b28 from "./test/b28.png";
import b29 from "./test/b29.png";
import b30 from "./test/b30.png";
import b31 from "./test/b31.png";
import b32 from "./test/b32.png";
import b33 from "./test/b33.png";
import b34 from "./test/b34.png";
import b35 from "./test/b35.png";
import b36 from "./test/b36.png";
import b37 from "./test/b37.png";
import b38 from "./test/b38.png";
import b39 from "./test/b39.png";
import b40 from "./test/b40.png";
import b41 from "./test/b41.png";

import c1 from "./test/c1.png";
import c2 from "./test/c2.png";
import c3 from "./test/c3.png";
import c4 from "./test/c4.png";
import c5 from "./test/c5.png";
import c6 from "./test/c6.png";
import c7 from "./test/c7.png";
import c8 from "./test/c8.png";
import c9 from "./test/c9.png";
import c10 from "./test/c10.png";
import c11 from "./test/c11.png";

import d1 from "./test/d1.png";
import d2 from "./test/d2.png";
import d3 from "./test/d3.png";
import d4 from "./test/d4.png";
import d5 from "./test/d5.png";
import d6 from "./test/d6.png";
import d7 from "./test/d7.png";
import d8 from "./test/d8.png";
import d9 from "./test/d9.png";
import d10 from "./test/d10.png";

import { StaticImageData } from "next/image";

export type EntryType = {
  id: number;
  title: string;
  size?: string[];
  description: string;
  price: string[] | string;
  category: string;
  url: StaticImageData;
};

export const cakes: EntryType[] = [
  {
    id: 1,
    title: "Strawberry Cake",
    size: ['6"', '8"'],
    description:
      "A light, fluffy cake layered with sweet strawberry cream and fresh strawberry slices.",
    price: ["38.00", "47.00"],
    url: a3,
    category: "Fresh Cream Cake",
  },
  {
    id: 2,
    title: "Blueberry Cake",
    size: ['6"', '8"'],
    description:
      "A soft, airy cake layered with sweet blueberry cream and studded with fresh blueberries.",
    price: ["38.00", "47.00"],
    url: a1,
    category: "Mousse Cake",
  },
  {
    id: 3,
    title: "Mango Cake",
    size: ['6"', '8"'],
    description:
      "A light, fluffy cake layered with creamy mango filling and topped with juicy mango pieces.",
    price: ["38.00", "47.00"],
    url: a4,
    category: "Character Cake",
  },
  {
    id: 4,
    title: "Chocolate Strawberry Cake",
    size: ['6"', '8"'],
    description:
      "A rich chocolate cake layered with sweet strawberry cream and fresh strawberry slices.",
    price: ["38.00", "47.00"],
    url: a5,
    category: "Mousse Cake",
  },
  {
    id: 5,
    title: "Lotus Mocha Cake",
    size: ['6"', '8"'],
    description:
      "A moist mocha-flavored cake layered with creamy Lotus Biscoff spread and light coffee cream.",
    price: ["38.00", "47.00"],
    url: a2,
    category: "Special Cake",
  },
  {
    id: 6,
    title: "Original Cheesecake",
    description:
      "A rich and smooth classic cheesecake with a buttery graham cracker crust.",
    price: ["20.00"],
    url: c1,
    category: "Special Cake",
  },
  {
    id: 7,
    title: "Strawberry Cheesecake",
    description:
      "A creamy cheesecake topped with sweet strawberry sauce and fresh strawberry slices.",
    price: ["30.00"],
    url: c2,
    category: "Special Cake",
  },
  {
    id: 8,
    title: "7 Layer Cake",
    description:
      "A seven-layer cake with alternating chocolate cream and vanilla sponge layers for a rich and creamy flavor combination.",
    price: ["19.00"],
    url: c3,
    category: "Special Cake",
  },
  {
    id: 9,
    title: "Regular Roll Cake",
    description:
      "A soft, fluffy sponge cake rolled with light, sweet cream for a classic treat.",
    price: ["12.00"],
    url: c4,
    category: "Special Cake",
  },
  {
    id: 10,
    title: "Mocha Roll Cake",
    description:
      "A tender sponge cake infused with mocha flavor and rolled with smooth coffee cream.",
    price: ["12.00"],
    url: c5,
    category: "Special Cake",
  },
  {
    id: 11,
    title: "Green Tea Roll Cake",
    description:
      "A soft green tea-flavored sponge cake rolled with sweet, creamy filling for a delicate taste.",
    price: ["12.00"],
    url: c6,
    category: "Special Cake",
  },
  {
    id: 12,
    title: "Strawberry Slice",
    description:
      "A light, fluffy cake slice layered with sweet strawberry cream and fresh strawberry pieces.",
    price: ["8.00"],
    url: c7,
    category: "Special Cake",
  },
  {
    id: 13,
    title: "Blueberry Slice",
    description:
      "A soft cake slice layered with blueberry cream and dotted with juicy blueberries.",
    price: ["8.00"],
    url: c8,
    category: "Special Cake",
  },
  {
    id: 14,
    title: "Chocolate Strawberry Slice",
    description:
      "A rich chocolate cake slice layered with sweet strawberry cream and fresh strawberries.",
    price: ["8.00"],
    url: c9,
    category: "Special Cake",
  },
  {
    id: 15,
    title: "Lotus Mocha Slice",
    description:
      "A moist mocha-flavored cake slice layered with creamy Lotus Biscoff spread and coffee cream.",
    price: ["8.00"],
    url: c10,
    category: "Special Cake",
  },
  {
    id: 16,
    title: "Black Sesame Slice",
    description:
      "A tender cake slice infused with nutty black sesame flavor and a smooth, subtly sweet cream.",
    price: ["8.00"],
    url: c11,
    category: "Special Cake",
  },
  {
    id: 17,
    title: "Cheesecake Slice",
    description:
      "A creamy, rich cheesecake slice with a buttery graham cracker crust for a classic indulgence.",
    price: ["8.00"],
    url: a3,
    category: "Special Cake",
  },
  {
    id: 18,
    title: "Strawberry Squared Short Cake",
    description:
      "A light sponge cake layered with sweet cream and fresh strawberries in a convenient square portion.",
    price: ["8.00"],
    url: a3,
    category: "Special Cake",
  },
  {
    id: 19,
    title: "Carrot Sqaured Cake",
    description:
      "A moist, spiced cake with grated carrots and nuts, topped with creamy frosting.",
    price: ["8.00"],
    url: a3,
    category: "Special Cake",
  },
  {
    id: 20,
    title: "Chocolate Squared Mousse Cake",
    description:
      "A rich chocolate cake layered with smooth, airy chocolate mousse for a decadent bite.",
    price: ["8.00"],
    url: a3,
    category: "Special Cake",
  },
  {
    id: 21,
    title: "Napolean Squared Cake",
    description:
      "A crisp, flaky pastry layered with sweet cream for a classic, delicate dessert.",
    price: ["8.00"],
    url: a3,
    category: "Special Cake",
  },
  {
    id: 22,
    title: "Tres Leches Squared Cake",
    description:
      "A soft sponge cake soaked in three kinds of milk, topped with light whipped cream for a moist, sweet treat.",
    price: ["8.00"],
    url: a3,
    category: "Special Cake",
  },
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
    url: b2,
    category: "Bread",
  },
  {
    id: 3,
    title: "Blueberry Danish",
    description:
      "A soft pastry with a center infused with sweet blueberry filling and baked until lightly golden.",
    price: ["5.00"],
    url: b3,
    category: "Bread",
  },
  {
    id: 4,
    title: "Cherry Danish",
    description:
      "A soft pastry with a center infused with sweet cherry filling and baked until lightly golden.",
    price: ["5.00"],
    url: b4,
    category: "Bread",
  },
  {
    id: 5,
    title: "Cheese Danish",
    description:
      "A soft pastry centered with a smooth, lightly sweetened cream cheese mixture and baked until light golden.",
    price: ["5.00"],
    url: b5,
    category: "Bread",
  },
  {
    id: 6,
    title: "Pecan Danish",
    description:
      "A golden, flaky pastry topped with chopped pecans and finished with a drizzle of sweet icing for a rich, nutty crunch.",
    price: ["5.00"],
    url: b6,
    category: "Bread",
  },
  {
    id: 7,
    title: "Chocolate Danish",
    description:
      "A golden, flaky pastry finished with a drizzle of rich chocolate on top.",
    price: ["4.00"],
    url: b7,
    category: "Bread",
  },

  {
    id: 8,
    title: "Plain Croissant",
    description:
      "A light, buttery pastry with delicate, flaky layers and a crisp golden exterior.",
    price: ["4.00"],
    url: b8,
    category: "Bread",
  },
  {
    id: 9,
    title: "Plain Croissant",
    description:
      "A light, buttery pastry with delicate, flaky layers and a crisp golden exterior.",
    price: ["4.00"],
    url: b9,
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
    title: "Twisted Donut",
    description:
      "A light, buttery pastry with delicate, flaky layers and a crisp golden exterior.",
    price: ["2.75"],
    url: b12,
    category: "Bread",
  },
  {
    id: 13,
    title: "Pearl Salt Bread",
    description:
      "Soft bread roll with rich butter flavor inside, topped with coarse salt crystals.",
    price: ["3.00"],
    url: b13,
    category: "Bread",
  },
  {
    id: 14,
    title: "Mocha Salt Bread",
    description:
      "Soft bread roll with sweet mocha crust, finished with savory sea salt crystals.",
    price: ["3.00"],
    url: b14,
    category: "Bread",
  },
  {
    id: 15,
    title: "Garlic Salt Bread",
    description:
      "Soft bread roll with garlic-butter glaze, topped with coarse sea salt and dried parsley.",
    price: ["4.00"],
    url: b15,
    category: "Bread",
  },
  {
    id: 16,
    title: "Melon Soboro Bread",
    description: "Sweet, soft bread, finished with a crunchy, crumbly topping.",
    price: ["3.50"],
    url: b16,
    category: "Bread",
  },
  {
    id: 17,
    title: "Boston Donut",
    description:
      "Donut with rich chocolate glaze topping, filled with a smooth vanilla custard cream.",
    price: ["2.75"],
    url: b17,
    category: "Bread",
  },
  {
    id: 18,
    title: "Powder Cream Donut",
    description: "Donut with sweet flavor, coated in fine powdered sugar.",
    price: ["2.75"],
    url: b18,
    category: "Bread",
  },
  {
    id: 19,
    title: "Jelly Donut",
    description:
      "A soft, fluffy donut filled with sweet fruit jelly and dusted lightly with sugar.",
    price: ["2.75"],
    url: b19,
    category: "Bread",
  },
  {
    id: 20,
    title: "Apple Square Pastry",
    description:
      "Flaky, pu  ff pastry dough, rich apple filling with a hint of cinnamon, finished with a sweet glaze or powdered sugar.",
    price: ["5.00"],
    url: b20,
    category: "Bread",
  },
  {
    id: 21,
    title: "Apple Strudel",
    description:
      "Flaky, laminated pastry dough, sweet spiced apple filling, finished with a dusting of granulated sugar.",
    price: ["19.00"],
    url: b21,
    category: "Bread",
  },
  {
    id: 22,
    title: "Pecan Custard",
    description:
      "Flaky, buttery Danish dough, creamy vanilla custard filling, topped with chopped pecans and a sweet white glaze.",
    price: ["20.00"],
    url: b22,
    category: "Bread",
  },
  {
    id: 23,
    title: "Chocolate Crumb Roll",
    description:
      "Soft, elongated yeast roll, a dark chocolate filling, covered in a sweet streusel crumb and dark chocolate drizzle.",
    price: ["4.00"],
    url: b23,
    category: "Bread",
  },
  {
    id: 24,
    title: "Taiwanese Castella",
    description:
      "A soft, fluffy sponge cake with a moist, tender crumb and a delicate honey sweetness.",
    price: ["10.00"],
    url: b24,
    category: "Bread",
  },
  {
    id: 25,
    title: "Sweet Rice Donut",
    description:
      "A chewy, lightly sweet donut made from glutinous rice flour with a crisp golden exterior.",
    price: ["2.75"],
    url: b25,
    category: "Bread",
  },
  {
    id: 26,
    title: "Read Bean Donut",
    description:
      "A soft, golden donut filled with sweet, velvety red bean paste for a classic Korean bakery flavor.",
    price: ["3.50"],
    url: b26,
    category: "Bread",
  },
  {
    id: 27,
    title: "Mocha Bread",
    description:
      "A soft, fluffy bread infused with rich mocha flavor and a lightly sweet coffee aroma.",
    price: ["5.00"],
    url: b27,
    category: "Bread",
  },
  {
    id: 28,
    title: "Cream Mocha Bread",
    description:
      "A soft, mocha-flavored bread filled with smooth, sweet cream and a gentle coffee aroma.",
    price: ["6.00"],
    url: b28,
    category: "Bread",
  },
  {
    id: 29,
    title: "Biscotti Almond",
    description:
      "Crisp, oblong, twice-baked cookie, generously packed with toasted almond slices, often finished with a light sugar coating.",
    price: ["6.00"],
    url: b29,
    category: "Bread",
  },
  {
    id: 30,
    title: "Biscotti Almond",
    description:
      "Crisp, oblong, twice-baked cookie, generously packed with toasted almond slices, often finished with a light sugar coating.",
    price: ["6.00"],
    url: b30,
    category: "Bread",
  },
  {
    id: 31,
    title: "Biscotti Almond",
    description:
      "Crisp, oblong, twice-baked cookie, generously packed with toasted almond slices, often finished with a light sugar coating.",
    price: ["6.00"],
    url: b31,
    category: "Bread",
  },
  {
    id: 32,
    title: "Biscotti Almond",
    description:
      "Crisp, oblong, twice-baked cookie, generously packed with toasted almond slices, often finished with a light sugar coating.",
    price: ["6.00"],
    url: b32,
    category: "Bread",
  },
  {
    id: 33,
    title: "Biscotti Almond",
    description:
      "Crisp, oblong, twice-baked cookie, generously packed with toasted almond slices, often finished with a light sugar coating.",
    price: ["6.00"],
    url: b33,
    category: "Bread",
  },
  {
    id: 34,
    title: "Biscotti Almond",
    description:
      "Crisp, oblong, twice-baked cookie, generously packed with toasted almond slices, often finished with a light sugar coating.",
    price: ["6.00"],
    url: b34,
    category: "Bread",
  },
  {
    id: 35,
    title: "Cream Bun",
    description:
      "A soft, pillowy bun filled with light, sweet whipped cream for a simple, classic treat.",
    price: ["3.50"],
    url: b35,
    category: "Bread",
  },
  {
    id: 36,
    title: "Walnut & Raisin Pastry",
    description:
      "A flaky, golden pastry studded with crunchy walnuts and sweet raisins for a rich, hearty bite.",
    price: ["4.00"],
    url: b36,
    category: "Bread",
  },
  {
    id: 37,
    title: "Koroke",
    description:
      "A crispy, golden croquette filled with creamy mashed potatoes and savory meat or vegetables.",
    price: ["4.00"],
    url: b37,
    category: "Bread",
  },
  {
    id: 38,
    title: "Sausage Bread",
    description:
      "A soft, fluffy bread wrapped around a savory sausage, often brushed with a light glaze.",
    price: ["3.00"],
    url: b38,
    category: "Bread",
  },
  {
    id: 39,
    title: "Sliced Plain Pound Cake",
    description:
      "A moist, buttery pound cake with a fine, tender crumb, sliced for easy serving.",
    price: ["2.00"],
    url: b39,
    category: "Bread",
  },
  {
    id: 40,
    title: "Sliced Marble Pound Cake",
    description:
      "A moist, tender pound cake with a swirl of chocolate and vanilla creating a marbled pattern.",
    price: ["2.00"],
    url: b40,
    category: "Bread",
  },
  {
    id: 41,
    title: "Corn Bread",
    description:
      "A soft, slightly sweet bread made with cornmeal for a tender, golden loaf.",
    price: ["3.00"],
    url: b41,
    category: "Bread",
  },
  {
    id: 42,
    title: "Banana Nuts Pound Cake",
    description:
      "A moist pound cake studded with ripe bananas and crunchy nuts for a rich, flavorful treat.",
    price: ["8.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 43,
    title: "Original Pound Cake",
    description: "A classic buttery pound cake with a fine, tender crumb.",
    price: ["8.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 44,
    title: "Chestnut Pound Cake",
    description:
      "A moist, flavorful pound cake studded with sweet chestnuts for a nutty twist.",
    price: ["10.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 45,
    title: "Marble Pound Cake",
    description:
      "A tender pound cake with swirls of chocolate and vanilla creating a marbled pattern.",
    price: ["15.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 46,
    title: "Original Pound Cake? Bigger Size",
    description: "A classic buttery pound cake with a fine, tender crumb.",
    price: ["15.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 47,
    title: "Milk Bread",
    description:
      "A soft, fluffy bread with a slightly sweet, milky flavor and tender texture.",
    price: ["6.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 48,
    title: "Whole Wheat Bread",
    description:
      "A hearty bread made with whole wheat flour, offering a nutty flavor and wholesome texture.",
    price: ["7.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 49,
    title: "White Bread",
    description:
      "A soft, classic white bread with a light, fluffy crumb and mild flavor.",
    price: ["4.50"],
    url: b1,
    category: "Bread",
  },
  {
    id: 50,
    title: "Sweet Rice Bread",
    description:
      "A slightly chewy bread made with glutinous rice flour and a hint of sweetness.",
    price: ["8.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 51,
    title: "Culb Rolls",
    description:
      "Soft, round rolls with a tender crumb, perfect for sandwiches.",
    price: ["5.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 52,
    title: "Biscuit Bread",
    description:
      "A light, flaky bread with a buttery flavor and soft interior.",
    price: ["5.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 53,
    title: "Challah Bread",
    description:
      "A rich, slightly sweet braided bread with a soft, airy texture.",
    price: ["6.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 54,
    title: "Pull Apart",
    description:
      "A soft, fluffy bread designed to be easily pulled apart into bite-sized pieces.",
    price: ["6.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 55,
    title: "Multi Grain Bread",
    description:
      "A wholesome bread made with a mix of grains and seeds for added texture and flavor.",
    price: ["8.00"],
    url: b1,
    category: "Bread",
  },
  {
    id: 56,
    title: "Whole Wheat Bread (Loaf?)",
    description:
      "A large, hearty loaf made with whole wheat flour for a nutty, wholesome taste.",
    price: ["5.50"],
    url: b1,
    category: "Bread",
  },
  {
    id: 57,
    title: "Raisin Whole Wheat Bread",
    description:
      "A wholesome whole wheat loaf studded with sweet, chewy raisins.",
    price: ["5.50"],
    url: b1,
    category: "Bread",
  },
  {
    id: 58,
    title: "Raisin White Bread",
    description:
      "A soft white bread loaf filled with sweet, plump raisins for a subtle fruity flavor.",
    price: ["4.50"],
    url: b1,
    category: "Bread",
  },
];

export const cookies: EntryType[] = [
  {
    id: 1,
    title: "Mixed Cookies",
    description:
      "An assortment of cookies with various flavors and textures, perfect for sharing.",
    size: ["1LB", "1/2LB"],
    price: ["18.00", "10.00"],
    url: d1,
    category: "Cookies",
  },
  {
    id: 2,
    title: "Scone Cookie",
    description:
      "A slightly crumbly, buttery cookie with a tender texture, similar to a classic scone.",
    price: ["5.00"],
    url: d2,
    category: "Cookies",
  },
  {
    id: 3,
    title: "Ultimate Chocolate Chip Cookie",
    description:
      "A thick, chewy cookie loaded with rich chocolate chips for a classic indulgence.",
    price: ["5.00"],
    url: d3,
    category: "Cookies",
  },
  {
    id: 4,
    title: "Lemon Earl Grey Ganache Cookie",
    description:
      "A delicate cookie infused with Earl Grey tea and zesty lemon, filled with smooth ganache.",
    price: ["5.00"],
    url: d4,
    category: "Cookies",
  },
  {
    id: 5,
    title: "Gimme More S'more",
    description:
      "A soft cookie layered with chocolate, marshmallow, and graham flavors for a campfire-inspired treat.",
    price: ["5.00"],
    url: d5,
    category: "Cookies",
  },
  {
    id: 6,
    title: "Chocolate Ganache Cookie",
    description:
      "A rich, fudgy cookie filled or topped with smooth chocolate ganache.",
    price: ["5.00"],
    url: d6,
    category: "Cookies",
  },
  {
    id: 7,
    title: "Cereal Cookie",
    description:
      "A crunchy cookie mixed with colorful cereal pieces for a fun, sweet texture.",
    price: ["5.00"],
    url: d7,
    category: "Cookies",
  },
  {
    id: 8,
    title: "Matcha Pistachio Cookie",
    description:
      "A soft cookie flavored with earthy matcha and studded with crunchy pistachios.",
    price: ["5.00"],
    url: d8,
    category: "Cookies",
  },
  {
    id: 9,
    title: "Biscoff Lotus Cookie",
    description:
      "A buttery cookie infused with the sweet, caramelized flavor of Lotus Biscoff spread.",
    price: ["5.00"],
    url: d9,
    category: "Cookies",
  },
  {
    id: 10,
    title: "Chocolate Nuts Box",
    description:
      "A mix of crunchy nuts coated in rich chocolate for a satisfying treat.",
    price: ["10.00"],
    url: d10,
    category: "Cookies",
  },
  {
    id: 11,
    title: "White Bean Cookie",
    description:
      "Soft, subtly sweet cookies made with smooth white bean paste.",
    price: ["7.00"],
    url: b1,
    category: "Cookies",
  },
  {
    id: 12,
    title: "Coconot Box",
    description:
      "Chewy, sweet coconut treats with a tropical flavor in every bite.",
    price: ["5.00"],
    url: b1,
    category: "Cookies",
  },
  {
    id: 13,
    title: "Elephant Ear Box",
    description:
      "Crispy, flaky puff pastry shaped like elephant ears with a light, buttery taste.",
    price: ["10.00"],
    url: b1,
    category: "Cookies",
  },
  {
    id: 14,
    title: "Biscotti Almond",
    description:
      "Crunchy, twice-baked cookies studded with toasted almonds, perfect for dipping in coffee or tea.",
    price: ["6.00"],
    url: b1,
    category: "Cookies",
  },
  {
    id: 15,
    title: "Lemon Madeline",
    description:
      "Soft, buttery sponge cakes with a delicate lemony flavor and a signature shell shape.",
    price: ["2.75"],
    url: b1,
    category: "Cookies",
  },
  {
    id: 16,
    title: "Chocolate Madeline",
    description:
      "Moist, buttery sponge cakes infused with rich chocolate for a sweet treat.",
    price: ["2.75"],
    url: b1,
    category: "Cookies",
  },
  {
    id: 17,
    title: "Mugwort Madeline",
    description:
      "Light, tender sponge cakes flavored with earthy mugwort for a unique, aromatic taste.",
    price: ["2.75"],
    url: b1,
    category: "Cookies",
  },
];

export const pies: EntryType[] = [
  {
    id: 1,
    title: "Apple Pie",
    description:
      "A classic pie with tender apple slices spiced with cinnamon and encased in a buttery crust.",
    price: ["16.00"],
    url: b1,
    category: "Pie",
  },
  {
    id: 2,
    title: "Pecan Pie",
    description:
      "A rich, sweet pie filled with crunchy pecans and a gooey caramel-like filling.",
    price: ["18.00"],
    url: b1,
    category: "Pie",
  },
  {
    id: 3,
    title: "Fruit Pie",
    description:
      "A flaky, golden crust filled with a mix of sweet, juicy fruits.",
    price: ["30.00"],
    url: b1,
    category: "Pie",
  },
];

export const desserts: EntryType[] = [
  {
    id: 1,
    title: "Spoonable Tiramisu",
    description:
      "A creamy, layered dessert with coffee-soaked sponge, mascarpone, and a dusting of cocoa.",
    price: ["8.00"],
    url: b1,
    category: "Dessert",
  },
  {
    id: 2,
    title: "Macarons",
    description:
      "Delicate, colorful almond meringue cookies with a smooth, flavorful filling sandwiched in between.",
    price: ["15.00"],
    url: b1,
    category: "Dessert",
  },
  {
    id: 3,
    title: "Brownies",
    description:
      "Rich, fudgy chocolate squares with a dense, chewy texture and a deep chocolate flavor.",
    price: ["8.00"],
    url: b1,
    category: "Dessert",
  },
  {
    id: 4,
    title: "Eclairs",
    description:
      "Light, airy choux pastry filled with smooth cream and topped with a glossy chocolate glaze.",
    price: ["2.50"],
    url: b1,
    category: "Dessert",
  },
  {
    id: 5,
    title: "Lobster Tail Pastry",
    description:
      "A flaky, layered pastry shaped like a lobster tail, often filled with sweet cream or custard.",
    price: ["5.50"],
    url: b1,
    category: "Dessert",
  },
  {
    id: 6,
    title: "Cannoli",
    description:
      "Crispy pastry shells filled with sweet, creamy ricotta filling, often with chocolate chips or nuts.",
    price: ["5.00"],
    url: b1,
    category: "Dessert",
  },
  {
    id: 7,
    title: "Vanilla Cupcake",
    description:
      "A soft, fluffy vanilla sponge topped with smooth, sweet frosting.",
    price: ["2.50"],
    url: b1,
    category: "Dessert",
  },
  {
    id: 8,
    title: "Chocolate Cupcake",
    description:
      "A rich, moist chocolate cake topped with creamy chocolate frosting.",
    price: ["2.50"],
    url: b1,
    category: "Dessert",
  },
  {
    id: 9,
    title: "Mixed Fruit Tart",
    description:
      "A crisp tart shell filled with creamy custard and topped with a colorful assortment of fresh fruits.",
    price: ["10.00"],
    url: b1,
    category: "Dessert",
  },
  {
    id: 10,
    title: "Yuja Lemon Tart",
    description:
      "A tangy and zesty yuja lemon custard nestled in a buttery tart crust.",
    price: ["8.00"],
    url: b1,
    category: "Dessert",
  },
  {
    id: 11,
    title: "Pave Chocolate Mousse Tart",
    description:
      "A rich chocolate mousse layered in a crisp tart shell for a decadent chocolate treat.",
    price: ["8.00"],
    url: b1,
    category: "Dessert",
  },
  {
    id: 12,
    title: "Basque Cheesecake w/ Vanilla Bean",
    description:
      "A creamy, slightly caramelized Basque-style cheesecake infused with fragrant vanilla bean.",
    price: ["10.00"],
    url: b1,
    category: "Dessert",
  },
];
