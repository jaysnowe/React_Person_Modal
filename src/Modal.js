import React, {Component} from 'react'

const FormContainer = () => {
    return(
        <div id="form-container">
            <div>
                <form id="form-modal">
                    <div className="label-input">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="fname" maxlength="100" className="field"></input>
                        <p className="validity">xThis field is required</p>
                        
                    </div>
                    <div className="label-input">
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lname" maxlength="100" required className="field req"></input>
                        <p className="validity">xThis field is required</p>
                    </div>
                    <div className="label-input">
                        <label for="age">Age</label>
                        <input type="number" id="age" name="age" maxlength="3" required className="field req"></input>
                        <p className="validity">xThis field is required</p>
                    </div>
                    <div className="label-input">
                        <label for="gender">Gender</label>
                        <input type="text" id="gender" name="gender" required className="field req"></input>
                        <p className="validity">xThis field is required</p>
                    </div>
                    <div className="label-input">
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" maxlength="120" required className="field req"></input>
                        <p className="validity">xThis field is required</p>
                    </div>
                    <div className="label-input">
                        <label for="comments">Comments</label>
                        <input type="text" id="comments" name="comments" maxlength="500" className="field"></input>
                        <p className="validity">xThis field is required</p>
                    </div>
                    <div id="submit-holder">
                        <input id="submit-button" value="Submit" onclick="DisplayInfo(); submitCloseModal(); logSubmit();"></input>
                    </div>
                </form>
                <div className="close-holder">
                    <button id="close-button" onclick="closeModal()">Close</button>
                </div>
            </div>
        </div>
    )
}

class Modal extends Component{
    render(){
        return(
            <div className="glass"  onclick="closeModal()" id="glass">
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