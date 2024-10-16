import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
const NotesComponent = () => {
    const context = useContext(noteContext);
  const {notes,setNotes} = context;
  return (
    <div className="row my-3">
        <h1>Your notes</h1>
        {notes.map((note) =>{
          return <Noteitem note={note}/>
        })}
      </div>
  )
}

export default NotesComponent
