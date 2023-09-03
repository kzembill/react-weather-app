import React, { useState } from "react";
import "./Search.css";


export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  let [temp, setTemp] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently {temp} in {city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
  
  function changeTemp(event) {
    setTemp(event.target.value);
  }
  
  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={changeCity} />
        <input type="submit" value="search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}