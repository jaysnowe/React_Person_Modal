import React, {Component} from 'react'

//{} are an object--keys and values
const fieldAttributes = {
    firstName:{
        label: "First Name",
        abbreviation: "fname",
    }, 
    lastName: {
        label: "Last Name", 
        abbreviation: "lname",
    },
    ageAttribute: {
        label: "Age",
        abbreviation: "age",
    },
    genderAttribute:{
        label: "Gender", 
        abbreviation: "gender",
    },
    emailAttribute:{
        label: "Email",
        abbreviation: "email",
    },
    commentsAttribute:{
        label: "Comments",
        abbreviation: "comments"
    },
}

//more modern than { return()}--can only be used if 1 thing is returned & no logic
const FieldInput = (attribute, state) => (<div className="label-input">
<label for="attribute.abbreviation">{attribute.label}</label>
<input type="text" id="attribute.abbreviation" name="attribute.abbreviation" value={state["fname"]} maxlength="100" className="field" onChange={() => {}}></input>
<p className="validity">xThis field is required</p>

</div>)
//onChange{this.handleChange} - currently left as empty function



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
        const fieldValueArray = Object.values(fieldAttributes)
        return(
            <form id="form-modal">
                {
                    //more correct way to write components with react
                    fieldValueArray.map((attribute) => < FieldInput attribute={attribute} state={this.state}/>)

                    // fieldValueArray.map(attribute) => {
                    //     return fieldInput(attribute, this.state)
                    // }
                
                /* <div className="label-input">
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
                </div> */}
            </form>
        );
    }
    
}
export default Form;