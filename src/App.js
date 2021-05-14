import React, { Component } from 'react';
import Form from './Form/Form'
import shortid from 'shortid';
import Filter from './Filter/Filter'
import Render from './Render/RenderContactList'

class App extends Component{
  // state = {
  //   contacts: [],
  //   filter: ''
  
  // }

  // deleteContact = (contactId) => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }))
  // }
  
  // submitForm = (data) => {
  //   const { contacts } = this.state;
  //   const id = shortid.generate();
  //   const isIncludeName = !!contacts.find(contact => contact.name === data.name)
      
  //   isIncludeName && alert(`${data.name} is already in contacts`)
  //   !isIncludeName && this.setState(prevState => (
  //     {
  //       contacts: [...prevState.contacts, { ...data, id }]
  //     }
  //   )
  //   )
  // }
  
  // changeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value })
  // }

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  // this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // }

  render() {
    // const normalizedFilter = this.state.filter.toLowerCase();
    // const visibleContacts = this.state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter))
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.submitForm} />
         <h2>Contacts</h2>
        <Filter value={this.filter} onChange={this.changeFilter }/>
        {/* <Render value={visibleContacts} onDeleteContact={this.deleteContact}/> */}
      </div>

    )
  }
}


export default App;