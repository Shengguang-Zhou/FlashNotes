import {MdDeleteForever} from 'react-icons/md'

const Note =({id, text, date,handleDeleteNote}) =>{
    return (
        <div className='note'>
            <span className='note-text'>{text}</span>
            <span className="note-footer">{date}</span>
            <MdDeleteForever
                className='noteDelete'
                size='1.3em'
                onClick={()=>handleDeleteNote(id)}
            />
        </div>
    )
}

export default Note