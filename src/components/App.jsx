import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, updateNote] = useState([{
    title: "",
    content: ""
  }]);

  function addNote(item) {
    updateNote(prevNote => [...prevNote, item])
  }

  function deleteNote(id){
    updateNote((prevNote) => {
      return prevNote.filter((item,index) => {
        return index !==id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {note.map((item, index) => <Note key={index} id={index} title={item.title} content={item.content} onDelete={deleteNote}/>)}
      <Footer />
    </div>
  );
}

export default App;
