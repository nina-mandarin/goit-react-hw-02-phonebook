import React, { Component } from 'react';
import styled from 'styled-components'

export default class ContactForm extends Component {
  static propTypes = {
    onCreateContact: () => {}
  };

  state = {
    name: '',
    number: ''
  };

  handleChange = ({ target }) => {
    const {name, value} = target;

    this.setState({
      [name]: value,
    })
 
  };

  handleSubmit = e => {
    e.preventDefault();
    const {name, number} = this.state;
 
    if(name && number) {
      this.props.onCreateContact(this.state.name, this.state.number);
      return this.setState({ name: '', number: '' });
    }

    return null;
  };


  render() {
    const {name, number} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
      <Label>
        <LabelText>Name</LabelText>
        <input type="text" name="name" value={name} onChange={this.handleChange} required />
      </Label>
      <Label>
        <LabelText>Number</LabelText>
        <input type="text" name="number" value={number} onChange={this.handleChange} required />
      </Label>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </form>
    )
  }
}

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
`;

const LabelText = styled.span`
  display: block;
  margin-bottom: 8px;
`;

const SubmitBtn = styled.button`
  padding: 10px 16px;
  border: 1px solid #777;
  border-radius: 4px;
  outline: none;
`;