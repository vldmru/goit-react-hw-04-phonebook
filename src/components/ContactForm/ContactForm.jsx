import React, { useState } from 'react';
import { Form, Label, Input, Button } from "./ContactForm.styled";
import PropTypes from 'prop-types';


export function ContactForm({ onSubmit }) {
  

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    
    }
  }

    
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name: name, number: number });
      setName('');
      setNumber('');
    };

  
    return (
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="contact_name">Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <Label htmlFor="contact_number">Number</Label>
        <Input
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
        <Button type="submit"> Add contact</Button>
      </Form>
    );
  
  }
ContactForm.propTypes = {
   onSubmit: PropTypes.func.isRequired,
 }