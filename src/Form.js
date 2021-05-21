import React, {Component} from 'react'

//more modern than { return()}--can only be used if 1 thing is returned & no logic
const FieldInput = ({attribute, state}) => (
    <div className="label-input">
        <label htmlFor="attribute.abbreviation">{attribute.label}</label>
        <input type="text" id="attribute.abbreviation" name="attribute.abbreviation" value={state[attribute.abbreviation]} maxLength="100" className="field" onChange={this.clickHandler.bind(this)}></input>
        <p className="validity">xThis field is required</p>

</div>)
//onChange{this.handleChange} 

class Form extends Component{
    //state = this.initialState
    constructor(props){
        super(props)

        this.state={
            fname: '',
            lname: '',
            age: '',
            gender: '',
            email: '',
            comments: '',
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    //{} are an object--keys and values
     fieldAttributes = {
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
            abbreviation: "comments",
        },
    }

    

    initialState = {
        fname: '',
        lname: '',
        age: '',
        gender: '',
        email: '',
        comments: '',
    }
    
    clickHandler = (event) => {
        const val = event.target.value;
        this.setState ({
            [event.target.name]: val
        });
    
        //  const {name, value} = event.target
            
        // this.setState({
        //     [name]: value
        // });
    }

    render(){
        //const {fname, lname, age, gender, email, comments} = this.state;
        const fieldValueArray = Object.values(this.state.fieldAttributes)
        
       
        
        console.log(Object.values(this.state.fieldAttributes));
        console.log(Object.values(this.state.initialState));
        return(
            <form id="form-modal">
                {/* {console.log(fieldValueArray.first)} */}
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