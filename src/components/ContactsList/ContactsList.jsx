import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ContactsItem from './ContactsItem';
import { ContactsListStyled } from './ContactsList.styled';

const ContactsList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.contacts.filter);

    const filteredContacts = useMemo(() => {
        const normilizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter));
    }, [contacts, filter]);

    return (
        <>
            {filteredContacts?.length > 0 ? (
                <ContactsListStyled>
                    {filteredContacts.map(({ id, name, number }) => (
                        <ContactsItem key={id} id={id} name={name} number={number} type="button" />
                    ))}
                </ContactsListStyled>
            ) : (
                <p>No contacts found</p>
            )}
        </>
    );
};

export default ContactsList;
