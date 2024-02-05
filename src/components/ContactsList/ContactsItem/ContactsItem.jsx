import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactsSlice';
import { ContactsItemStyled, DeleteButton } from './ContactsItem.styled';

const ContactsItem = ({ id, name, number, type }) => {
    const dispatch = useDispatch();
    return (
        <ContactsItemStyled>
            {`${name}: ${number}`}
            <DeleteButton type={type} onClick={() => dispatch(deleteContact({id}))}>
                Delete
            </DeleteButton>
        </ContactsItemStyled>
    );
};

export default ContactsItem;
