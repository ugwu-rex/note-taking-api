const NoteService = require("../services/note.service");
const Note = require("../models/Note");

// TypeScript types
import type { Request, Response } from "express";

// GET /api/notes/categories/:categoryId
const getNotesByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const notes = await NoteService.getNotesByCategory(categoryId);
    res.json(notes);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/notes/:id
const updateNote = async (req: Request, res: Response) => {
  try {
    const updated = await NoteService.updateNote(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(updated);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getNotesByCategory,
  updateNote
};
