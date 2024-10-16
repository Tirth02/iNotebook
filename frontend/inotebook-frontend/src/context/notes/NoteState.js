import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "670e2378581e764365429525",
      user: "670d3cda7b1b8d404cce0999",
      title: "My First Note",
      description: "This is my first note on cloud",
      tag: "General",
      date: "2024-10-15T08:10:32.908Z",
      __v: 0,
    },
    {
      _id: "670e2378581e764365429526",
      user: "670d3cda7b1b8d404cce0999",
      title: "My Second Note",
      description: "This is my second note on cloud",
      tag: "Youtube",
      date: "2024-10-15T08:10:32.908Z",
      __v: 0,
    },
    {
      _id: "670e2378581e764365429526",
      user: "670d3cda7b1b8d404cce0999",
      title: "My Second Note",
      description: "This is my second note on cloud",
      tag: "Youtube",
      date: "2024-10-15T08:10:32.908Z",
      __v: 0,
    },
    {
      _id: "670e2378581e764365429526",
      user: "670d3cda7b1b8d404cce0999",
      title: "My Second Note",
      description: "This is my second note on cloud",
      tag: "Youtube",
      date: "2024-10-15T08:10:32.908Z",
      __v: 0,
    },
    {
      _id: "670e2378581e764365429526",
      user: "670d3cda7b1b8d404cce0999",
      title: "My Second Note",
      description: "This is my second note on cloud",
      tag: "Youtube",
      date: "2024-10-15T08:10:32.908Z",
      __v: 0,
    },
    {
      _id: "670e2378581e764365429526",
      user: "670d3cda7b1b8d404cce0999",
      title: "My Second Note",
      description: "This is my second note on cloud",
      tag: "Youtube",
      date: "2024-10-15T08:10:32.908Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
