import React from "react";

function NoteItem(props) {
    const { note } = props;
    return (
        <div className="container my-2">
            <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div >
    )
}

export default NoteItem;