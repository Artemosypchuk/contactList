import React from "react";
import { Fragment } from "react";
import "./contact_list.css";
import ContactItem from "./contactItem/contact_Item";

const ContactList = ({ ContactList, onDelete, Favor, }) => {
  const listItem = ContactList.map(item => {
    return (
      <ContactItem
        avatar={item.avatar}
        name={item.name}
        description={item.description}
        gender={item.gender}
        facebbok={item.facebooklist}
        twitt={item.twitterList}
        linked={item.linkeDin}
        skyPe={item.skype}
        messs={item.messager}
        key={item.id}
        onDelete={() => onDelete(item.id)}
        favorite={item.favorite}
        Favor={() => Favor(item.id)}
      ></ContactItem>
    );
  });
  return (
    <Fragment>
      <h2>ContactList</h2>
      {listItem}
    </Fragment>
  );
};

export default ContactList;
