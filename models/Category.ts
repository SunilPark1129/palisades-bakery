import mongoose, { Model, Schema } from "mongoose";

export interface ICategory {
  title: string;
  size: string[];
  description: string;
  price: string[];
  category: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const CategorySchema = new Schema<ICategory>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    size: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: [String],
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

export const Bread: Model<ICategory> =
  mongoose.models.Bread || mongoose.model<ICategory>("Bread", CategorySchema);

export const Cake: Model<ICategory> =
  mongoose.models.Cake || mongoose.model<ICategory>("Cake", CategorySchema);

export const Cookie: Model<ICategory> =
  mongoose.models.Cookie || mongoose.model<ICategory>("Cookie", CategorySchema);

export const Pie: Model<ICategory> =
  mongoose.models.Pie || mongoose.model<ICategory>("Pie", CategorySchema);
