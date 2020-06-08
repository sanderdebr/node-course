const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => console.log("Your notes..");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const findNote = notes.filter((note) => note.title === title);

  if (findNote.length === 1) {
    const newNotes = notes.filter((note) => note.title !== title);
    saveNotes(newNotes);
    console.log(chalk.green.inverse("Note removed!"));
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes) {
    notes.forEach((note) => console.log(chalk.green.inverse(note.title)));
  } else {
    console.log(chalk.red.inverse("No notes found."));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.green.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Not found."));
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};
