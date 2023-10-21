import React from 'react'

function NoteTitle({ title, date } ){
    return(
        <>
            <p className="note-title">{title}</p>
            <p className="date">{date}</p>
        </>
    )
}

function NoteBody({ body } ){
    return(
        <p className="note-body">{body}</p>
    )
}

function Note({ id, title, body, onDelete, onArchive, onActivate, archived, createdAt}){
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const timeString = createdAt.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    const formattedDate = createdAt.toLocaleDateString(undefined, options);

    return(
        <div className="card note" >
            <NoteTitle title={title} date={formattedDate} className="card-title"></NoteTitle>
            <hr></hr>
            <NoteBody body={body} className="card-body"/>
            <div className="note-button-wrapper">
                {
                    archived?
                    <>
                        <button onClick={()=>{onActivate(id)}} className="btn btn-primary note-button">Activate</button>
                        <button onClick={()=>{onDelete(id)}} className="btn btn-danger note-button">Delete</button>
                    </>:
                    <>
                        <button onClick={()=>{onArchive(id)}} className="btn btn-warning note-button">Archive</button>
                        <button onClick={()=>{onDelete(id)}} className="btn btn-danger note-button">Delete</button>
                    </>
                }
            </div>
        </div>
    )
}



export default Note