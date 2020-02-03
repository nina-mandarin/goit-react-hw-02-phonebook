import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import styled from 'styled-components'

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  // Add new contact
  addContact = (name, number) => {
    const contact = {
      id: uuid(),
      name: name,
      number: number
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      };
    })
  };

  // Filter
  changeFilter = filter => {
    this.setState({ filter });
  };

  handleFilter = () => {
    const {contacts, filter} = this.state;

    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  // Delete a contact
  deleteContact = itemId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== itemId),
      };
    });
  }

  render() {
    const {filter} = this.state;
    const filteredContacts = this.handleFilter();

    return (
      <Wrapper>
        <Section>
          <PageTitle>Phonebook</PageTitle>
          <ContactForm onCreateContact={this.addContact} />
        </Section>
        <Section>
          <SectionTitle>Contacts</SectionTitle>
          {(filteredContacts.length > 1 || filter) && (
            <Filter value={filter} onChange={this.changeFilter} />
          )}
          {filteredContacts.length > 0 && (
            <ContactList contacts={filteredContacts} onDeleteItem={this.deleteContact} />
          )}
        </Section>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 80%;
  min-height: 100vh;
  padding: 60px 40px;
  margin: 0 auto;
  background-color: #fff;
`;

const Section = styled.section`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

const PageTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 700;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 42px;
  font-weight: 500;
`;