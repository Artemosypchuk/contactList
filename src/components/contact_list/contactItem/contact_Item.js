import React from "react";
import "./contact_Item.css";
// const e = React.createElement;
const ContactItem = ({avatar,description,name,gender,facebbok,twitt,linked,messs,skyPe}) => {
    let url = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;
    let fb = `https://www.facebook.com/${facebbok}`;
    let tw = `https://twitter.com/${twitt}`;
    let lin=`https://www.linkedin.com/${linked}`;
    let skype=`https://www.skype.com/${skyPe}`;
    let me=`https://kyivstar.ua/${messs}`;
    return(
        // "div", {
        //     className: "row d-flex"
        // },
        // e(
        //     "div", {
        //         className: "col-sm-6 offset-3 block"
        //     },
        //     e(
        //         "div", {
        //             className: "panel"
        //         },
        //         e(
        //             "div", {
        //                 className: "panel-body p-t-10"
        //             },
        //             [
        //                 e(
        //                     "div", {
        //                         key: 'a0',
        //                         className: "media-main"
        //                     },
        //                     [
        //                         e(
        //                             "a", {
        //                                 key: "a1",
        //                                 className: "pull-left",
        //                                 href: "{foo}"
        //                             },
        //                             e("img", {
        //                                 className: "thumb-lg img-circle bx-s",
        //                                 src: url,
        //                                 alt: "none"
        //                             })
        //                         ),
        //                         e(
        //                             "div", {
        //                                 key: "q2",
        //                                 className: "pull-right btn-group-sm"
        //                             },
        //                             [
        //                                 e(
        //                                     "a", {
        //                                         key: "w1",
        //                                         href: "{foo}",
        //                                         className: "btn btn-success tooltips",
        //                                         dataplacement: "top",
        //                                         datatoggle: "tooltip",
        //                                         dataoriginaltitle: "Edit"
        //                                     },
        //                                     e("i", {
        //                                         className: "fa fa-pencil"
        //                                     })
        //                                 ),
        //                                 e(
        //                                     "a", {
        //                                         key: "e2",
        //                                         href: "{foo}",
        //                                         className: "btn btn-danger tooltips",
        //                                         dataplacement: "top",
        //                                         datatoggle: "tooltip",
        //                                         dataoriginaltitle: "Delete"
        //                                     },
        //                                     e("i", {
        //                                         className: "fa fa-close"
        //                                     })
        //                                 )
        //                             ]
        //                         ),
        //                         e(
        //                             "div", {
        //                                 key: 'z0',
        //                                 className: "info"
        //                             },
        //                             [
        //                                 e(
        //                                     "h4", {
        //                                         key: "r2"
        //                                     },
        //                                     {name}
        //                                 ),
        //                                 e(
        //                                     "p", {
        //                                         key: "t1",
        //                                         className: "text-muted"
        //                                     },
        //                                     description
        //                                 )
        //                             ]
        //                         ),
        //                         e("div", {
        //                             key: "1",
        //                             className: "clearfix"
        //                         }),
        //                         e("hr", {
        //                             key: "2"
        //                         }),
        //                         e(
        //                             "ul", {
        //                                 key: "3",
        //                                 className: "social-links list-inline p-b-10  d-flex"
        //                             },
        //                             [
        //                                 e(
        //                                     "li", {
        //                                         key: "i1"
        //                                     },
        //                                     e(
        //                                         "a", {
        //                                             dataplacement: 'top',
        //                                             className: "tooltips",
        //                                             href: fb
        //                                         },
        //                                         e("i", {
        //                                             className: "fa fa-facebook"
        //                                         })
        //                                     )
        //                                 ),
        //                                 e(
        //                                     "li", {
        //                                         key: "i2"
        //                                     },
        //                                     e(
        //                                         "a", {
        //                                             dataplacement: 'top',
        //                                             className: "tooltips",
        //                                             href: tw
        //                                         },
        //                                         e("i", {
        //                                             className: "fa fa-twitter"
        //                                         })
        //                                     )
        //                                 ),
        //                                 e(
        //                                     "li", {
        //                                         key: "i3"
        //                                     },
        //                                     e(
        //                                         "a", {
        //                                             dataplacement: 'top',
        //                                             className: "tooltips",
        //                                             href: {lin}
        //                                         },
        //                                         e("i", {
        //                                             className: "fa fa-linkedin"
        //                                         })
        //                                     )
        //                                 ),
        //                                 e(
        //                                     "li", {
        //                                         key: "i4"
        //                                     },
        //                                     e(
        //                                         "a", {
        //                                             dataplacement: 'top',
        //                                             className: "tooltips",
        //                                             href: skype
        //                                         },
        //                                         e("i", {
        //                                             className: "fa fa-skype"
        //                                         })
        //                                     )
        //                                 ),
        //                                 e(
        //                                     "li", {
        //                                         key: "i5"
        //                                     },
        //                                     e(
        //                                         "a", {
        //                                             dataplacement: 'top',
        //                                             className: "tooltips",
        //                                             href: me
        //                                         },
        //                                         e("i", {
        //                                             className: "fa fa-envelope-o"
        //                                         })
        //                                     )
        //                                 )
        //                             ]
        //                         )
        //                     ]
        //                 )
        //             ]
        //         )
        //     )
        // )
        <div className="row d-flex">
             <div className="col-sm-6 offset-3 block">
                 <div className="panel">
                     <div className="panel-body p-t-10">
                        <div className="media-main">
                          <a className="pull-left" href="{foo}">
                              <img className="thumb-lg img-circle bx-s" src={url} alt="" />
                          </a>
                          <div className="pull-right btn-group-sm">
                              <a href="{foo}" className="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                                  <i className="fa fa-pencil"></i>
                              </a>
                              <a href="{foo}" className="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
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
                              <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href={fb} data-original-title="Facebook"><i className="fa fa-facebook"></i></a>
                          </li>
                          <li>
                              <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href={tw} data-original-title="Twitter"><i className="fa fa-twitter"></i></a>
                          </li>
                          <li>
                              <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href={lin} data-original-title="LinkedIn"><i className="fa fa-linkedin"></i></a>
                          </li>
                          <li>
                              <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href={skype} data-original-title="Skype"><i className="fa fa-skype"></i></a>
                          </li>
                          <li>
                              <a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href={me} data-original-title="Message"><i className="fa fa-envelope-o"></i></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          </div>
    
      
        );
};
export default ContactItem;