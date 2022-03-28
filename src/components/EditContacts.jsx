import React, { useState } from 'react';
import './EditContact.css'

const EditContacts = ({showEditModal, currentContact, saveEdit}) => {
    const [inpEdit, setInpEdit] = useState(currentContact)
    const handleChange = (e)=>{
        let obj = {
            ...inpEdit,
            [e.target.name] : e.target.value
        }
        setInpEdit(obj)
    }
    const handleSubmit = ()=>{
        saveEdit(inpEdit)
        showEditModal()
    }
    return (
        <div className='EditContacts'>
             <label htmlFor="">Change contact</label>
            <input onChange={(e)=> handleChange(e)} value={inpEdit.name} name='name' type="text" />
            <input onChange={(e)=> handleChange(e)} value={inpEdit.phone} name='email' type="text"  />
            <input onChange={(e)=> handleChange(e)} value={inpEdit.email} name='phone' type="text"  />
            <input onChange={(e)=> handleChange(e)} value={inpEdit.img} name='img' type="text"  />
            <div>
            <button onClick={()=>showEditModal()} className='btn btn-danger'>Cancel</button>
            <button onClick={()=>handleSubmit()} className='btn btn-success'>Save</button>
            </div>
        </div>
    );
};

export default EditContacts;