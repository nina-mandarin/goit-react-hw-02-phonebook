import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import ContactListItem from '../ContactListItem';

const ContactList = ({ contacts, onDeleteItem }) => {
  return (
    <List>
    {contacts.map(({id, name, number}) => {
      return (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={() => onDeleteItem(id)}
        />
      );
    })}
  </List>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })).isRequired,
  onDeleteItem: PropTypes.func.isRequired
};

const List = styled.ul`
  padding: 0 0 0 10px;
  margin: 0;
  list-style-position: inside;
`;

export default ContactList;