import React from 'react';
import './Header.css'

const Header = ({showAddModal}) => {
    return (
        <div className='Header'>
            <h2>Contact Manager</h2>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <h3>Contact List</h3>
                <button onClick={()=>showAddModal()} className='btn btn-info'>Add Contact</button>
            </div>
                <input placeholder='Search contact' type="text" />
        </div>
    );
};

export default Header;