// SearchBarValue={this.state.searchInput} 
// onSearch={this.onSearch}
function Header({ NotesSearchBar, searchBarValue, onSearch}){
    return(
        <>
            <div className="header">
                <h3 className="app-title">Notes App</h3>
                <NotesSearchBar searchBarValue={searchBarValue} onSearch={onSearch}/>
            </div>
            <hr></hr>
        </>


    )
}


export default Header