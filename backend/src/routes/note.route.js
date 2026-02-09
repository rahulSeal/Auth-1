const express = require("express");
const noteModel = require("../models/note.model");

const noteRouter = express.Router();

//Post
noteRouter.post("/notes", async (req, res) => {
  const { title, description } = req.body;

  const note = await noteModel.create({
    title,
    description,
  });

  res.status(200).json({
    message: "Note created successfully",
    note,
  });
});

//Get
noteRouter.get("/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    message: "Notes fetched successfully",
    notes,
  });
});

//Delete
noteRouter.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "Note deleted successfully",
  });
});

//Patch
noteRouter.patch("/notes/:id", async (req, res) => {
  const { title, description } = req.body;
  const id = req.params.id;

  await noteModel.findByIdAndUpdate(id, { title, description });

  res.status(200).json({
    message: "Note updated successfully",
  });
});

module.exports = noteRouter;
