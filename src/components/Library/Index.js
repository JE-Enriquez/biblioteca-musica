import React from "react";
import "./LibraryStyle.css"

const Library = ({myLibrary, setMiLibrary}) => {



    return(

        <>
            <section className="library">
                <h2 className="library__tittle">Library</h2>
                
                    <div>
                        {
                            myLibrary.map(song => {
                                const {artista, cancion, duracion, id} = song;
                                
                                return(
                                    <article className="" key={id}>
                                        <h3>{artista}</h3>
                                        <p>{cancion}</p>
                                        <p>{duracion}</p>
                                    </article>

                                )


                            })       
                        }

                    </div>
                 
            </section>
        
        </>
    )
}

export default Library;