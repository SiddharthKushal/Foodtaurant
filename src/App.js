// App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* Removed RestaurantCard from here since it needs specific props */}
    </div>
  );
}

export default App;
