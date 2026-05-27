import React from "react";
import SongStyle from "./SongStyle.css"



const Songs = ({canciones, agregarALibrary}) => {

    return (
        <section className="songs">
            {
                canciones.map(song => {
                    const {artista, cancion, duracion, id} = song;
                    
                    return(
                        <div className="contenedor" key={id}>
                            <h2 className="artista">{artista}</h2>
                            <p className="cancion">{cancion}</p>
                            <p className="time">{duracion}</p>
                            <div
                            >
                                <button type="button" className="btn" onClick={() => agregarALibrary(song)}>Agregar a mi biblioteca</button>
                            </div>
                        </div>

                     )
                })
            }
            
        </section>
    )
}

export default Songs;
           