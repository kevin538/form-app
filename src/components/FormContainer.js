import React, { Component } from 'react'

 class FormContainer extends Component {
    render() {
        return (
        <div className="container">
            <div className="row">
            <div className="col-25">
                <label>First Name</label>
            </div>
            <div className="col-75">
                <input  type="text" name="firstName" value={this.props.data.firstName} onChange={this.props.handeleOnchange}></input>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label>Last Name</label>
            </div>
            <div className="col-75">
                <input type="text" name="lastName" value={this.props.data.lastName} onChange={this.props.handeleOnchange}></input>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label></label>
            </div>
            <div className="col-75">
                <select  name="country" onChange={this.props.handeleOnchange} value={this.props.data.country}>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                </select>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label>Gender</label>
            </div>
            <div className="col-75">
                <label className="container">
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={this.props.data.gender === "male"}
                            onChange={this.props.handeleOnchange}
                        /> Female
                    </label>
                    <label className="container">
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.props.data.gender === "female"}
                            onChange={this.props.handeleOnchange}
                        /> Female
                    </label>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label>Message</label>
            </div>
            <div className="col-75">
                <textarea onChange={this.props.handeleOnchange} value={this.props.data.message}  name="message"/> 
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label>Confirm</label>
            </div>
            <div className="col-75">
                <label className="container">
                <input type="checkbox" checked={this.props.data.isConfirm} name="isConfirm" onChange={this.props.handeleOnchange}/>
                <span class="checkmark"></span>
                </label>
            </div>
            </div>
            <div className="row">
            <input type="submit" value="Submit"/>
            </div>
        </div>
    )
    
    }
}

export default FormContainer