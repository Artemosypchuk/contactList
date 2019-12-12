import React from "react";
import "./addContact.css";
class AddContact extends React.Component {
  state = {
    name: "",
    description: "",
    avatar: "",
    gender: ""
  };
  GetGender = e => {
    this.setState({
      gender: e.target.value
    });
  };
  GetName = e => {
    this.setState({
      name: e.target.value
    });
  };
  GetDesc = e => {
    this.setState({
      description: e.target.value
    });
  };
  GetAvatar = e => {
    this.setState({
      avatar: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, description, avatar, gender } = this.state;
    this.props.AddNewContact(name, description, avatar, gender);
  };
  render() {
    console.log(this.state.name);
    return (
      <form onSubmit={this.onSubmit} type="text">
        <div className="l-side">
          <div>
            <h6>Enter your full name</h6>
            <input name="name" type="text" onChange={this.GetName} />
          </div>
          <div>
            <h6>Enter some description</h6>
            <input name="description" type="text" onChange={this.GetDesc} />
          </div>
          <div>
            <h6>Select your gender</h6>
            <div className="custom-control custom-radio"></div>
            <div className="custom-control custom-radio">
              <input name="name" type="text" onChange={this.GetGender} />
            </div>
          </div>
          <div className="col-3 p-0">
            <h6>Choose your avatar number</h6>
            <input
              type="number"
              name="avatar"
              step="1"
              defaultValue="5"
              min="1"
              onChange={this.GetAvatar}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div>
            <button
              type="button submit"
              className="btn btn-primary btn-lg btn-block"
            >
              Create Contact
            </button>
          </div>
        </div>{" "}
      </form>
    );
  }
}

export default AddContact;
