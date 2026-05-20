import React, {Component} from "react";

class Header extends Component {

    
componentDidMount(){
    console.log('Load app sucsefull')
  }
    
    render(){
        return(
            <header className="">
                <div className="head">
                    <h1 className="head__titulo">YoungTube</h1>

                </div>
            </header>
        )
    }

}
export default Header