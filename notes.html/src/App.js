import './App.css';
import { useState } from "react";

function App() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleDeleteNote = () => {
    setNotes((prevNotes) => prevNotes.slice(0, -1));

  }

  const handleAddNote = () => {
    if (title.trim() && text.trim()) {
      setNotes([...notes, { title, text }]);
      setTitle("");
      setText("");
    }

  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-auto secTitle">
          <h2>Add notes:</h2>
        </div>
      </div>
      <div className="row noteBody">
      <div className="col-sm-auto">
          <label htmlFor="note-title" className="form-label">Title:</label>
          <input
            type="text"
            id="note-title"
            name="note-title"
            className="form-control"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="col-sm-auto">
        <label htmlFor="note-text" className="form-label">Note:</label>
        <textarea
          id="note-text"
          name="note-text"
          className="form-control"
          rows={10}
          placeholder="Write your note here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="row buttonsNotes">
        <div className="col-sm-auto">
          <button className="buttonEdit" onClick={handleAddNote}>Add</button>
        </div>
      </div>
      <div className="row">
      <div className="col-sm-auto secTitle">
        <h2>Previous notes:</h2>
      </div>
      </div>
      <div className="row preDivNotes">
        {notes.map((note, index) => (
          <div key={index} className="col-sm-auto preNotes">
            <strong>{note.title}</strong>:
            <br></br> {note.text}
          </div>
        ))}
      </div>
      <div className="row noteBody">
        <div className="col-sm-auto">
          <button className="col-sm-auto buttonEditOld">Edit</button>
        </div>
        <div className="col-sm-auto">
          <button className="buttonDeleted" onClick={handleDeleteNote}>Deleted</button>
        </div>
      </div>
    </div>
  )
   
}

export default App;
