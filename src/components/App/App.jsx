import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../redux/contactsSlice';
import ContactsForm from 'components/ContactsForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';

import { Container, PhoneBook, Title } from './App.styled';
import { selectContacts, selectError, selectIsLoading } from '../../redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { addContact, fetchContacts } from '../../redux/operations';

const App = () => {
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleSubmit = newContact => {
        const { name, phone } = newContact;

        const inContacts = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        );

        if (inContacts) {
            return alert(`${inContacts.name} is already in contacts`);
        }
        const id = nanoid();
        dispatch(addContact({ id, name, phone }));
    };

    const handleFilterChange = event => {
        const value = event.currentTarget.value;
        dispatch(setFilter({ value }));
    };

    return (
        <Container>
            <PhoneBook>
                <Title>PhoneBook</Title>
                <ContactsForm onSubmit={handleSubmit} />
            </PhoneBook>

            <div className="contacts">
                <Title>Contacts</Title>
                {isLoading && !error && <b>Request in progress...</b>}
                {contacts?.length > 0 ? (
                    <>
                        <Filter onChange={handleFilterChange} />
                        <ContactsList />
                    </>
                ) : (
                    <p>There's nothing here</p>
                )}
            </div>
        </Container>
    );
};

export default App;
