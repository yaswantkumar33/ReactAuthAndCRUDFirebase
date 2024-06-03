import React, { useState } from "react";
// UPDATE HAS BEEN COMPLETED FUNCTIONALLY
export default function Update(props) {
  const [Newtittle, Setnewtittle] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="New Tittle.."
        onChange={(e) => {
          Setnewtittle(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (Newtittle) {
            console.log("true");
            props.Updatemovie(props.movie.id, Newtittle);
          } else {
            alert("fill the required update value ");
          }
        }}
      >
        Update
      </button>
    </>
  );
}
