import React, { Component } from 'react'
import FormContainer from './FormContainer'

 class FormComponent extends Component {
    constructor(){
        super();
        this.state ={
          firstName :"",
          lastName:"",
          country :"usa",
          message :"",
          gender:"",
          isConfirm : false
        }
        this.handeleOnchange = this.handeleOnchange.bind(this)
    
      }
      handeleOnchange = (event) =>{
        const {name,value,type,checked} = event.target
        type ==="checkbox" ? this.setState({[name] : checked}) : this.setState({[name] : value});
      }
    render() {
        return (
            <div>
                <FormContainer  handeleOnchange={this.handeleOnchange} data={this.state}/>
            </div>
        )
    }
}

export default FormComponent