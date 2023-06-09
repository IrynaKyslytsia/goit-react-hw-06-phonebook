import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { Text, DeleteBtn } from 'components/ContactListItem/ContactListItem.styled';
import { deleteContact } from 'redux/contactsSlice';

const ContactListItem = ({ name, number, id }) => {
    const dispatch = useDispatch();

    return (
        <>
            <Text>{name}: {number}</Text>
            <DeleteBtn 
            type="button" 
            onClick={() => {dispatch(deleteContact(id))}}>Delete</DeleteBtn>
        </>
     );
        };

export default ContactListItem;

ContactListItem.propTypes = {    
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};