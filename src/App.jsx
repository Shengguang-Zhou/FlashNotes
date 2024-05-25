import React, {useState, useEffect} from 'react';
import {nanoid} from 'nanoid'
import './App.css';
import NotesList from "./components/NotesList";
import {calculateNewValue} from "@testing-library/user-event/dist/utils";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
    const [notes, setNotes] = useState([{
        id:nanoid(),
        text: 'Start taking your note here',
        date: '10/01/1949'
    },
    ])

    const [searchText, handleSearchText] = useState('')
    const [darkMode, setDarkMode] = useState(false)

    const handleAddNote =(text) => {
        const date = new Date()
        const newNote = {
            id:nanoid(),
            text:text,
            date:date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote] // append new Note
        setNotes(newNotes)
    }

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('flashNotes'))
        if (savedNotes){
            setNotes(savedNotes)
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem('flashNotes', JSON.stringify(notes))
        }, [notes]   // dependecies
    )



    const handleDeleteNote = (id) =>{
        const newNotes = notes.filter((note)=> (note.id!=id))
        setNotes(newNotes)
    }

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
          <Header handleToggleDarkMode={setDarkMode}/>
          <Search handleSearchNote={handleSearchText}/>
          <NotesList
              notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
              handleAddNote={handleAddNote}
              handleDeleteNote={handleDeleteNote}
          />
        </div>
    </div>
    );
}

export default App;
