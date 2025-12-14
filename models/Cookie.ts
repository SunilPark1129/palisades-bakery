import mongoose, { Model, Schema } from "mongoose";

export interface ICookie {
  title: string;
  size?: string[];
  description: string;
  price: string[] | string;
  category: string;
  url: string;
  createdAt: Date;
}

const CookieSchema = new Schema<ICookie>(
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
const Cookie: Model<ICookie> =
  mongoose.models.Cookie || mongoose.model<ICookie>("Cookie", CookieSchema);

export default Cookie;
