import {useState} from "react";
import {getNodeText} from "@testing-library/react";
import note from "./Note";
import {MdSearch} from "react-icons/md";

const Search = ({handleSearchNote}) => {
    const placeholder = 'Type to search your notes'

    return (
        <div className='search'>
            <MdSearch className='search-icons' size='1.3em'/>
            <input
                type='text'
                placeholder={placeholder}
                onChange={(event)=>handleSearchNote(event.target.value)}
            />
        </div>
    )
}

export default Search