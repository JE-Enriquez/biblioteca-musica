import Header from "./components/Header/Header";
import Songs from "./components/Song/Song";
import SearchResults from "./components/SearchResults/Index";
import Library from "./components/Library/Index";
import { useState, useEffect } from "react";




function App() {
  
  const [canciones, setCanciones] = useState([]);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [myLibrary, setMyLibrary] = useState([]);

  useEffect(() => {
          const fetchSongs = async () => {
              const response = [
                {id:1, artista: "Artista 1", cancion: "Cancion 1", duracion: "3:25 minutos"},
                {id:2, artista: "Artista 2", cancion: "Cancion 2", duracion: "3:34 minutos"},
                {id:3, artista: "Artista 3", cancion: "Cancion 3", duracion: "3:38 minutos"},
                {id:4, artista: "Artista 4", cancion: "Cancion 4", duracion: "3:38 minutos"},
                {id:5, artista: "Artista 5", cancion: "Cancion 5", duracion: "3:38 minutos"},
                {id:6, artista: "Artista 6", cancion: "Cancion 6", duracion: "3:38 minutos"},
                {id:7, artista: "Artista 7", cancion: "Cancion 7", duracion: "3:38 minutos"},
                {id:8, artista: "Artista 8", cancion: "Cancion 8", duracion: "3:38 minutos"},
                {id:9, artista: "Artista 9", cancion: "Cancion 9", duracion: "3:38 minutos"},
                {id:10, artista: "Artista 10", cancion: "Cancion 10", duracion: "3:38 minutos"},

              ];

              setCanciones(response);
            };
            fetchSongs();
  },[]);
          
  useEffect(() => {
    console.log("Se actualizo la biblioteca", myLibrary); 
  },[myLibrary])
          
          
  const agregarALibrary = (song) => {
    if(!myLibrary.find(item => item.id === song.id)){
      setMyLibrary([...myLibrary, song])
    }
  };

  return (
    
    <>
    {/* componentDidMount() */}
      
      <div className="App">
        <Header />
        <main>
   
          <Songs
            canciones={canciones}
            agregarALibrary={agregarALibrary}
           
          />
            <SearchResults 
              textoBusqueda={textoBusqueda}
              setTextoBusqueda={setTextoBusqueda}
              canciones={canciones}
              agregarALibrary={agregarALibrary}
            />
            <Library 
              myLibrary={myLibrary}
              setMyLibrary={setMyLibrary}
              
            />
        

        </main>
      </div>
    </>
  );
}

export default App;
