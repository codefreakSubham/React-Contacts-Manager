import React, {useRef} from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";

const ContactList = (props) => {
    console.log(props);
    const inputE1 = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact = {contact} clickHandler = {deleteContactHandler} key={ contact.id }></ContactCard>;
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputE1.current.value);
    };
    
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

            <div className = "ui search">
                <div className = "ui icon input">
                    <input
                     ref={inputE1}
                     type = "text" 
                     placeholder = "Search Contacts" 
                     className="prompt" 
                     value={props.term} 
                     onChange={getSearchTerm}
                     />
                    <i className="search icon"></i>
                </div>
            </div>

            <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No Contacts Available"}</div>
        </div>
    );
};

export default ContactList;