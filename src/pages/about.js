import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "./about.css"
export default class About extends React.Component{

    constructor(props){
        super(props)
    
        this.state={}
    }
    
    handleChange = e => {
    
        this.setState({
            [e.target.name]: e.target.value
    
        });
    
        
    };
    
    handleSubmit = async () => {
    
        let correo = this.state.correo
     
        if(correo ==""){
            document.getElementById("url").style.borderColor = "#cb161d";
        }
        else{
            sessionStorage.setItem("correo",correo)
            window.location="/CardView"
        }

    }
    
        render(){
            return(
                 <React.Fragment>
                     <section className="formUrl">
                     <input
                     id="uri"
                     name ="correo"
                         onChange={this.handleChange}
                         value={this.state.correo}
                         type="text"
                         className="form-control"></input>    
                     <button 
                      onClick={()=>{this.handleSubmit()}} className="btn btn-info">ingresar correo</button>
                     </section>
                     
             </React.Fragment> )
        }


} 