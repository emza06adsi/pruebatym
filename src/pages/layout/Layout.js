import React from 'react'
import "./layout.css"
import Logo from "../../img/logo.png"
export default class Layout extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="body">
                <header className="header">
                <section>
                <img src={Logo}></img>
                </section>
                
                <h1>Direcciones</h1>
                
                </header>

                <main className="main">
                    {this.props.children}
                </main>

                <footer className="footer"></footer>
                </div>
            </React.Fragment>
        )
        
    }


}