import React from 'react'

function NoteTitle({ title, date } ){
    return(
        <div>
            <p className="note-title">{title}</p>
            <p className="date">{date}</p>
            <hr></hr>
        </div>
    )
}

function NoteBody({ body } ){
    return(
        <p className="note-body">{body}</p>
    )
}

function Note({ id, title, body, onDelete, onArchive, onActivate, archived, createdAt, showFormattedDate}){
    const formattedDate = showFormattedDate(createdAt)

    return(
        <div className="card note" >
            <div>
                <NoteTitle title={title} date={formattedDate} className="card-title"></NoteTitle>
                <NoteBody body={body} className="card-body"/>
            </div>
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