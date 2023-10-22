import React from 'react'
import Note from './Note'

class NotesList extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const activeNotes = this.props.notes.filter(note=>!note.archived)
        const archivedNotes = this.props.notes.filter(note=>note.archived)
        
        let activeNotesElement = []
        let archivedNotesElement = []

        if(activeNotes.length != 0){
            activeNotes.forEach((note, index) => {
                activeNotesElement.push(
                    <Note 
                    key={index} 
                    onArchive={this.props.onArchive} 
                    onDelete={this.props.onDelete} 
                    showFormattedDate={this.props.showFormattedDate}
                    {...note}/>)
            })
        }
        else{
            activeNotesElement = <div className="no-notes">No Active Notes</div>
        }

        if(archivedNotes.length != 0){
            archivedNotes.forEach((note, index) => {
                archivedNotesElement.push(
                    <Note 
                    key={index} 
                    onDelete={this.props.onDelete} 
                    onActivate={this.props.onActivate}  
                    showFormattedDate={this.props.showFormattedDate}
                    {...note}/>)
            }) 
        }
        else{
            archivedNotesElement = <div className="no-notes">No Archived Notes</div>
        }


        return(
            
            <div className="notes-list-wrapper">
                <h4 className="notes-type">Active Notes</h4>
                <div className="notes-wrapper">
                    {activeNotesElement}
                </div>

                <h4 className="notes-type">Archived Notes</h4>
                <div className="notes-wrapper">
                    {archivedNotesElement}
                </div>
            </div>
        )
    }
}


export default NotesList