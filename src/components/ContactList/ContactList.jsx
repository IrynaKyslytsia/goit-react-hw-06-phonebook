import React from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import ContactListItem from "components/ContactListItem/ContactListItem";
import { List, Item } from 'components/ContactList/ContactList.styled';
import { getContacts, getFilter } from "redux/selectors";

const getFilteredContacts = (contacts, filter) => {
  const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normilizedFilter));
    };

const ContactList = () => {    
    
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const visibleContacts = getFilteredContacts(contacts, filter);    

    return (
        <List>
            {visibleContacts.map(({ name, number, id }) => (
              <Item key={id}>
                <ContactListItem 
                name={name}
                number={number}
                id={id}
                 />
              </Item>
            ))}
        </List>
    )
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};