import './App.css';
import { useState } from "react";

function App() {

// Loading the const of the app.
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false); 

  const handleAddOrUpdateNote = () => {
    if (title.trim() && text.trim()) {
      if (editingIndex !== null) {
        const updatedNotes = [...notes];
        updatedNotes[editingIndex] = { title, text };
        setNotes(updatedNotes);
        setEditingIndex(null);
      } else {
        setNotes([...notes, { title, text }]);
      }
      setTitle(""); 
      setText("");
      setIsEditMode(false); 
    }
  };

  const handleEditButtonClick = () => {
    setIsEditMode(true); 
  };

  const handleEditNote = (index) => {
    if (isEditMode) {
      setTitle(notes[index].title);
      setText(notes[index].text);
      setEditingIndex(index);
    }
  };

  const handleDeleteNote = () => {
    setNotes((prevNotes) => prevNotes.slice(0, -1));
  };

  //app body

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
          className="form-control"
          rows={10}
          placeholder="Write your note here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
 
      <div className="row buttonsNotes">
        <div className="col-sm-auto">
          <button className="buttonEdit" onClick={handleAddOrUpdateNote}>
            {editingIndex !== null ? "Update Note" : "Add"}
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-auto secTitle">
          <h2>Previous notes:</h2>
        </div>
      </div>

      <div className="row preDivNotes">
        {notes.map((note, index) => (
          <div
            key={index}
            className="col-sm-auto preNotes"
            onClick={() => handleEditNote(index)}
            style={{
              cursor: isEditMode ? "pointer" : "default",
              border: "1px solid gray",
              padding: "10px",
              margin: "5px",
              opacity: isEditMode ? "1" : "0.7",
            }}
          >
            <strong>{note.title}</strong>:<br /> {note.text}
          </div>
        ))}
      </div>

      <div className="row noteBody">
        <div className="col-sm-auto">
          <button className="col-sm-auto buttonEditOld" onClick={handleEditButtonClick}>
            Edit
          </button>
        </div>
        <div className="col-sm-auto">
          <button className="buttonDeleted" onClick={handleDeleteNote}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
