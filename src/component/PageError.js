import React from 'react'
import ImgError from '../img/NoAddress.png'
import {Link} from 'react-router-dom'
import "./css/pageError.css"
export default class PageError extends  React.Component{

    render(){
        return(
            <React.Fragment>

            <article >
                <section className="title">
               <h2>Tus Direcciones</h2> 
                </section>
                <section className="imageError">
                    <img src={ImgError}/>
                    <h3>no tienes direcciones</h3>
                    <Link to="/Insert">Agregar direcciones</Link>
                </section>
            </article>

        
            </React.Fragment>
        )
    }

}