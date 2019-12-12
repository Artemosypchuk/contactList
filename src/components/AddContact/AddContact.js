import React from "react";
import "./addContact.css";
class AddContact extends React.Component {

  render() {
   
    return (
    <form type="text">
      <div className="l-side">
        
        <div>
          <h6>Enter your full name</h6>
          <input name="name" type="text" />
        </div>
        <div>
          <h6>Enter some description</h6>
          <input name="name" type="text" />
        </div>
        <div><h6>Select your gender</h6>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio1"
            name="customRadio"
            className="custom-control-input"
          />
          <label className="custom-control-label" for="customRadio1">
            Man
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio2"
            name="customRadio"
            className="custom-control-input"
          />
          <label className="custom-control-label" for="customRadio2">
            Woman
          </label>
          </div>
          </div>
        <div className="col-3 p-0"><h6>Choose your avatar number</h6>
        <input type="number" step="1" defaultValue="5" min="1" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
        </div>
        <div>
        <button type="button submit" className="btn btn-primary btn-lg btn-block">Create Contact</button>
        </div>
       
      </div> </form>
    );
  }
}

export default AddContact;