const mongoose = require("mongoose");

// TypeScript interface
export interface INote {
  title: string;
  content: string;
  category: string; // NEW
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema
const NoteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },

    // NEW FIELD
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    }
  },
  { timestamps: true }
);

// Mongoose model
const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
