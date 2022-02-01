import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import logo from "./logo.png";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo" />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <h2>
        Welcome to the near earth app. In this app you can see all of Nasa's
        N.E.O. (near earth object) data.
      </h2>
      <h2>Just select a date below to see all n.e.o.'s info for that day.</h2>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
}

export default App;
