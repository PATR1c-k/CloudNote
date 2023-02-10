import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "ObjectId('63e4f05a9bfbf13c831134d0')",
            user: "ObjectId('63e4e8a8bda94680643ab918')",
            title: 'my note 2',
            description: 'work daily on code and understand logics',
            tag: 'codingskill',
            date: "ISODate('2023-02-09T13:08:42.557Z')",
            __v: 0
        },
        {
            _id: "ObjectId('63e64b677817e7bddf22e81e')",
            user: "ObjectId('63e4e8a8bda94680643ab918')",
            title: 'This is a second note ',
            description: 'Gyan ki batein for second note',
            tag: 'programming',
            date: "ISODate('2023-02-10T13:49:27.313Z')",
            __v: 0
        }
    ]

    const [notes, setnotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{ notes, setnotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;