import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { AppWrapper } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  change = obj => {
    this.setState({
      contacts: [obj, ...this.state.contacts],
    });
  };
  handleFindContacts = evt => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  render() {
    return (
      <AppWrapper>
        <h2>Phonebook</h2>
        <ContactForm contacts={this.state.contacts} change={this.change} />
        <h3>Contacts</h3>
        <ContactFilter
          value={this.state.filter}
          handleFindContacts={this.handleFindContacts}
        />

        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </AppWrapper>
    );
  }
}
