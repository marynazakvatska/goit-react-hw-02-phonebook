import React from 'react';
import './Phonebook.module.css';
/* import Section from '../Section/Section'; */
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactLIst/ContactList';
/* import { number } from 'prop-types'; */
import shortid from 'shortid';
import Filter from '../Filter/Filter';


class Phonebook extends React.Component {
  state = {
      contacts: [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
       filter: ''

    }

/*      formSubmitHandler = data => {
       
         console.log(data);
          
    
    } 
 */
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

    changeFilter = e => {
        this.setState({filter: e.currentTarget.value})
}
 
    getVisibleClients = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    }
    
  render() {
      const { contacts, filter } = this.state;

      
      const visibleContacts = this.getVisibleClients();
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={ this.addContact}/>

            <h2>Contacts</h2>
             <Filter value={filter} onChange={this.changeFilter} />
            
            <ContactList clients={visibleContacts}/>
            


      </div>
    );
  }
}

export default Phonebook;
