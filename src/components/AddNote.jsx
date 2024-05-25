import {useState} from "react";
import {getNodeText} from "@testing-library/react";
import note from "./Note";

const AddNote = ({handleAddNote}) => {



    const [noteText, setNoteText] = useState('')
    const characterLimit = 200
    const placeholder = 'Type to add a note'


    const handleChange=(event)=> {
        // check whether the character exceeds the limit or not
        if ((characterLimit - event.target.value.length) >= 0) {
            setNoteText(event.target.value)
        }
    }

    const handleSaveClick=()=>{
        // check the text without space is larger than 0
        if (noteText.trim().length > 0 && noteText.length >0){
            handleAddNote(noteText)
            setNoteText('')
        }

    }

    return (
        <div className='note new'>
            <textarea
                rows='8'
                cols='10'
                placeholder={placeholder}
                value={noteText}
                onChange={handleChange} // this will update text as its typing
            />
            <div className="note-remaining">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote