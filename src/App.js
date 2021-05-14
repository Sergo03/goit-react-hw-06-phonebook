import React, { Component } from 'react';
import Form from './Form/Form'
import Filter from './Filter/Filter'
import Render from './Render/RenderContactList'

class App extends Component{



  render() {
   
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.submitForm} />
         <h2>Contacts</h2>
        <Filter />
        <Render/>
      </div>

    )
  }
}


export default App;