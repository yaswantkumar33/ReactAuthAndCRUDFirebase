import React, { useState, useEffect } from "react";
import { db, auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import Login from "./Login";
import Signup from "./Sign-up";
import Display from "./Display";
import Create from "./create";
export default function Form() {
  const moviecollectionRef = collection(db, "Movies");
  const [switchflag, setflag] = useState(false);
  const [Vals, setVals] = useState({ email: "", password: "" });
  const [MovieList, SetmovieList] = useState([]);
  const [errval, seterrval] = useState({ emailerr: "", passworderr: "" });
  const [Formflag, setfomflag] = useState(true);
  if (auth?.currentUser?.email && Formflag) {
    setfomflag(false);
  }
  console.log(auth?.currentUser?.email);
  function onChangeHandeler(name, value) {
    setVals({ ...Vals, [name]: value });
  }
  const Signupsubmit = async (e) => {
    e.preventDefault();
    console.log(Vals);
    await createUserWithEmailAndPassword(auth, Vals.email, Vals.password).then(
      () => {
        setfomflag(false);
      }
    );
  };
  const signupwithgoogle = async () => {
    await signInWithPopup(auth, googleProvider).then((r) => {
      const user = r.user;
      setfomflag(false);
      // console.log(user);
    });
    console.log("sign up with google logged");
    // console.log(auth?.currentUser?.email);
  };
  const signout = async () => {
    try {
      await signOut(auth).then(() => {
        setfomflag(true);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // create functions
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
  const addmoview = async (valjson) => {
    var obj = {
      Tittle: valjson.Name,
      ReleaseDate: valjson.Date,
      Oscor: valjson.Oscor,
      User_id: auth.currentUser.uid,
    };
    await addDoc(moviecollectionRef, obj);
    getMovieList();
  };

  return (
    <>
      <div>
        <button className="Logout" onClick={signout}>
          Logout
        </button>
      </div>
      {Formflag ? (
        <section className="container forms">
          {switchflag ? (
            <Login />
          ) : (
            <Signup
              errval={errval}
              Vals={Vals}
              signupwithgoogle={signupwithgoogle}
              onChangeHandeler={onChangeHandeler}
              setflag={setflag}
              Signupsubmit={Signupsubmit}
            />
          )}
        </section>
      ) : (
        <>
          <Display />
          <Create Create={addmoview} />
        </>
      )}
    </>
  );
}

// request.auth != null && request.auth.uid == request.resource.data.userId;
