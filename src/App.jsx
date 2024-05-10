import "./App.css";
import Card from "./components/Card";
import Home from "./components/Home";
import Mainheader from "./components/Mainheader";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [input, setinput] = useState("");
  let name = "";
  function changehandler(e) {
    setinput(e.target.value);
  }

  const navigate = useNavigate();
  function submithandler(e) {
    name = input;
    if (name.trim() !== "") {
      weather();
      navigate("/movie");
    } else {
      alert("Enter a valid movie name");
    }
    e.preventDefault();
  }
  const [data, setdata] = useState("");
  const weather = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?&apikey=21de79e3&t=${name}`
      );
      const result = await response.json();
      setdata(result);
    } catch (error) {
      console.error(error);
      alert("Movie not found !!");
    }
  };
  let poster = data.Poster;
  return (
    <div
      style={{ backgroundImage: `url(${poster})` }}
      className="flex items-center justify-center flex-col min-h-screen w-full bg-no-repeat bg-cover bg-top bg-fixed"
    >
      <div>
        <input
          onChange={changehandler}
          type="text"
          placeholder="search a movie"
          className="border-4 border-violet-800 w-[1200px] mt-5 p-3 rounded-xl text-black font-medium shadow-2xl"
        />
        <button
          onClick={submithandler}
          className="ml-5 border-4 font-medium border-violet-800 p-3 rounded-xl text-black shadow-2xl bg-white"
        >
          SEARCH
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Mainheader />}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/movie" element={<Card data={data}></Card>}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
