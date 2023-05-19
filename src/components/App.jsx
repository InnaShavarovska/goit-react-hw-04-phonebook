import { useState, useEffect } from 'react';
import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = event => {
    const loweredCase = event.name.toLowerCase().trim();

    const exists = contacts.some(
      contact => contact.name.toLowerCase().trim() === loweredCase
    );

    if (exists) {
      alert(`${event.name} is already in contacts!`);
    } else {
      setContacts([...contacts, event]);
    }
  };

  const onRemoveContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onChange = event => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onChange} />
      <ContactList
        contacts={contacts}
        onRemoveContact={onRemoveContact}
        filter={filter}
      />
    </div>
  );
};
