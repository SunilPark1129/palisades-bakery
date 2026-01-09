import mongoose, { Schema } from "mongoose";
import { StaticImageData } from "next/image";

export interface IProduct {
  _id?: string;
  title: string;
  description: string;
  size: string[];
  price: string[];
  product: "bread" | "cake" | "cookie" | "pie";
  category: string;
  url: string | StaticImageData;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: [String],
      required: true,
    },
    size: {
      type: [String],
      required: true,
    },
    product: {
      type: String,
      enum: ["bread", "cake", "cookie", "pie"],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
