import React, {Component} from 'react'
import Modal from './Modal'

class App extends Component{
    render(){
        return(
        <div className="parent">
            <h1>Modal - Create a Person Record</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <h3>Text that will appear behind the modal</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            <button id="create-button" onclick="showModal()">Create a Record</button>
            <Modal />
            <div>
                <p id="log"></p>    
                <div id="response-container">
                    <div id="fname_response"></div>
                    <div id="lname_response"></div>
                    <div id="age_response"></div>
                    <div id="gender_response"></div>
                    <div id="email_response"></div>
                    <div id="comments_response"></div>
                </div>
            </div>
        </div>
        )
    }
  
  }
  export default App