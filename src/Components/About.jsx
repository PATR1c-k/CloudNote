import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";

function About() {
    const a = useContext(NoteContext);
    useEffect(() => {
        a.update();
    }, [])

    return <div>
        <h3>This is a About {a.state.name} and age is {a.state.age}</h3>
    </div>
}

export default About;