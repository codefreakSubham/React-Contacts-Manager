import React from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";

const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact = {contact} clickHandler = {deleteContactHandler} key={ contact.id }></ContactCard>;
    });
    return(
        <div class = "main">
            <div>
                <h1>
                    DUMMY DUMMY DUMMY
                </h1>
            </div>
            <h3>
                Contact List
            </h3>
                <Link to = "/add">
                    <button className = "ui button blue right">Add Contact</button>
                </Link>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    );
};

export default ContactList;