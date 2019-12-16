import React from "react";
import "./addContact.css";
class AddContact extends React.Component {
  state = {
    name: "",
    description: "",
    avatar: "0",
    gender: "men",
    favorite: false
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
  GetFavorit = e => {
    this.setState({
      favorite: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, description, avatar, gender, favorite } = this.state;
    this.props.AddNewContact(name, description, avatar, gender, favorite);
  };
  render() {
    let url = `https://randomuser.me/api/portraits/${this.state.gender}/${this.state.avatar}.jpg`;
    console.log(this.state.favorite);
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
            <input
              className="custom-control-input"
              onChange={this.GetFavorit}
              type="checkbox"
              value={!this.state.favorite}
              id="customCheck1"
              required
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Add to favorite
            </label><br></br>
            <label className="label_txt" htmlFor="customRange3">
              Avatar id: {this.state.avatar}
            </label>
            <input
              type="range"
              className="custom-range"
              min="0"
              max="99"
              defaultValue={this.state.avatar}
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
              Create Contact
            </button>
          </div>
        </div>{" "}
      </form>
    );
  }
}

export default AddContact;
