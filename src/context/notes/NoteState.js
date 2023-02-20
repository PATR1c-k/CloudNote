import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setnotes] = useState(notesInitial);

  // Add a note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNGU4YThiZGE5NDY4MDY0M2FiOTE4In0sImlhdCI6MTY3NTk0ODAyOH0.u2y5kpPKGVpKcC9MpfJqJQWlPe13_4SnJgwHOIM-Q5Y",
      },

      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setnotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNGU4YThiZGE5NDY4MDY0M2FiOTE4In0sImlhdCI6MTY3NTk0ODAyOH0.u2y5kpPKGVpKcC9MpfJqJQWlPe13_4SnJgwHOIM-Q5Y",
      },
    });
    console.log(id);
    const json = response.json();
    console.log(json);

    console.log("successfully deleted Note" + id);
    const newNotes = notes.filter((note) => {
      // console.log(note._id);
      return note._id !== id;
    });
    setnotes(newNotes);
  };

  // edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNGU4YThiZGE5NDY4MDY0M2FiOTE4In0sImlhdCI6MTY3NTk0ODAyOH0.u2y5kpPKGVpKcC9MpfJqJQWlPe13_4SnJgwHOIM-Q5Y",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to edit in client
    newNotes.forEach((note) => {
      if (note._id === id) {
        note.title = title;
        note.description = description;
        note.tag = tag;
      }
    });
    // console.log(notes);
    setnotes(newNotes);
  };

  // get all notes
  const getNotes = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlNGU4YThiZGE5NDY4MDY0M2FiOTE4In0sImlhdCI6MTY3NTk0ODAyOH0.u2y5kpPKGVpKcC9MpfJqJQWlPe13_4SnJgwHOIM-Q5Y",
      },
    });

    const json = await response.json();
    console.log(json);
    setnotes(json);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
