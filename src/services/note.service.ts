const Note = require("../models/Note");

// TypeScript types
export interface UpdateNoteDTO {
  title?: string;
  content?: string;
  category?: string;
}

// Get notes by category
const getNotesByCategory = async (categoryId: string) => {
  return await Note.find({ category: categoryId });
};

// Update a note
const updateNote = async (id: string, data: UpdateNoteDTO) => {
  return await Note.findByIdAndUpdate(id, data, { new: true });
};

module.exports = {
  getNotesByCategory,
  updateNote
};
