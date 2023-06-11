import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Form, FormLabel, FormInput, FormBtn } from 'components/ContactForm/ContactForm.styled';
import { getContacts } from 'redux/selectors';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSabmit = (e) => {
      e.preventDefault();
      
      const form = e.target;
      const name = form.elements.name.value;
      const number = form.elements.number.value;
      
      if (contacts.find(contact => contact.name === name)) {
        alert(`${name} is already in contacts.`);
          return;
    };

  dispatch(addContact({ name, number }));
      form.reset();
    };  

    return (
        <Form onSubmit={handleSabmit}>
            <FormLabel htmlFor={nanoid()}>Name</FormLabel>
            <FormInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
           
            <FormLabel htmlFor={nanoid()}>Number</FormLabel>
            <FormInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            
            <FormBtn type='submit'>Add contact</FormBtn>
          </Form>
    )
};