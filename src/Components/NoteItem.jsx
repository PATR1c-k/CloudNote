import React from "react";
import NoteContext from "../context/notes/noteContext";
import { useContext } from "react";

function NoteItem(props) {
  const { note, updateNote } = props;
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  return (
    <div className="container my-2">
      <div className="card my-2 text-start">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert(":Note deleted successfully", "success");
              }}
            ></i>
            <i
              className="fa-solid fa-pen mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
