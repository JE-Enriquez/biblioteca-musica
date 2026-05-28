import React, { useState } from "react";
import "./SearchStyle.css"


const SearchResults = ({textoBusqueda, setTextoBusqueda, canciones, agregarALibrary}) => {

    const [search, setSearch] = useState("")
            
    const handleInputChange = (e) => {
        setTextoBusqueda(e.target.value)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Se guardo")
        setSearch(textoBusqueda);
        
        // const existe = canciones.some(item => 
        //     item.cancion.toLowerCase().includes(textoBusqueda.toLowerCase()))

        // if(existe)    
        //     {
        //         console.log("si es")
        // }else{
        //     console.log("no existe")
        // }

    }

    const cancionesFiltradas = canciones.filter(item => 
        item.cancion.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <>
            <div className="buscar">
                <div className="buscar__flex">
                    <h2 className="buscar__tittle">Resultados de busqueda</h2>
                </div>
                <section>
                    <form onSubmit={handleSubmit}>
                    
                        

                                <div className="buscar__input"  >
                                    <input 
                                        type="text"
                                        id="cancion"
                                        placeholder="Busca por nombre de canción..."
                                        // name=""
                                        value={textoBusqueda}
                                        onChange={(e) => handleInputChange(e)}
                                    />
                                    <button type="submit">Buscar</button>
                                </div>
                    
                            
      

                        <div>
                            {
                                cancionesFiltradas.length > 0 ? (

                                    cancionesFiltradas.map(song => {
                                        const { id, artista, cancion, duracion} = song
                                        return(
    
                                            <div className="" key={id}>
                                                <h3>{artista}</h3>
                                                <p>{cancion}</p>
                                                <p>{duracion}</p>
                                                <button type="button" className="btn" onClick={() => agregarALibrary(song)}>Agregar a mi biblioteca</button>
                                            </div>
                                            
                                        )
                                    })
                                ) : <p>No ha lista</p>
                            }    

                        </div>

                    </form>
                </section>
                
            </div>
        </>
    )
}

export default SearchResults;