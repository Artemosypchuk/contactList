import React from "react";
import "./contact_Item.css";
const e = React.createElement;
const ContactItem = () => {

    return e(
        "div", {
            className: "row d-flex"
        },
        e(
            "div", {
                className: "col-sm-6 offset-3 block"
            },
            e(
                "div", {
                    className: "panel"
                },
                e(
                    "div", {
                        className: "panel-body p-t-10"
                    },
                    [
                        e(
                            "div", {
                                key: 'a0',
                                className: "media-main"
                            },
                            [
                                e(
                                    "a", {
                                        key: "a1",
                                        className: "pull-left",
                                        href: "{foo}"
                                    },
                                    e("img", {
                                        className: "thumb-lg img-circle bx-s",
                                        src: "https://bootdey.com/img/Content/user_1.jpg",
                                        alt: "none"
                                    })
                                ),
                                e(
                                    "div", {
                                        key: "q2",
                                        className: "pull-right btn-group-sm"
                                    },
                                    [
                                        e(
                                            "a", {
                                                key: "w1",
                                                href: "{foo}",
                                                className: "btn btn-success tooltips",
                                                dataplacement: "top",
                                                datatoggle: "tooltip",
                                                dataoriginaltitle: "Edit"
                                            },
                                            e("i", {
                                                className: "fa fa-pencil"
                                            })
                                        ),
                                        e(
                                            "a", {
                                                key: "e2",
                                                href: "{foo}",
                                                className: "btn btn-danger tooltips",
                                                dataplacement: "top",
                                                datatoggle: "tooltip",
                                                dataoriginaltitle: "Delete"
                                            },
                                            e("i", {
                                                className: "fa fa-close"
                                            })
                                        )
                                    ]
                                ),
                                e(
                                    "div", {
                                        key: 'z0',
                                        className: "info"
                                    },
                                    [
                                        e(
                                            "h4", {
                                                key: "r2"
                                            },
                                            "Jonathan Smith"
                                        ),
                                        e(
                                            "p", {
                                                key: "t1",
                                                className: "text-muted"
                                            },
                                            "Graphics Designer"
                                        )
                                    ]
                                ),
                                e("div", {
                                    key: "1",
                                    className: "clearfix"
                                }),
                                e("hr", {
                                    key: "2"
                                }),
                                e(
                                    "ul", {
                                        key: "3",
                                        className: "social-links list-inline p-b-10  d-flex"
                                    },
                                    [
                                        e(
                                            "li", {
                                                key: "i1"
                                            },
                                            e(
                                                "a", {
                                                    dataplacement: 'top',
                                                    className: "tooltips",
                                                    href: "{foo}"
                                                },
                                                e("i", {
                                                    className: "fa fa-facebook"
                                                })
                                            )
                                        ),
                                        e(
                                            "li", {
                                                key: "i2"
                                            },
                                            e(
                                                "a", {
                                                    dataplacement: 'top',
                                                    className: "tooltips",
                                                    href: "{foo}"
                                                },
                                                e("i", {
                                                    className: "fa fa-twitter"
                                                })
                                            )
                                        ),
                                        e(
                                            "li", {
                                                key: "i3"
                                            },
                                            e(
                                                "a", {
                                                    dataplacement: 'top',
                                                    className: "tooltips",
                                                    href: "{foo}"
                                                },
                                                e("i", {
                                                    className: "fa fa-linkedin"
                                                })
                                            )
                                        ),
                                        e(
                                            "li", {
                                                key: "i4"
                                            },
                                            e(
                                                "a", {
                                                    dataplacement: 'top',
                                                    className: "tooltips",
                                                    href: "{foo}"
                                                },
                                                e("i", {
                                                    className: "fa fa-skype"
                                                })
                                            )
                                        ),
                                        e(
                                            "li", {
                                                key: "i5"
                                            },
                                            e(
                                                "a", {
                                                    dataplacement: 'top',
                                                    className: "tooltips",
                                                    href: "{foo}"
                                                },
                                                e("i", {
                                                    className: "fa fa-envelope-o"
                                                })
                                            )
                                        )
                                    ]
                                )
                            ]
                        )
                    ]
                )
            )
        )
    );
};

export default ContactItem;