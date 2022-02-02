import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import logo from "./logo.png";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [neos, setNeos] = useState([]);

  const getNeos = () => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?api_key=2zcSAHeiiktxliyCHz2eVVzGfUpwPsFqTX97WquF` //string int
      )
      .then((response) => {
        console.log(response);
        // debugger
        const myNeos = response.data.near_earth_objects["2022-02-02"][0];
        setNeos(myNeos);
      });
  };

  useEffect(() => getNeos(), []);

  const handleDateFetch = () => {
    //api call using date selecte
    //ref selected date
    //check if date is valid.
    //if true call get neos.
  };

  return (
    <div>
      <img className="logo" src={logo} alt="logo" />
      <hr />
      <h2>
        Welcome to the near earth app. In this app you can see all of Nasa's
        N.E.O. (near earth object) data.
      </h2>
      <h3>Just select a date below to see all n.e.o. info for that day.</h3>

      <DatePicker
        placeholderText="Select date"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />

      <button onClick={handleDateFetch}>get data</button>

      <div className="container">
        <h3>Name: {neos.name} </h3>
        <h3>Diameter: {} </h3>
        <h3>Miss Distance: {} </h3>
        <h3>Speed: {} </h3>
        <h3>Potentially hazardous: {} </h3>
        {/* <h3>Potentially hazardous: {neos.is_potentially_hazardous_asteroid.toString()} </h3> */}
      </div>
    </div>
  );
}
