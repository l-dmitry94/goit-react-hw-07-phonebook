import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContact, setFilter } from '../../redux/contactsSlice';
import ContactsForm from 'components/ContactsForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';

import { Container, PhoneBook, Title } from './App.styled';

const App = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const dispatch = useDispatch();

    const handleSubmit = newContact => {
        const { name, number } = newContact;

        const inContacts = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

        if (inContacts) {
            alert(`${inContacts.name} is already in contacts`);
            return;
        }
        const id = nanoid();
        dispatch(addContact({ id, name, number }));
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
