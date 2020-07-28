import React from 'react'
import './css/form.css'
import {Link} from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import axios from 'axios'
export default class Form extends React.Component{


constructor(props){
    super(props)

    this.state={}
}

handleChange = e => {

    this.setState({
        [e.target.name]: e.target.value

    });

    
};

handleSubmit = async e => {
    e.preventDefault();
    let correo = this.state.correo
    let ciudad =this.state.Ciudad
    let telefono1 =this.state.Telefono
    let nombreEntrega =this.state.nombreCompleto
    let direccion =this.state.Direccion 
    let codigoPostal =this.state.CodigoPostal
    let instruccionesEntrega =this.state.instucciones
    let departamento =this.state.departamento
    axios.post('http://34.95.0.138:8081/crearDireccion', {
        correo,
        ciudad,
        telefono1,
        nombreEntrega,
        direccion,
        codigoPostal,
        instruccionesEntrega,
        departamento
      })
      .then(function (response) {
        console.log(response);
        window.location="/CardView"  
    })
      .catch(function (error) {
        console.log(error);
        alert("error"+ error)
    });



};

render(){
   return(
       <React.Fragment>
           <section className="form">

                <div className="form-Linck">
                <Link to="/CardView">Tus direcciones</Link>
                <strong> z </strong>
                <Link to="/Insert">Agregar direccion</Link>
                </div>
                <div className="form-title">
                <h2>Agregar Dirección</h2>
   
                </div>
                

               <form onSubmit={this.handleSubmit}  className="form-post">
                    <div className="form-post_input ">
                        <label>Nombre completo</label>
                        <input required
                         name ="nombreCompleto"
                         onChange={this.handleChange}
                         value={this.state.nombreCompleto}
                         type="text"
                         className="form-control">

                         </input>
                    </div>
                    <div className="form-post_input">
                        <label>Direccion</label>
                        <input required
                         name ="Direccion"
                         onChange={this.handleChange}
                         value={this.state.Direccion}
                         type="text"
                         className="form-control"></input>
                    </div>
                    <div className="form-post_input">
                        <label>Apartamento, suite,unidad</label>
                        <input name ="departamento"
                         onChange={this.handleChange}
                         value={this.state.departamento}
                         type="text"
                         className="form-control"></input>
                    </div >
                    <div className="form-post_input">
                        <label>Telefono</label>
                        <input required
                        name ="Telefono"
                        onChange={this.handleChange}
                        value={this.state.Telefono}
                        type="text"
                        className="form-control"></input>
                    </div>
                    <div className="form-post_input">
                        <label>Ciudad</label>
                        <input name ="Ciudad"
                        onChange={this.handleChange}
                        value={this.state.Ciudad}
                        type="text"
                        className="form-control"></input>
                    </div>
                    <div className="form-post_input">
                        <label>Codigo Postal</label>
                        <input required
                        name ="CodigoPostal"
                        onChange={this.handleChange}
                        value={this.state.CodigoPostal}
                        type="text"
                        className="form-control"></input>
                    </div>
                    <div className="form-post_input">
                        <label>correo electronico</label>
                        <input required
                        name ="correo"
                        onChange={this.handleChange}
                        value={this.state.correo}
                        type="email"
                        className="form-control"></input>
                    </div>
                    <div className="form-post_input">
                        <label>instucciones de entrega</label>
                        <textarea name ="instucciones"
                        onChange={this.handleChange}
                        value={this.state.instucciones}
                        type="text"
                        className="form-control"></textarea>
                    </div>
                    <div className="buttonSubmit">
                    <button className="btn btn-danger " type="submit">Agregar direccion</button>
                    </div>
                    
               </form>
           </section>
       </React.Fragment>
   ) 
}

} 