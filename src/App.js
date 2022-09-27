import './App.css';

// Uncomment untuk memuat daftar kontak
import {
  Grid,
} from '@mui/material';
import React, { useState } from 'react';
import contactsJSON from './data/contacts.json';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list


  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const addContact = (inputData) => {
    const objContact = {
      name: inputData.name,
      phone: inputData.phone,
      email: inputData.email,
      photo: inputData.url
    };
    const inputNewData = [...contacts, objContact];
    setContacts(inputNewData);
  }

  return (
    <div className="App">
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ContactForm handleclick={addContact} />
        </Grid>
        <Grid item xs={12} sm={6}>
          {contacts.map((contact, index) => (<Contact key={index} data={contact} />))}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
