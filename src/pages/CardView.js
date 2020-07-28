import React from 'react'
import PageLoading from '../component/loading'
import PageError from '../component/PageError'
import CardViewComponent from '../component/CardViewComponent'
export default class CardView extends React.Component{
  
    constructor(props){
        super(props)

        this.state={
            error:null,
            data:undefined,
            loading:true
        }
    }


    componentDidMount(){
        this.fetchData()
    }


    fetchData = async () => {

        this.setState({ loading: true, error: null })
        try {
            const data = await fetch("http://34.95.0.138:8081/getAllDireccionsByCorreo?correo="+sessionStorage.getItem("correo"))
            // alert("http://34.95.0.138:8081/getAllDireccionsByCorreo?correo="+sessionStorage.getItem("correo"))
            const datajson = await data.json()
            this.setState({ loading: false, data:datajson })

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    Modal (){
// debugger        
// console.log(this.state.data.objeto)     
return <CardViewComponent data={ this.state.data.objeto}/>
        
    }
        

    render(){
        if (this.state.loading === true) {
            return <PageLoading/> 

        }else if(this.state.error || this.state.data.objeto.length==0){
            return (<PageError />);
          }
          return (
            <React.Fragment>
             
            {this.Modal()}           

            </React.Fragment>
          )
    }
    
} 