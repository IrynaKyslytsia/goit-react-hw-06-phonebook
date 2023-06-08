import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { Text, DeleteBtn } from 'components/ContactListItem/ContactListItem.styled';
import { deleteContact } from 'redux/contactsSlice';

const ContactListItem = ({ name, number }) => {
    const dispatch = useDispatch();

    const onDelete = id => {
        dispatch(deleteContact(id))
    }

    return (
        <>
            <Text>{name}: {number}</Text>
            <DeleteBtn 
            type="button" 
            onClick={onDelete}>Delete</DeleteBtn>
        </>
     );
        };

export default ContactListItem;

ContactListItem.propTypes = {    
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};