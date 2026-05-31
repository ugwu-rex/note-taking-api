const mongoose = require("mongoose");

// TypeScript interface
export interface ICategory {
  name: string;
}

// Mongoose schema
const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true }
});

// Mongoose model
const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
