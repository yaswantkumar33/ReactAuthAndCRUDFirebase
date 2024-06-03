import React from "react";

export default function Delete(props) {
  return (
    <>
      <button
        onClick={() => {
          props.DeleteMovie(props.movie.id);
        }}
        id={props.movie.id}
      >
        Delete Movie!
      </button>
    </>
  );
}
