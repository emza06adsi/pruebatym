import React from 'react'
import './css/cardViewComponent.css'
import { Link} from 'react-router-dom'
import AddImg from '../img/add.png'
import axios from 'axios'

export default class CardViewComponent extends React.Component{


    constructor(props)
    {
        super(props)
        
        this.mapData = this.mapData.bind(this)
    }
    
    state={
        data:null
    }

componentDidMount(){
    sessionStorage.setItem("data","null")
        // debugger
}

    remove(data){
        axios.post('http://34.95.0.138:8081/actualizarDireccion', {
        id:data.id,
        correo:"",
        ciudad:"",
        telefono1:"",
        nombreEntrega:"",
        direccion:"",
        codigoPostal:"",
        instruccionesEntrega:"",
        departamento:""
      })
      .then(function (response) {
        console.log(response);
        window.location="/CardView"  
    })
      .catch(function (error) {
        console.log(error);
        alert("error"+ error)
    });

    }

    mapData(){

        let destinos=this.props.data.filter(data => data.direccion!=null)     
    //    console.log(data)
        // this.setState({data:destinos})
        this.state.data=destinos
        // console.log(this.state.data)
        return(



            this.state.data.map(item=>

                {
                    // debugger
                    // console.log(item)
                    return(
                        <section key={item} className="cardView">
                  
                        <p className="cardView-nombre">{item.nombreEntrega}</p> 
                        <p>{item.direccion}</p>
                        <p>{item.ciudad}</p>
                        <div className="cardView-telefono">
                        <p className="cardView-telefono_p">Telefono:</p>
                        <p>{item.telefono1}</p>
                        </div>
                        <div className="cardView-telefono">
                        <p className="cardView-telefono_p">instrucciones de envio:</p>   
                        <p>{item.instruccionesEntrega}</p>   
                        </div>
                        <div className="cardView-btn">
                          <button className="btn btn-light" onClick={()=>{sessionStorage.setItem("data",JSON.stringify(item));window.location="/Insert"}}>editar</button>
                          <div className="cardView-btn_">
                          <button className="btn btn-light btnRemove " onClick={()=>{this.remove(item)}}>remover</button>
                        
                          </div>
                        </div>
                        </section>  
      
                )
                    
                }
                
            )
        )
    
    

}


    render(){
        
            return(
                <React.Fragment>

                    <article className="mainCard">
            <section className="title">
               <h2>Tus Direcciones</h2> 
                </section>
              
                    <div className="cardViews">

                    <section className="cardView_">
                    <Link to="/Insert">
                    <img src={AddImg}></img>
                        <h3>Agregar</h3>
                    
                    </Link>
                    </section> 

                {this.mapData()}
                  
                    </div>
                    </article>



                </React.Fragment>
            )  
                }


} 


