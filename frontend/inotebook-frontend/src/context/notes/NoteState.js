import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // Fetch all notes
  const getNotes = async () => {
    console.log("Adding a new note");
    // TODO: API CAll
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwZDNjZGE3YjFiOGQ0MDRjY2UwOTk5In0sImlhdCI6MTcyODkyODM1OX0.hqYmvsWYISoMtnw6gnu3qjlua7JMqmJpnjoYBKlTFaI",
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    console.log("Adding a new note");
    // TODO: API CAll
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwZDNjZGE3YjFiOGQ0MDRjY2UwOTk5In0sImlhdCI6MTcyODkyODM1OX0.hqYmvsWYISoMtnw6gnu3qjlua7JMqmJpnjoYBKlTFaI",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = {
      _id: "670e237988581e7364365429526",
      user: "670d3cda7b1b8d404cce0999",
      title: title,
      description: description,
      tag: tag,
      date: "2024-10-15T08:10:32.908Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = async(id) => {
    // API CAll
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwZDNjZGE3YjFiOGQ0MDRjY2UwOTk5In0sImlhdCI6MTcyODkyODM1OX0.hqYmvsWYISoMtnw6gnu3qjlua7JMqmJpnjoYBKlTFaI",
      },
    });
    const json = response.json();

    console.log(json);
    console.log("Deleting the note with id " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API CAll
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcwZDNjZGE3YjFiOGQ0MDRjY2UwOTk5In0sImlhdCI6MTcyODkyODM1OX0.hqYmvsWYISoMtnw6gnu3qjlua7JMqmJpnjoYBKlTFaI",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))

    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      
    }
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
