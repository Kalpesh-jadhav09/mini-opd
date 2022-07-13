import React from 'react'
import { useNavigate } from "react-router-dom";
import { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      mobNo: '',
      address: '',
      city: '',
      bloodType: '',
      doctor: ''
    }
    this.changeFirstName = this.changeFirstName.bind(this)
    this.changeLastName = this.changeLastName.bind(this)
    this.changemobNo = this.changemobNo.bind(this)
    this.changeaddress = this.changeaddress.bind(this)
    this.changecity = this.changecity.bind(this)
    this.changebloodType = this.changebloodType.bind(this)
    this.changedoctor = this.changedoctor.bind(this)
  }


  changeFirstName(event) {
    this.setState(
      {
        firstName: event.target.value
      }
    )
  }

  changeLastName(event) {
    this.setState(
      {
        lastName: event.target.value
      }
    )
  }

  changemobNo(event) {
    this.setState(
      {
        mobNo: event.target.value
      }
    )
  }

  changeaddress(event) {
    this.setState(
      {
        address: event.target.value
      }
    )
  }

  changecity(event) {
    this.setState(
      {
        city: event.target.value
      }
    )
  }

  changebloodType(event) {
    this.setState(
      {
        bloodType: event.target.value
      }
    )
  }

  changedoctor(event) {
    this.setState(
      {
        doctor: event.target.value
      }
    )
  }
  // const Receptionist = () => {
  //   const navigate = useNavigate();
    render() {
      return (
        <>
          <form>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label for="inputfname">First Name</label>
                <input type="text" onChange={this.changeFirstName} value={this.state.firstName} className="form-control" id="inputfname" placeholder="First Name" />
              </div>
              <div className="form-group col-md-3">
                <label for="inputLname">Last Name</label>
                <input type="text" onChange={this.changeLastName} value={this.state.lastName} className="form-control" id="inputlname" placeholder="Last Name" />
              </div>
              <div className="form-group col-md-3">
                <label for="mobno">Mobile No</label>
                <input type="text" onChange={this.changemobNo} value={this.state.mobNo} className="form-control" id="inputmobno" placeholder="Mobile No" />
              </div>
              <div className="form-group col-md-3">
                <label for="inputAddress">Address</label>
                <input type="text" onChange={this.changeaddress} value={this.state.address} className="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label for="inputCity">City</label>
                <input type="text" onChange={this.changecity} value={this.state.city} className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-2">
                <label for="inputBtype">Blood Type</label>
                <select id="inputBtype" className="form-control">
                  <option selected>Choose...</option>
                  <option>A+</option>
                  <option>B+</option>
                  <option>A-</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label for="Doctor">Assigned Doctor</label>
                <select id="Doctor" className="form-control">
                  <option selected>Choose...</option>
                  <option>Dr. P.M. Shinde</option>
                  <option>Dr. R.D. Darade</option>
                  <option>Dr. R.D.Jadhav</option>
                  <option>Dr. M.D. Shah</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit Info.</button>
          </form>
        </>
      )
    }
  }


export default render();
