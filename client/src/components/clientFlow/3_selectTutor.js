import React, { Component } from "react";
import classNames from "classnames";
import TutorCard from "../tutorCard/TutorCard";

class Step3 extends Component {
    constructor(props) {
        super(props)
        this.state = { course: "", tutors: [] };
    }

    componentDidUpdate() {
        // Load tutors if they have not yet been loaded in 
        if (this.state.course !== this.props.course) {
            this.setState({course: this.props.course, tutors: []})
            // Retrieve all User objects with IDs in this.props.tutor_ids
            fetch("http://localhost:9000/catalog/tutors", {method: 'POST', body: JSON.stringify({ tutor_ids: this.props.tutor_ids }), headers: {'Content-Type': 'application/json'}})
                .then(res => {
                    console.log(res);
                    return res.json()
                })
                .then(users => { 
                    console.log(users);
                    users.map(user => 
                        this.setState(prevState => ({
                            tutors: [...prevState.tutors, {id: user._id, email: user.email, name: user.first_name + " " + user.last_name, info: user.tutor, next_avail: ""}]
                        }))
                    )
                });
        }
    }

    render() {        
        // Only render this step if currentStep matches
        if (this.props.currentStep !== 3) 
            return null;
        
        return (
            <div class="form-group text-center">
                <h3 class="hr mt-1">Select a Tutor</h3>
                <div class="row justify-content-md-center">
                    {this.state.tutors.map(tutor => 
                        <div class="radio-option col-md-3 mb-4 ml-3 mr-3">
                            <label>
                                <input className="form-input" type="radio" name="tutor" value={tutor.name} onChange={this.props.handleChange} checked={this.props.tutor === tutor.name}></input>
                                <p className="form-label"><TutorCard data={tutor}/></p>
                            </label>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Step3;