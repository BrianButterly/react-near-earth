import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import logo from "./logo.png";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [neos, setNeos] = useState([]);
  const [neosTwo, setNeosTwo] = useState([]);
  const [neosThree, setNeosThree] = useState([]);
  const [neosFour, setNeosFour] = useState([]);
  const [neosFive, setNeosFive] = useState([]);

  const getNeos = () => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/feed?api_key=2zcSAHeiiktxliyCHz2eVVzGfUpwPsFqTX97WquF`
      )
      .then((response) => {
        console.log(response);
        // debugger
        const myNeos = response.data.near_earth_objects["2022-02-04"][0].name;
        const myNeos2 =
          response.data.near_earth_objects["2022-02-04"][0].estimated_diameter
            .feet.estimated_diameter_max;
        const myNeos3 =
          response.data.near_earth_objects["2022-02-04"][0]
            .close_approach_data[0].miss_distance.miles;
        const myNeos4 =
          response.data.near_earth_objects["2022-02-04"][0]
            .close_approach_data[0].relative_velocity.miles_per_hour;
        const myNeos5 =
          response.data.near_earth_objects[
            "2022-02-06"
          ][0].is_potentially_hazardous_asteroid.toString();
        setNeos(myNeos);
        setNeosTwo(myNeos2);
        setNeosThree(myNeos3);
        setNeosFour(myNeos4);
        setNeosFive(myNeos5);
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

      <p>Data for 02/04/2022</p>
      <div className="container">
        <h3>Name: {neos} </h3>
        <h3>Diameter: ({neosTwo}) Feet</h3>
        <h3>Miss Distance: ({neosThree}) Miles</h3>
        <h3>Speed: ({neosFour}) Mph</h3>
        <h3>Potentially hazardous: {neosFive} </h3>
      </div>
    </div>
  );
}
