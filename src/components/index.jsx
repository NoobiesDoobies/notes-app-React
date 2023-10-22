import React from 'react';
import { createRoot } from 'react-dom/client'

import NewNoteForm from './NewNoteForm.jsx'
import NotesList from './NotesList.jsx'
import Header from './Header.jsx'
import NotesSearchBar from './NotesSearchBar.jsx';
import { getInitialData, showFormattedDate } from '../utils/index.js'


class MainPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            notes: getInitialData(),
            searchInput: '',
        }

        this.addNote = this.addNote.bind(this)
        this.deleteNote = this.deleteNote.bind(this)
        this.onActivate = this.onActivate.bind(this)
        this.onArchive = this.onArchive.bind(this)
        this.onSearch = this.onSearch.bind(this)
    }

    addNote({title, body}){
        // alert(`Added new note\nTitle:${title}\nBody:${body}`)
        this.setState(
            (prevState)=>{
                return{
                    notes: [
                        ...prevState.notes,
                        {
                            id:+new Date(),
                            title: title,
                            body: body,
                            archived: false,
                            createdAt: new Date(),
                        }
                    ]
                }
            });
    }

    deleteNote(id){
        this.setState(
            (prevState) =>{
                return{
                    notes: prevState.notes.filter(note => note.id !== id)
                    
                }
            }
        )
    }

    onActivate(id){
        this.setState(
            (prevState)=>{
                const updatedNotes = prevState.notes.map((note)=>{
                    if(note.id === id){
                        return {...note, archived: false}
                    }
                    return note
                })
                return{
                    notes: updatedNotes
                }
            }
        )
    }

    onArchive(id){
        this.setState(
            (prevState) =>{
                const updatedNotes = prevState.notes.map((note)=>{
                    if(note.id === id){
                        return {...note, archived: true}
                    }
                    return note
                })
                return{
                    notes: updatedNotes
                }
            }
        )
    }

    onSearch(event){
        this.setState(()=>{
            return{
                searchInput: event.target.value
            }
        })
    }

    render(){
        const notesSearched = this.state.notes.filter((note)=>{
            return note.title.toLowerCase().startsWith(this.state.searchInput.toLowerCase())
        })
        return(
            <>
                <Header 
                    NotesSearchBar={NotesSearchBar} 
                    searchBarValue={this.state.searchInput} 
                    onSearch={this.onSearch}
                />
                <NewNoteForm addNote={this.addNote}/> 
                <NotesList 
                    notes={notesSearched} 
                    onActivate={this.onActivate}
                    onArchive={this.onArchive} 
                    onDelete={this.deleteNote}
                    showFormattedDate={showFormattedDate}
                />
            </>
        )
    }
}
const root = createRoot(document.getElementById('root'));
root.render(<MainPage/>)