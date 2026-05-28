import React, {useState} from "react";
import "./HeaderStyle.css"

const Header = () => {

    const [appName] = useState("YoungTube")
    
    
    return(
        <header className="">
            <div className="head">
                <h1 className="head__titulo">{appName}</h1>

            </div>
        </header>
    )
    

}
export default Header