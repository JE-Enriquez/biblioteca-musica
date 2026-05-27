import Header from "./components/Header";
import Songs from "./components/Song";
import "App.css"
import React from "react";

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
