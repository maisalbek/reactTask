import React, { useState } from 'react';
import Form from './Form';


const Form1 = () => {
    const [form, setForm] = useState(true)
    const [a,setA] = useState('')
    const getInfo=(current)=>{
        setA(current.email)
    }
    const getstat=(bool)=>{
        setForm(bool)
    }
    const exit =()=>{
        setForm(true)
        setA('')
    }
    return (
        <div style={{width: '400px',borderStyle: 'solid', marginBottom: '20px'}}>
            {
             form ? <Form getInfo={getInfo} getstat={getstat} /> : null
            }
            <h3>Your e-mail: {a}</h3>
            
            <button style={{marginBottom: '20px'}} onClick={()=>exit()}>Выйти</button>
        </div>
    );
};

export default Form1;