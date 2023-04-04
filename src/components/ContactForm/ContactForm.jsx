import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, LabelInput, Button } from './ContactForm.styled';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  NameInputId = nanoid();
  NumberInputId = nanoid();

  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitContact = evt => {
    evt.preventDefault();

    this.props.change({
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    });

    // const { contacts } = this.props;
    // contacts.push({
    //   name: this.state.name,
    //   id: nanoid(),
    //   number: this.state.number,
    // });
    // this.setState({
    //   contacts: [
    //     ,
    //     ...contacts,
    //   ],
    // });

    // this.resetNameInput();
  };

  resetNameInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    console.log(this.props.contacts);
    return (
      <>
        <Form onSubmit={this.handleSubmitContact}>
          <LabelInput htmlFor={this.NameInputId}> Name </LabelInput>
          <input
            id={this.NameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <LabelInput htmlFor={this.NumberInputId}> Number </LabelInput>
          <input
            id={this.NumberInputId}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="[0-9\-]+"
            title="Number may contain only numbers."
            required
          />
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}
