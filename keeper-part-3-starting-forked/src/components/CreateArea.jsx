import React, { useState } from "react";

function CreateArea(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  function NoteTitleHandle(event) {
    const value = event.target.value;

    setNoteTitle(value);
  }

  function NoteContentHandle(event) {
    const value = event.target.value;

    setNoteContent(value);
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.add(event, noteTitle, noteContent);
          setNoteContent("");
          setNoteTitle("");
        }}
      >
        <input
          onChange={NoteTitleHandle}
          name="title"
          placeholder="Title"
          value={noteTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={NoteContentHandle}
          value={noteContent}
        />
        <button type="Submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
