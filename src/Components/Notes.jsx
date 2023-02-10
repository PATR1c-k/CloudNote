// eslint-disable-next-line
import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

function Notes() {
    const context = useContext(NoteContext);
    const { notes, setnotes } = context;

    return (
        <div className="container my-3">
            <h2>My Notes</h2>
            {notes.map((note) => {
                return <NoteItem note={note} />
            })}
        </div>
    )
}

export default Notes;