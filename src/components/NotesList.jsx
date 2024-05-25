import Note from "./Note";
import AddNote from "./AddNote";

const NotesList =({notes, handleAddNote,handleDeleteNote}) =>{

    return (
        <div className='notes-list'>
            {/*this will return N notes as len(notes))*/}
            {notes.map((note)=>(
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NotesList