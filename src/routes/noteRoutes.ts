const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

// GET /api/notes - list all notes
router.get("/", async (req: any, res: any) => {
  const notes = await Note.find();
  res.json(notes);
});

// GET /api/notes/:id - get a specific note
router.get("/:id", async (req: any, res: any) => {
  const note = await Note.findById(req.params.id);
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json(note);
});

// POST /api/notes - create a new note
router.post("/", async (req: any, res: any) => {
  const { title, content } = req.body;

  const newNote = await Note.create({ title, content });
  res.status(201).json(newNote);
});

// DELETE /api/notes/:id - delete a note
router.delete("/:id", async (req: any, res: any) => {
  const deleted = await Note.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Note not found" });
  res.json({ message: "Note deleted" });
});

module.exports = router;
