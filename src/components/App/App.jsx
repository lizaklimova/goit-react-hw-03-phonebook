import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from '../ContactsForm';
import ContactsList from '../ContactsList';
import FilterSearch from '../FilterSearch';
import { Container, ContactsSection } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = formState => {
    const { name, number } = formState;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  filterSearch = e => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  checkExistingContact = value => {
    return this.state.contacts.some(contact => contact.name === value);
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactsForm
          addContact={this.addContact}
          checkContact={this.checkExistingContact}
        />

        <ContactsSection>
          <h2>Contacts</h2>
          <FilterSearch value={filter} onChange={this.filterSearch} />
          {filteredContacts.length ? (
            <ContactsList
              contacts={filteredContacts}
              onClick={this.deleteContact}
            />
          ) : (
            <p>No contacts found</p>
          )}
        </ContactsSection>
      </Container>
    );
  }
}
