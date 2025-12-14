import mongoose, { Model, Schema } from "mongoose";

export interface ICategory {
  title: string;
  size?: string[];
  description: string;
  price: string[] | string;
  category: string;
  url: string;
  createdAt: Date;
}

const BreadSchema = new Schema<ICategory>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    size: {
      type: [String],
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
const Bread: Model<ICategory> =
  mongoose.models.Bread || mongoose.model<ICategory>("Bread", BreadSchema);

export default Bread;
