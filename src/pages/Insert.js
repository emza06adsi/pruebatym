import React from 'react'
import Form from '../component/Form'
import Update from '../component/Update'
export default class Insert extends React.Component{


    update(){
        let data = sessionStorage.getItem("data")
        let dataJson = JSON.parse(data)
        console.log(dataJson)
        
        return (<Update data={dataJson} corre/>)
    }

    render(){
       
        if(sessionStorage.getItem("data")==null || sessionStorage.getItem("data")=="null" ){
            return(
       
                <React.Fragment>
           
                <Form/>
                
                </React.Fragment>)
        }

        else{

            return(
                <React.Fragment>
           
                {/* <Update /> */}
                {this.update()}
                </React.Fragment>
            )

        }
    }
   

}