import React, {Component} from 'react'



class Form extends Component{
    initialState = {
        fname: '',
        lname: '',
        age: '',
        gender: '',
        email: '',
        comments: '',
    }
    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target
        
        this.setState({
            [name]: value,
        })
    }

    render(){
        const {fname, lname, age, gender, email, comments} = this.state;

        return(
            <form id="form-modal">
                <div className="label-input">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="fname" value={fname} maxlength="100" className="field" onChange={this.handleChange}></input>
                    <p className="validity">xThis field is required</p>
                    
                </div>
                <div className="label-input">
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" value={lname} maxlength="100" required className="field req" onChange={this.handleChange}></input>
                    <p className="validity">xThis field is required</p>
                </div>
                <div className="label-input">
                    <label for="age">Age</label>
                    <input type="number" id="age" name="age" value={age} maxlength="3" required className="field req" onChange={this.handleChange}></input>
                    <p className="validity">xThis field is required</p>
                </div>
                <div className="label-input">
                    <label for="gender">Gender</label>
                    <input type="text" id="gender" name="gender" value={gender} required className="field req" onChange={this.handleChange}></input>
                    <p className="validity">xThis field is required</p>
                </div>
                <div className="label-input">
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" value={email} maxlength="120" required className="field req" onChange={this.handleChange}></input>
                    <p className="validity">xThis field is required</p>
                </div>
                <div className="label-input">
                    <label for="comments">Comments</label>
                    <input type="text" id="comments" name="comments" value={comments} maxlength="500" className="field" onChange={this.handleChange}></input>
                    <p className="validity">xThis field is required</p>
                </div>
                <div id="submit-holder">
                    <input id="submit-button" value="Submit" onclick="DisplayInfo(); submitCloseModal(); logSubmit();"></input>
                </div>
            </form>
        );
    }
    
}
export default Form;