import React from 'react'

import PropTypes from 'prop-types';

const titleMaxCharacter = 50;

function TitleInput({value, onChange, titleInputCharactersLeft}){
    return(
        <div className="title-input">
            <div className="title-input-header">
                <label className="form-label">Title</label>
                <label>Characters left: {titleInputCharactersLeft}</label>
            </div>
            <input 
                value={value} 
                onChange={onChange} 
                className={`form-control ${titleInputCharactersLeft <= 0 ? 'is-invalid' : ''}`} 
                required
            />
        </div>
    )
}

TitleInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

function BodyInput({value, onChange}){
    return(
        <div className="body-input">
            <label className="form-label">Body</label>
            <textarea value={value} onChange={onChange} className="form-control note-body-input" required/>
        </div>
    )
}

BodyInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};



class NewNoteForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: "",
            body: "",
            titleInputCharactersLeft: titleMaxCharacter,
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onAddButtonClickHandler = this.onAddButtonClickHandler.bind(this)
    }

    onTitleChangeEventHandler(event){
        this.setState(
            event.target.value.length <= titleMaxCharacter?
            ()=>{
                return{
                    title: event.target.value,
                    titleInputCharactersLeft: titleMaxCharacter - (event.target.value.length)
                }
            }:
            (prevState)=>{
                return{
                    title: prevState.title
                }
            }
        )

    }
    

    onBodyChangeEventHandler(event){
        this.setState(
            ()=>{
                return{
                    body: event.target.value,
                }
            }
        )
    }
    onAddButtonClickHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }


    render(){
        return(
            <div className="form-wrapper">
                <h4>Create New Note</h4>
                <form onSubmit={this.onAddButtonClickHandler} className="add-note-form">
                    <TitleInput type="text" value={this.state.title} onChange={this.onTitleChangeEventHandler} titleInputCharactersLeft={this.state.titleInputCharactersLeft}/>
                    <BodyInput  type="text" value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                    <button type="submit" className="btn btn-primary form-submit-button" >Add note</button>
                </form>
            </div>
  
        )
    }
}   

export default NewNoteForm