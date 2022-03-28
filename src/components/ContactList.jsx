import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({contacts, deleteContact, funcForEdit}) => {
    return (
        <div>
            {
               contacts?.length && contacts.length > 0 ? (contacts.map((item)=>
                <ContactCard deleteContact={deleteContact} key={item.id} item={item} 
                funcForEdit={funcForEdit}/>)) : (<h4>No contacts</h4>)
            }
        </div>
    );
};

export default ContactList;