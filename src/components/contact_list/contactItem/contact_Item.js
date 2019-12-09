import React from "react";
import "./contact_Item.css";
// const e = React.createElement;

class ContactItem extends React.Component {
  state = {
    avatar: this.props.avatar,
    description: this.props.description,
    name: this.props.name,
    gender: this.props.gender,
    facebbok: this.props.facebbok,
    twitt: this.props.twitt,
    linked: this.props.linked,
    messs: this.props.messs,
    skyPe: this.props.skyPe,
    btnStatus: false,
    bordered: false,

    id: this.props.id
  };
  RandomAvatar = () => {
    const newAvatar = Math.floor(Math.random() * 99);
    this.setState({
      avatar: newAvatar,
      btnStatus: !this.state.btnStatus
    });
  };
  Active = () => {
    this.setState({
      bordered: true
    });
  };
  UnActive = () => {
    this.setState({
      bordered: false
    });
  };
  render() {
    const {
      avatar,
      description,
      name,
      gender,
      facebbok,
      twitt,
      linked,
      messs,
      skyPe,
      id,
    } = this.state;

    let url = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
    let fb = `https://www.facebook.com/${facebbok}`;
    let tw = `https://twitter.com/${twitt}`;
    let lin = `https://www.linkedin.com/${linked}`;
    let skype = `https://www.skype.com/${skyPe}`;
    let me = `https://kyivstar.ua/${messs}`;
    let btnStyle = "btn btn-warning random";
    let border = "col-sm-6 offset-3 block";
    let starStatus = "star";

    if (this.state.btnStatus) {
      btnStyle = "btn btn-danger random";
    }
    if (this.state.bordered) {
      border = "col-sm-6 offset-3 block bordered";
    }
    if (this.props.favorite) {
      starStatus = "star-actived";
      border = "col-6 offset-3 block favor";
    }

    return (
      <div id={id} className="row d-flex">
        <div
          onMouseEnter={this.Active}
          onMouseLeave={this.UnActive}
          className={border}
        >
          <div className="panel">
            <div className="panel-body p-t-10">
              <div className="media-main">
                <a className="pull-left" href="#">
                  <img className="thumb-lg img-circle bx-s" src={url} alt="" />
                </a>
                <div className="pull-right btn-group-sm">
                  <a
                    href="#"
                    className="btn btn-success tooltips"
                    data-placement="top"
                    data-toggle="tooltip"
                    data-original-title="Edit"
                  >
                    <i className="fa fa-pencil"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-danger tooltips"
                    data-placement="top"
                    data-toggle="tooltip"
                    data-original-title="Delete"
                    onClick={this.props.onDelete}
                  >
                    <i className="fa fa-close"></i>
                  </a>
                </div>
                <div className="info">
                  <p className="text-muted">{gender}</p>
                  <h4>{name}</h4>
                  <p className="text-muted">{description}</p>
                </div>
              </div>
              <div className="clearfix"></div>
              <hr />
              <ul className="social-links list-inline p-b-10  d-flex">
                <li>
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    target="blank"
                    href={fb}
                    data-original-title="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    target="blank"
                    href={tw}
                    data-original-title="Twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    target="blank"
                    href={lin}
                    data-original-title="LinkedIn"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    target="blank"
                    href={skype}
                    data-original-title="Skype"
                  >
                    <i className="fa fa-skype"></i>
                  </a>
                </li>
                <li>
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    className="tooltips"
                    target="blank"
                    href={me}
                    data-original-title="Message"
                  >
                    <i className="fa fa-envelope-o"></i>
                  </a>
                </li>
              </ul>
              <span onClick={this.props.Favor} className={starStatus}>
                <i className="fa fa-star"></i>
              </span>
              <button
                type="button"
                className={btnStyle}
                onClick={this.RandomAvatar}
              >
                RandomFace
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactItem;
