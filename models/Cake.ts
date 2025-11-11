import mongoose, { Model, Schema } from "mongoose";

export interface ICake {
  name: string;
  createdAt: Date;
}

const CakeSchema = new Schema<ICake>(
  {
    name: {
      type: String,
      required: [true, "Type name"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Cake: Model<ICake> =
  mongoose.models.Cake || mongoose.model<ICake>("Cake", CakeSchema);

export default Cake;
