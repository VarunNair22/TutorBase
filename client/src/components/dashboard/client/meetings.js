import { applyMiddleware } from "@reduxjs/toolkit";
import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./meetings.css";
import MeetingCard from "../../meetingCard/MeetingCard";

class Meetings extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownValue: "All",
      appointments: [],
    };
  }

  componentDidMount() {
    this.setState({
      appointments: [
        {
          name: "Jason",
          color: "Completed",
        },
        {
          name: "Jeremy",
          color: "Pending",
        },
        {
          name: "David",
          color: "Upcoming",
        },
        {
          name: "Jacob",
          color: "Denied",
        },
      ],
    });
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  changeValue = (e) => {
    this.setState(
      {
        dropdownValue: e.target.innerText,
        dropdownOpen: !this.state.dropdownOpen,
      },
      () => console.log("DropDownValue: " + this.state.dropdownValue)
    );
  };

  render() {
    const appointments = this.state.appointments;
    const dropDownValue = this.state.dropdownValue

    const filteredDropdown = appointments.filter(
      (appointment) => (appointment.color === dropDownValue) || dropDownValue === "All"
    );

    return (
      <Container fluid>
        <Row className="title">
          <div class="profile-text">Settings</div>
        </Row>

        <hr></hr>

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret color="secondary" outline>
            {this.state.dropdownValue}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.changeValue} >All</DropdownItem>
            <DropdownItem onClick={this.changeValue} >Completed</DropdownItem>
            <DropdownItem onClick={this.changeValue} >Pending</DropdownItem>
            <DropdownItem onClick={this.changeValue} >Upcoming</DropdownItem>
            <DropdownItem onClick={this.changeValue} >Denied</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {filteredDropdown.map((appointment) => (
          <MeetingCard appointment={appointment} />
        ))}
      </Container>
    );
  }
}

export default Meetings;
