import React from "react";
import "./EditContact.css";

class EditContact extends React.Component {
  state = {
    name: this.name,
    description: this.description,
    avatar: this.avatar,
    gender: this.gender,
    id: this.id
  };
  GetGender = e => {
    this.setState({
      gender: e.target.value
    });
  };
  GetId = () => {
    console.log(this.id);
    this.setState({
      id: this.id
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
  onChanged = e => {
    const { name, description, avatar, gender, id } = this.state;
    this.GetId();
    this.props.EditContact(name, description, avatar, gender, id);
    e.preventDefault();
    console.log(this.gender, this.id);
  };
  render() {
    this.props.Editor.map(item => {
      this.name = item.name;
      this.description = item.description;
      this.avatar = item.avatar;
      this.gender = item.gender;
      this.id = item.id;
    });
    if (this.state.gender === undefined) {
      this.state.gender = this.gender;
    }
    if (this.state.avatar === undefined) {
      this.state.avatar = this.avatar;
    }
    let url = `https://randomuser.me/api/portraits/${this.state.gender}/${this.state.avatar}.jpg`;

    return (
      <form onSubmit={this.onChanged} type="text">
        <div className="l-side">
          <div>
            <h6>Enter your full name</h6>
            <input
              name="name"
              placeholder={this.name}
              type="text"
              onChange={this.GetName}
            />
          </div>
          <div>
            <h6>Enter some description</h6>
            <input
              name="description"
              placeholder={this.description}
              type="text"
              onChange={this.GetDesc}
            />
          </div>
          <div>
            <h6>Select your gender</h6>
            <div className="custom-control custom-radio">
              <input
                name="name"
                placeholder={this.gender}
                type="text"
                onChange={this.GetGender}
              />
              {/* <select
                placeholder={this.gender}
                className="custom-select custom-select-lg mb-3">
                <option selected>{this.gender}</option>
                <option value="1">women</option>
                <option value="2">men</option>
                
              </select> */}
            </div>
          </div>
          <div className="col-3 p-0 label_txt">
            <h6>Scroll your avatar Default is: {this.avatar}</h6>
            <label className="label_txt" htmlFor="customRange3">
              now: {this.state.avatar}
            </label>
            <input
              type="range"
              className="custom-range"
              min="0"
              max="99"
              defaultValue={this.avatar}
              onChange={this.GetAvatar}
              step="1"
              id="customRange3"
            ></input>
          </div>
          <div className="imgEdit">
            <img src={url} alt="Avatar" />
          </div>
          <div>
            <button
              type="button submit"
              className="btn btn-primary btn-lg btn-block"
            >
              Edit Contact
            </button>
          </div>
        </div>{" "}
      </form>
    );
  }
}

export default EditContact;
