import React, { useState } from "react";
import DrawIcon from "@mui/icons-material/Draw";
export default function create(props) {
  const [newMovData, setNewMovData] = useState({
    Name: "",
    Date: 0,
    Oscor: false,
  });
  function onChangeHandeler(name, value) {
    setNewMovData({ ...newMovData, [name]: value });
  }
  return (
    <div className="Create-Div">
      <h3>Create New Movie Here !!</h3>
      <input
        className="INPUT"
        type="text"
        name="Name"
        placeholder="Movie Name ...."
        value={newMovData.Name}
        onChange={(e) => {
          onChangeHandeler(e.target.name, e.target.value);
        }}
      />
      <input
        className="INPUT"
        name="Date"
        type="number"
        placeholder="Release Date ...."
        onChange={(e) => {
          onChangeHandeler(e.target.name, e.target.value);
        }}
      />
      <div className="Oscor">
        <input
          className="INPUT"
          type="checkbox"
          name="Oscor"
          onChange={(e) => {
            onChangeHandeler(e.target.name, e.target.checked);
          }}
        />
        <label htmlFor="">Oscor</label>
        <p>
          {newMovData.Name}/{newMovData.Date}/
          {newMovData.Oscor ? "true" : "false"}
        </p>
      </div>
      <button
        className="Create-Btn"
        onClick={() => {
          props.Create(newMovData);
        }}
      >
        <DrawIcon /> Create
      </button>
    </div>
  );
}
