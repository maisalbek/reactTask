import './App.css';
import React, { useState } from 'react';
// import Routes from './Routes';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import EditContacts from './components/EditContacts';
import Counter from './components/Counter';
import Form1 from './components/Form1';
import Receipts from './components/Receipts';



function App() {
 const [addModal, setAddModal] = useState(false)
 const [editModal, setEditModal] = useState(false)
 const [contacts, setContacts] = useState([])
 const [currentContact, setCurrentContact] = useState({})
 const showAddModal =()=>{
   addModal ? setAddModal(false) : setAddModal(true)
 }
 const showEditModal = ()=>{
   editModal ? setEditModal(false) : setEditModal(true)
 }
 const funcForAdd =(obj)=>{
   obj.id = Date.now()
  let arr = [...contacts]
  arr.push(obj)
  setContacts(arr)
  showAddModal()
 }
 const deleteContact = (obj)=>{
   let arr = contacts.filter((item)=>{
    return item.id !== obj.id
   })
   setContacts(arr)
 }
 const funcForEdit =(obj)=>{
  setCurrentContact(obj)
  setEditModal(true)
 }
 const saveEdit =(obj)=>{
  let arr = contacts.map((item)=>{
    if(item.id===obj.id){
      return obj
    }else{
      return item
    }
  })
  setContacts(arr)
 }
  return (
    <div className="App">
      <Counter />
      <Receipts />
      <Form1 />
      {/* <Routes /> */}
      <Header  showAddModal={showAddModal} />
      {
        addModal ? <AddContact showAddModal={showAddModal} funcForAdd={funcForAdd} /> : null
      }
      <ContactList contacts={contacts} deleteContact={deleteContact} 
      funcForEdit={funcForEdit}/>
      {
        editModal ? <EditContacts saveEdit={saveEdit} showEditModal={showEditModal} 
        currentContact={currentContact}/> : null
      }
    </div>
  );
}

export default App;
