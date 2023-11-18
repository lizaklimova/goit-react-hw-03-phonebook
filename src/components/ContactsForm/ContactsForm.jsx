import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  ContactsFormEl,
  ContactsNameInput,
  ContactsNumberInput,
  Label,
  SubmitBtn,
} from './ContactsForm.styled';

export default class ContactsForm extends Component {
  idName = nanoid();
  idTel = nanoid();

  state = {
    name: '',
    number: '',
  };

  onChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { value } = e.currentTarget.elements.name;

    this.props.checkContact(value)
      ? Notify.info(`Name ${value} already exists`)
      : this.props.addContact(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <ContactsFormEl autoComplete="off" onSubmit={this.onSubmit}>
        <Label htmlFor={this.idName}>Name</Label>
        <ContactsNameInput
          id={this.idName}
          type="text"
          name="name"
          onChange={this.onChange}
          value={name}
          placeholder="Full name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
        <Label htmlFor={this.idTel}>Number</Label>
        <ContactsNumberInput
          id={this.idTel}
          type="tel"
          name="number"
          onChange={this.onChange}
          value={number}
          placeholder="123-45-67"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
        <SubmitBtn type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
            ></path>
          </svg>
          Add contact
        </SubmitBtn>
      </ContactsFormEl>
    );
  }
}
