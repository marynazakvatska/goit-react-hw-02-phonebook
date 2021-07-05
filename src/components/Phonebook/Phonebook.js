import React from 'react';
import './Phonebook.module.css';
/* import Section from '../Section/Section'; */
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactLIst/ContactList';
/* import { number } from 'prop-types'; */
import shortid from 'shortid'


class Phonebook extends React.Component {
  state = {
      contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
       filter: ''

    }

     formSubmitHandler = e => {
       
         console.log(e.target);
          
         this.setState((e) => { this.state.contacts.push(e.target.value) })
    } 

    addContact = e => {
        const { contacts } = this.state;
        console.log({ contacts });
        const contact = {
            id: shortid.generate(),
            name: e.name,
            number: e.number,
        }
        this.setState(prevState => ({
            contacts: [contact,...prevState.contacts],
        }))
    }


 
  render() {
   
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={/* this.formSubmitHandler, */ this.addContact}/>

             <h2>Contacts</h2>
            <ContactList />


      </div>
    );
  }
}

export default Phonebook;
