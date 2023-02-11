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

    // To do api calls
    console.log("adding a new note");
    let note = {
      _id: "ObjectId('63e64b677817e7bd2e81')",
      user: "ObjectId('63e4e8a8bda94680643ab918')",
      title: title,
      description: description,
      tag: tag,
      date: "ISODate('2023-02-10T13:49:27.313Z')",
      __v: 0,
    };
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
    const json = response.json();
    console.log(id);
    //Logic to edit in client
    notes.forEach((element) => {
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    });
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
