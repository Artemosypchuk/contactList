import React from 'react';
import {Fragment} from 'react';
import './contact_list.css';
import ContactItem from "./contactItem/contact_Item" 

const ContactList = () =>{

    return(
        <Fragment>

            <h2>ContactList</h2>
            <ContactItem></ContactItem>
        </Fragment>
        
    )
}
export default ContactList;