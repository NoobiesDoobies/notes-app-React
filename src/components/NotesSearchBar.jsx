import React from 'react'


function NotesSearchBar( {searchBarValue, onSearch} ){
    return(
        <div className="search-bar-wrapper">
            <i className="bi bi-search"></i>
            <label>Find notes</label>
            <input className="search-input" value={searchBarValue} onChange={onSearch}/>
        </div>
    )
}
export default NotesSearchBar