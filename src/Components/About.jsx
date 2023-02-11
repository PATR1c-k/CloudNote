import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

function About() {
    const a = useContext(NoteContext);
    return <div>
        <h3>This is a About Page</h3>
    </div>
}

export default About;