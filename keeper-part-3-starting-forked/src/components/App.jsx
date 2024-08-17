import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([{ title: "", content: "" }]);
  const [start, setStart] = useState(false);

  function Add(event, receivedTitle, receivedContent) {
    const newNote = { title: receivedTitle, content: receivedContent };
    setNoteList((prev) => [...prev, newNote]);
    event.preventDefault();
    setStart(true);
  }

  function Delete(id) {
    setNoteList((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={Add} />

      {start
        ? noteList.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              delete={Delete}
            />
          ))
        : null}

      <Footer />
    </div>
  );
}

export default App;
