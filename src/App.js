import Header from "./components/Header";
import Songs from "./components/Song";
import style from "../src/css/style.css"
import React, { Component } from "react";

function App() {

  
  return (
    
    <>
    {/* componentDidMount() */}
      
      <div className="App">
        <Header />
        <Songs />
      </div>
    </>
  );
}

export default App;
