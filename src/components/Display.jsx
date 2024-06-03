import React, { useEffect, useState } from "react";
import { db, auth } from "../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import Create from "./create";
import Delete from "./Delete";
import Update from "./update";
export default function Display() {
  const [MovieList, SetmovieList] = useState([]);
  const moviecollectionRef = collection(db, "Movies");
  const getMovieList = async () => {
    try {
      const data = await getDocs(moviecollectionRef);
      const datafirtered = data.docs.map((docs) => ({
        ...docs.data(),
        id: docs.id,
      }));
      SetmovieList(datafirtered);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getMovieList();
  }, []);
  const DeleteMovie = async (id) => {
    const moviedoc = doc(db, "Movies", id);
    await deleteDoc(moviedoc);
    getMovieList();
  };
  const Updatemovie = async (id, Updatedtittle) => {
    const moviedoc = doc(db, "Movies", id);
    await updateDoc(moviedoc, { Tittle: Updatedtittle });
    getMovieList();
  };
  return (
    <div>
      {MovieList.map((movie, index) => {
        return (
          <div key={index}>
            <h1>{movie.Tittle}</h1>
            <p>{movie.ReleaseDate}</p>
            <p>{movie.Oscor}</p>
            <Delete movie={movie} DeleteMovie={DeleteMovie} />
            <Update
              movie={movie}
              Updatemovie={Updatemovie}
              setUpdeatedTittle={Updatemovie}
            />
          </div>
        );
      })}
    </div>
  );
}
