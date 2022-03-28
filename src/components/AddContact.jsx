import React, { useState } from 'react';
import './AddContact.css'

const AddContact = ({funcForAdd, showAddModal}) => {
    const [contact, setContact] = useState({id: null, name: '',phone: '', email: '', img: ''})
    const handleChange = (e)=>{
        let obj = {
            ...contact,
            [e.target.name] : e.target.value
        }
        setContact(obj)
    }
    const handleSubmit =()=>{
        funcForAdd(contact) 
    }
    return (
        <div className='AddContact'>
            <input onChange={(e)=>handleChange(e)} placeholder='Name' name='name' type="text" />
            <input onChange={(e)=>handleChange(e)} placeholder='Phone' name='phone' type="text" />
            <input onChange={(e)=>handleChange(e)} placeholder='E-mail' name='email' type="text" />
            <input onChange={(e)=>handleChange(e)} placeholder='Image' name='img' type="text" />
            <div>
            <button onClick={()=>showAddModal()} className='btn btn-danger'>Close</button>
            <button onClick={()=>handleSubmit()} className='btn btn-success'>Ok</button>
            </div>
        </div>
    );
};

export default AddContact;