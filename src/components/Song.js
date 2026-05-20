import React, {Component} from "react";

class Songs extends Component {

    constructor(props){
        super(props)
        this.state = [
    
            {
                id: 1,
                artista: 'Artista 1',
                cancion: 'Cancion 1',
                duracion: '3:25 minutos'
                
            },
            {
                id: 2,
                artista: 'Artista 2',
                cancion: 'Cancion 2',
                duracion: '3:34 minutos'
                
            },
    
            {
                id:3,
                artista: 'Artista 3',
                cancion: 'Cancion 3',
                duracion: '3:38 minutos'
            }
        
        ]
    } 

    showSongs = (setShow = []) => {
        const show = this.state


        for(let i ; i < show.length ; i++){
            setShow[i] = this.state[i]
        }

        return setShow
    
    }
    
    render(){
        return(
            <main>
                <div className="contenedor">
                    <h2 className="artista">{this.state[0].artista}</h2>
                    <p className="cancion">{this.state[0].cancion}</p>
                    <p className="time">{this.state[0].duracion}</p>
                   
                </div>

                <div className="contenedor">
                    <h2 className="artista">{this.state[1].artista}</h2>
                    <p className="cancion">{this.state[1].cancion}</p>
                    <p className="time">{this.state[1].duracion}</p>
                   
                </div>

                <div className="contenedor">
                    <h2 className="artista">{this.state[2].artista}</h2>
                    <p className="cancion">{this.state[2].cancion}</p>
                    <p className="time">{this.state[2].duracion}</p>
                   
                </div>

            </main>
            
        )
        
    }

}

export default Songs