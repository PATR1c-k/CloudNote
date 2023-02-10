import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "Pratik",
        "age": "20"
    }

    const [state, setstate] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setstate({
                "name": "mohit",
                "age": "21",
            })
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;