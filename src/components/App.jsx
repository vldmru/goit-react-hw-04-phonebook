import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Container, Section, TitleH1, TitleH2  } from "./App.styled";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

const CONTACTS_KEY = 'contacts';

export function App() {
   const localData = JSON.parse(localStorage.getItem(CONTACTS_KEY));
  const [contacts, setContacts] = useState (() =>
     localData ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = ({ name, number }) => {
        
     const findName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
     if (findName) {
       return alert(`${name} is already in contacts.`);
     }

    const newContact = { name, number, id: nanoid() };
    setContacts(contacts => [...contacts, newContact]);
  };
  
  const deleteContact = contactId => {
    setContacts(contacts => contacts.filter((contact => contact.id !== contactId)));
  };  

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

   const filteredContacts = filterContacts();
    
    return (
      <Container>
        <Section>
          <TitleH1>Phonebook</TitleH1>
          <ContactForm
            onSubmit={addContact} />
        
          <TitleH2>Contacts</TitleH2>
          <Filter
            value={filter}
            onChange={changeFilter}
          />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact} />
        </Section>
      </Container>
    )
  }