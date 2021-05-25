import React, {Component} from 'react'
import Form from './Form'

const FormContainer = () => {
    return(
        <div id="form-container">
            <div>
                <Form />
                <div className="close-holder">
                    <button id="close-button">Close</button>
                </div>
            </div>
        </div>
    )
}


class Modal extends Component{
    // constructor(){

    // }
    render(){
        return(
            <div className="glass" id="glass">
            <div className="w3-modal-content">
                <div id="flex" className="flex">
                    <h4>Create a Record</h4>
                    <p id="X" className="X">X</p>
                </div>
                <FormContainer />
            </div>
        </div> 
        )
    }
}
export default Modal