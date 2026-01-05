import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Nilesh:NileshTomato@cluster0.8yu7l.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
