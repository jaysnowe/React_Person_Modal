import React, {Component} from 'react'

class Modal extends Component{
    render(){
        return(
            <div class="glass"  onclick="closeModal()" id="glass">
            <div class="w3-modal-content">
                <div id="flex" class="flex">
                    <h4>Create a Record</h4>
                    <p id="X" class="X">X</p>
                </div>
                <div id="form-container">
                    <div>
                        <form id="form-modal">
                            <div class="label-input">
                                <label for="fname">First Name</label>
                                <input type="text" id="fname" name="fname" maxlength="100" class="field"></input>
                                <p class="validity">xThis field is required</p>
                                
                            </div>
                            <div class="label-input">
                                <label for="lname">Last Name</label>
                                <input type="text" id="lname" name="lname" maxlength="100" required class="field req"></input>
                                <p class="validity">xThis field is required</p>
                            </div>
                            <div class="label-input">
                                <label for="age">Age</label>
                                <input type="number" id="age" name="age" maxlength="3" required class="field req"></input>
                                <p class="validity">xThis field is required</p>
                            </div>
                            <div class="label-input">
                                <label for="gender">Gender</label>
                                <input type="text" id="gender" name="gender" required class="field req"></input>
                                <p class="validity">xThis field is required</p>
                            </div>
                            <div class="label-input">
                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" maxlength="120" required class="field req"></input>
                                <p class="validity">xThis field is required</p>
                            </div>
                            <div class="label-input">
                                <label for="comments">Comments</label>
                                <input type="text" id="comments" name="comments" maxlength="500" class="field"></input>
                                <p class="validity">xThis field is required</p>
                            </div>
                            <div id="submit-holder">
                                <input id="submit-button" value="Submit" onclick="DisplayInfo(); submitCloseModal(); logSubmit();"></input>
                            </div>
                        </form>
                        <div class="close-holder">
                            <button id="close-button" onclick="closeModal()">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
            
        )
    }
}
export default Modal