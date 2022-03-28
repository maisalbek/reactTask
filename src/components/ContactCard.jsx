import './ContactCard.css'
import React from 'react';

const ContactCard = ({item, deleteContact, funcForEdit}) => {
    return (
        <div className='ContactCard'>
            <img width='50px' height='50px' src={item.img} alt="" />
            <div className='cont'>
            <h6>{item.name}</h6>
            <h6>{item.phone}</h6>
            <p>{item.email}</p>
            </div>
            <img onClick={()=>funcForEdit(item)} width='40px' height='40px' src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png" alt="" />
            <img onClick={()=>deleteContact(item)} width='35px' height='35px' src="http://cdn.onlinewebfonts.com/svg/img_216917.png" alt="" />
        </div>
    );
};

export default ContactCard;