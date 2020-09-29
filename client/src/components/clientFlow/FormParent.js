import React, { Component, Fragment } from "react";
import Step1 from "./1_subject";
import Step2 from "./2_class";
import Step3 from "./3_selectTutor";
import Step4 from "./4_selectDateTime";
import Step5 from "./5_reserve";
import "./clientflow.css";

class FormParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientName: "",
            currentStep: 1,
            furthestStep: 1,
            subject: "",
            course: "",
            tutor: "",
            date: "",
            startTime: "",
            endTime: "",
            notes: "",
            tutor_ids: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangeCourse = this.handleChangeCourse.bind(this);
    }
    
    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value });
        this.nextStep();
    }

    handleChangeTime = event => {
        // const { name, value } = event.target
        this.setState({ furthestStep: this.state.furthestStep + 1 });
    }

    handleChangeCourse = event => {
        const { name, value } = event.target
        this.setState({[name]: value, tutor_ids: [event.target.dataset.tutors]});
        this.nextStep();
    }

    prevStep = () => {
        let step = this.state.currentStep;
        step = step <= 1 ? 1 : step - 1;
        this.setState({ currentStep: step });
    }

    nextStep = () => {
        let step = this.state.currentStep;
        step = step >= 4 ? 5 : step + 1;
        this.setState({ currentStep: step });
        if (step > this.state.furthestStep)
            this.setState({ furthestStep: step });
    }

    handleSubmit = event => {
        event.preventDefault();

        //Send verification email to tutor
        var url = "http://localhost:9000/email-user/tutor";
        var headers = {
            "Content-Type": "application/json"
        }
        var body = {
            clientName: this.state.clientName,
            tutorName: this.state.tutor,
            date: this.state.date,
            class: this.state.course,
            notes: this.state.notes,
            endTime: this.state.endTime,
            startTime: this.state.startTime,

        }
        fetch(url, {method: 'POST', headers: headers, body: body})
            .then(res => {
                console.log(res);
            })
        

        //Send confirmation email to client
        url = "http://localhost:9000/email-user/client";
        fetch(url, {method: 'POST', headers: headers, body: body})
            .then(res => {
                console.log(res);
            }) 
    }

    prevButton() {
        if (this.state.currentStep !== 1) {
            return (
                <button className="btn btn-secondary" type="button" onClick={this.prevStep}>Previous</button>
            );
        }
        return null;
    }

    nextButton() {
        if (this.state.currentStep < this.state.furthestStep) {
            return (
                <button className="btn btn-danger" type="button" onClick={this.nextStep}>Next</button>
            );
        }
        return null;
    }

    render() {
        const formProps = {
            currentStep: this.state.currentStep,
            handleChange: this.handleChange,
        }

        return (
            <Fragment>
                <h2 class="text-center mt-4 fragment-title">Schedule a Tutoring Session</h2>
                <div class="text-center mt-3 mb-2">
                    <div class="ml-1 mr-1 nav-btn">{this.prevButton()}</div>
                    <div class="ml-1 mr-1 nav-btn">{this.nextButton()}</div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <Step1 {...formProps} subject={this.state.subject} />
                    <Step2 {...formProps} subject={this.state.subject} course={this.state.course} handleChangeCourse={this.handleChangeCourse} />
                    <Step3 {...formProps} course={this.state.course} tutor_ids={this.state.tutor_ids} tutor={this.state.tutor}/>
                    <Step4 {...formProps} startTime={this.state.startTime} endTime={this.state.endTime} handleChangeTime={this.handleChangeTime} />
                    <Step5 {...formProps} date={this.state.date} 
                        startTime={this.state.startTime} 
                        endTime={this.state.endTime}
                        notes={this.state.notes} />
                </form>
            </Fragment>
        );
    }
}

export default FormParent;